import { computed, Injectable, signal } from '@angular/core';
import { AUDIO, AudioGuide } from '../data/audio';
import { persisted } from './persist';

/** Divide un texto en frases para leerlas una a una (evita cortes en textos largos). */
export function splitSentences(text: string): string[] {
  return (text.match(/[^.!?…]+(?:[.!?…]+|$)/g) ?? [text]).map((s) => s.trim()).filter(Boolean);
}

/**
 * Audioguía con la síntesis de voz del propio móvil (funciona sin conexión si el
 * sistema tiene voz en español instalada, que es lo habitual).
 */
@Injectable({ providedIn: 'root' })
export class AudioPlayer {
  readonly supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  readonly key = signal<string | null>(null);
  readonly chapter = signal(0);
  readonly sentence = signal(0);
  readonly playing = signal(false);
  readonly expanded = signal(false);
  readonly rate = persisted<number>('audioRate', 1);

  readonly guide = computed<AudioGuide | null>(() => (this.key() ? AUDIO[this.key()!] ?? null : null));
  readonly sentences = computed(() => {
    const g = this.guide();
    return g ? splitSentences(g.chapters[this.chapter()].text) : [];
  });

  private token = 0;
  private voice: SpeechSynthesisVoice | null = null;
  private wakeLock: { release(): Promise<void> } | null = null;

  constructor() {
    if (!this.supported) return;
    const pick = () => (this.voice = this.pickVoice());
    pick();
    speechSynthesis.addEventListener?.('voiceschanged', pick);
  }

  has(place?: string): boolean {
    return !!place && place in AUDIO;
  }

  /** Abre una audioguía (sin empezar a hablar hasta que se pulse play). */
  open(place: string): void {
    if (this.key() !== place) {
      this.stop();
      this.key.set(place);
      this.chapter.set(0);
      this.sentence.set(0);
    }
    this.expanded.set(true);
  }

  playChapter(i: number): void {
    this.chapter.set(i);
    this.sentence.set(0);
    this.speakFrom(0);
  }

  toggle(): void {
    if (this.playing()) this.pause();
    else this.speakFrom(this.sentence());
  }

  pause(): void {
    this.token++;
    if (this.supported) speechSynthesis.cancel();
    this.playing.set(false);
    this.releaseWakeLock();
  }

  stop(): void {
    this.pause();
    this.sentence.set(0);
  }

  close(): void {
    this.stop();
    this.key.set(null);
    this.expanded.set(false);
  }

  next(): void {
    const g = this.guide();
    if (g && this.chapter() < g.chapters.length - 1) this.playChapter(this.chapter() + 1);
  }

  prev(): void {
    if (this.sentence() > 1 || this.chapter() === 0) this.playChapter(this.chapter());
    else this.playChapter(this.chapter() - 1);
  }

  setRate(r: number): void {
    this.rate.set(r);
    if (this.playing()) this.speakFrom(this.sentence());
  }

  private speakFrom(i: number): void {
    if (!this.supported) return;
    const list = this.sentences();
    const token = ++this.token;
    speechSynthesis.cancel();
    if (i >= list.length) {
      // Fin del capítulo: pasa al siguiente o termina.
      const g = this.guide();
      if (g && this.chapter() < g.chapters.length - 1) {
        this.chapter.update((c) => c + 1);
        this.sentence.set(0);
        this.speakFrom(0);
      } else {
        this.playing.set(false);
        this.sentence.set(0);
        this.releaseWakeLock();
      }
      return;
    }
    this.sentence.set(i);
    this.playing.set(true);
    this.requestWakeLock();
    const u = new SpeechSynthesisUtterance(list[i]);
    u.lang = 'es-ES';
    if (this.voice) u.voice = this.voice;
    u.rate = this.rate();
    u.onend = () => {
      if (token === this.token) this.speakFrom(i + 1);
    };
    u.onerror = (e) => {
      if (token === this.token && e.error !== 'interrupted' && e.error !== 'canceled') this.pause();
    };
    speechSynthesis.speak(u);
  }

  private pickVoice(): SpeechSynthesisVoice | null {
    const voices = speechSynthesis.getVoices().filter((v) => v.lang?.toLowerCase().startsWith('es'));
    if (!voices.length) return null;
    const score = (v: SpeechSynthesisVoice) =>
      (v.lang.toLowerCase() === 'es-es' ? 10 : 0) +
      (/natural|neural|online|enhanced|premium|google/i.test(v.name) ? 5 : 0) +
      (v.localService ? 1 : 0);
    return [...voices].sort((a, b) => score(b) - score(a))[0];
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
