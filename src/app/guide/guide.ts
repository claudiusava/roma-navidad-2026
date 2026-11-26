import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { BUDGET_DEFAULTS, BudgetLine, GUIDE, PHRASES } from '../data/guide';
import { TripState } from '../core/trip-state';
import { AudioPlayer } from '../core/audio-player';
import { AUDIO } from '../data/audio';
import { DAYS } from '../data/days';
import { AUDIO_MB } from '../data/audio.generated';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Guide {
  protected readonly state = inject(TripState);
  protected readonly sections = GUIDE;
  protected readonly phrases = PHRASES;
  protected readonly audio = inject(AudioPlayer);
  protected readonly sizeMb = AUDIO_MB;

  constructor() {
    void this.audio.countOffline();
  }

  /** Audioguías agrupadas por día, sin repetir. */
  protected readonly audioByDay = (() => {
    const seen = new Set<string>();
    return DAYS.map((d) => ({
      day: d.short,
      guides: d.steps
        .map((s) => s.place)
        .filter((p): p is string => !!p && p in AUDIO && !seen.has(p) && !!seen.add(p))
        .map((p) => ({ place: p, title: AUDIO[p].title, chapters: AUDIO[p].chapters.length })),
    })).filter((g) => g.guides.length);
  })();

  protected readonly lines = computed(() => BUDGET_DEFAULTS);

  protected value(l: BudgetLine): number {
    return this.state.budget()[l.id] ?? l.perPerson;
  }

  protected readonly perPerson = computed(() => {
    const overrides = this.state.budget();
    return this.lines().reduce((sum, l) => sum + (overrides[l.id] ?? l.perPerson), 0);
  });

  protected readonly total = computed(() => this.perPerson() * this.state.people());

  protected onValue(l: BudgetLine, ev: Event): void {
    const n = Number((ev.target as HTMLInputElement).value);
    this.state.budget.update((b) => ({ ...b, [l.id]: Number.isFinite(n) && n >= 0 ? n : 0 }));
  }

  protected reset(): void {
    this.state.budget.set({});
  }

  protected speak(text: string): void {
    if (!('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(text.replace(/…/g, ''));
    u.lang = 'it-IT';
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }
}
