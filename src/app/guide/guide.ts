import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { BUDGET_DEFAULTS, BudgetLine, GUIDE, PHRASES } from '../data/guide';
import { TripState } from '../core/trip-state';

const POMPEYA_LINES = ['trenes', 'circum', 'pompeya'];

@Component({
  selector: 'app-guide',
  templateUrl: './guide.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Guide {
  protected readonly state = inject(TripState);
  protected readonly sections = GUIDE;
  protected readonly phrases = PHRASES;

  protected readonly lines = computed(() => {
    const stayInRome = this.state.mondayPlan() === 'roma';
    return BUDGET_DEFAULTS.filter((l) => !(stayInRome && POMPEYA_LINES.includes(l.id)));
  });

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
