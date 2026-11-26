import { computed, Injectable, signal } from '@angular/core';
import { AUDIO, AudioGuide } from '../data/audio';
import { AUDIO_TRACKS, AudioTrack } from '../data/audio.generated';
import { persisted } from './persist';

/** Divide un texto en frases (la misma división que usa tools/export-audio-text.mjs). */
export function splitSentences(text: string): string[] {
  return (text.match(/[^.!?…]+(?:[.!?…]+|$)/g) ?? [text]).map((s) => s.trim()).filter(Boolean);
}

/** Índice de la frase que suena en el segundo `t` del capítulo. */
export function sentenceAt(starts: number[], t: number): number {
  let i = 0;
  while (i + 1 < starts.length && starts[i + 1] <= t) i++;
  return i;
}

/**
 * Audioguía con MP3 grabados de antemano (public/audio, generados con tools/make-audio.py).
 * Suena aunque el iPhone esté en modo silencio y queda guardada para usarla sin conexión.
 */
@Injectable({ providedIn: 'root' })
export class AudioPlayer {
  readonly key = signal<string | null>(null);
  readonly chapter = signal(0);
  readonly sentence = signal(0);
  readonly playing = signal(false);
  readonly loading = signal(false);
  readonly error = signal('');
  readonly expanded = signal(false);
  readonly rate = persisted<number>('audioRate', 1);

  readonly guide = computed<AudioGuide | null>(() => (this.key() ? AUDIO[this.key()!] ?? null : null));
  readonly sentences = computed(() => {
    const g = this.guide();
    return g ? splitSentences(g.chapters[this.chapter()].text) : [];
  });
  readonly track = computed<AudioTrack | null>(() => {
    const k = this.key();
    return k ? AUDIO_TRACKS[k]?.[this.chapter()] ?? null : null;
  });

  /** Descarga para usar sin conexión (pestaña Guía). */
  readonly offlineDone = signal(0);
  readonly offlineBusy = signal(false);
  readonly offlineTotal = Object.values(AUDIO_TRACKS).reduce((n, t) => n + t.length, 0);

  private el: HTMLAudioElement | null = null;
  private urls = new Map<string, string>();
  private wakeLock: { release(): Promise<void> } | null = null;

  has(place?: string): boolean {
    return !!place && place in AUDIO;
  }

  /** Abre una audioguía (sin empezar a sonar hasta que se pulse play). */
  open(place: string): void {
    if (this.key() !== place) {
      this.stop();
      this.key.set(place);
      this.chapter.set(0);
      this.sentence.set(0);
      this.error.set('');
      void this.prepare(place);
    }
    this.expanded.set(true);
  }

  playChapter(i: number): void {
    this.chapter.set(i);
    this.sentence.set(0);
    this.load(true);
  }

  toggle(): void {
    if (this.playing()) {
      this.pause();
      return;
    }
    const a = this.audio();
    if (!a.src || !a.src.endsWith(this.track()?.file ?? '\0')) this.load(true);
    else this.play();
  }

  pause(): void {
    this.el?.pause();
    this.playing.set(false);
    this.releaseWakeLock();
  }

  stop(): void {
    this.pause();
    if (this.el) this.el.currentTime = 0;
    this.sentence.set(0);
  }

  close(): void {
    this.stop();
    this.el?.removeAttribute('src');
    this.el?.load();
    this.key.set(null);
    this.expanded.set(false);
  }

  next(): void {
    const g = this.guide();
    if (g && this.chapter() < g.chapters.length - 1) this.playChapter(this.chapter() + 1);
  }

  prev(): void {
    if ((this.el?.currentTime ?? 0) > 4 || this.chapter() === 0) this.playChapter(this.chapter());
    else this.playChapter(this.chapter() - 1);
  }

  setRate(r: number): void {
    this.rate.set(r);
    if (this.el) this.el.playbackRate = r;
  }

  private audio(): HTMLAudioElement {
    if (this.el) return this.el;
    const a = new Audio();
    a.preload = 'auto';
    a.addEventListener('timeupdate', () => {
      const t = this.track();
      if (t) this.sentence.set(sentenceAt(t.starts, a.currentTime));
    });
    a.addEventListener('waiting', () => this.loading.set(true));
    a.addEventListener('playing', () => this.loading.set(false));
    a.addEventListener('ended', () => {
      const g = this.guide();
      if (g && this.chapter() < g.chapters.length - 1) this.playChapter(this.chapter() + 1);
      else {
        this.playing.set(false);
        this.sentence.set(0);
        this.releaseWakeLock();
      }
    });
    a.addEventListener('error', () => {
      if (!a.getAttribute('src')) return;
      this.loading.set(false);
      this.playing.set(false);
      this.error.set('No se ha podido cargar el audio. Abrid la audioguía una vez con conexión para que quede guardada.');
    });
    this.el = a;
    return a;
  }

  private load(autoplay: boolean): void {
    const t = this.track();
    if (!t) return;
    const a = this.audio();
    this.error.set('');
    a.src = this.urls.get(t.file) ?? `audio/${t.file}`;
    a.playbackRate = this.rate();
    this.setMediaSession();
    if (autoplay) this.play();
  }

  private play(): void {
    const a = this.audio();
    a.playbackRate = this.rate();
    this.playing.set(true);
    this.loading.set(true);
    this.requestWakeLock();
    a.play()
      .then(() => {
        this.loading.set(false);
        a.playbackRate = this.rate();
      })
      .catch((e: unknown) => {
        if ((e as DOMException)?.name === 'AbortError') return;
        this.loading.set(false);
        this.playing.set(false);
      });
  }

  /** Guarda en caché todos los MP3 para poder escucharlos sin conexión. */
  async downloadAll(): Promise<void> {
    if (this.offlineBusy() || typeof caches === 'undefined') return;
    this.offlineBusy.set(true);
    this.error.set('');
    let done = 0;
    try {
      const cache = await caches.open(CACHE);
      for (const file of Object.values(AUDIO_TRACKS).flatMap((t) => t.map((x) => x.file))) {
        if (!(await cache.match(fileUrl(file)))) await cache.add(fileUrl(file));
        this.offlineDone.set(++done);
      }
    } catch {
      this.error.set('Se ha cortado la descarga. Volved a intentarlo con wifi.');
    } finally {
      this.offlineBusy.set(false);
    }
  }

  /** Cuántos MP3 están ya guardados en el móvil. */
  async countOffline(): Promise<void> {
    if (typeof caches === 'undefined') return;
    const cache = await caches.open(CACHE);
    const keys = await cache.keys();
    this.offlineDone.set(Math.min(keys.length, this.offlineTotal));
  }

  /**
   * Prepara los capítulos de una guía como blob: desde la caché (o la red, guardándolos).
   * Así suenan sin conexión y Safari no depende de peticiones parciales.
   */
  private async prepare(place: string): Promise<void> {
    for (const u of this.urls.values()) URL.revokeObjectURL(u);
    this.urls.clear();
    if (typeof caches === 'undefined') return;
    try {
      const cache = await caches.open(CACHE);
      for (const t of AUDIO_TRACKS[place] ?? []) {
        let res = await cache.match(fileUrl(t.file));
        if (!res) {
          const net = await fetch(fileUrl(t.file));
          if (!net.ok) continue;
          await cache.put(fileUrl(t.file), net.clone());
          res = net;
        }
        if (this.key() !== place) return;
        this.urls.set(t.file, URL.createObjectURL(await res.blob()));
      }
    } catch {
      // Sin caché disponible: se usará la URL normal.
    }
  }

  /** Título y botones en la pantalla de bloqueo. */
  private setMediaSession(): void {
    const ms = (navigator as Navigator & { mediaSession?: MediaSession }).mediaSession;
    const g = this.guide();
    if (!ms || !g || typeof MediaMetadata === 'undefined') return;
    ms.metadata = new MediaMetadata({
      title: g.chapters[this.chapter()].title,
      artist: g.title,
      album: 'Audioguía de Roma',
    });
    ms.setActionHandler('play', () => this.play());
    ms.setActionHandler('pause', () => this.pause());
    ms.setActionHandler('nexttrack', () => this.next());
    ms.setActionHandler('previoustrack', () => this.prev());
  }

  private requestWakeLock(): void {
    const nav = navigator as Navigator & { wakeLock?: { request(t: 'screen'): Promise<{ release(): Promise<void> }> } };
    if (this.wakeLock || !nav.wakeLock) return;
    nav.wakeLock
      .request('screen')
      .then((l) => (this.wakeLock = l))
      .catch(() => {});
  }

  private releaseWakeLock(): void {
    this.wakeLock?.release().catch(() => {});
    this.wakeLock = null;
  }
}

const CACHE = 'roma26-audio';

function fileUrl(file: string): string {
  return new URL(`audio/${file}`, document.baseURI).href;
}
