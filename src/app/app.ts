import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';
import { Plan } from './plan/plan';
import { Tickets } from './tickets/tickets';
import { Food } from './food/food';
import { Stay } from './stay/stay';
import { Guide } from './guide/guide';
import { TICKETS } from './data/tickets';
import { TripState, todayIso } from './core/trip-state';

export type Tab = 'plan' | 'entradas' | 'comer' | 'casa' | 'guia';

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'plan', label: 'Plan', icon: '🗓️' },
  { id: 'entradas', label: 'Entradas', icon: '🎟️' },
  { id: 'comer', label: 'Comer', icon: '🍝' },
  { id: 'casa', label: 'Casa', icon: '🏠' },
  { id: 'guia', label: 'Guía', icon: '🧭' },
];

function tabFromHash(): Tab {
  const h = location.hash.replace('#', '') as Tab;
  return TABS.some((t) => t.id === h) ? h : 'plan';
}

@Component({
  selector: 'app-root',
  imports: [Plan, Tickets, Food, Stay, Guide],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly state = inject(TripState);
  protected readonly tabs = TABS;
  protected readonly tab = signal<Tab>(tabFromHash());
  protected readonly updateReady = signal(false);

  protected readonly pending = computed(
    () => TICKETS.filter((t) => t.urgency === 'ya' && !this.state.bought().includes(t.id)).length,
  );

  protected readonly countdown = computed(() => {
    const start = Date.parse('2026-12-17T12:00:00');
    const days = Math.round((start - Date.parse(todayIso() + 'T12:00:00')) / 86_400_000);
    if (days > 1) return `Faltan ${days} días`;
    if (days === 1) return '¡Mañana nos vamos!';
    if (todayIso() <= '2026-12-22') return '¡Estamos en Roma!';
    return 'Arrivederci, Roma';
  });

  constructor() {
    const onHash = () => this.tab.set(tabFromHash());
    addEventListener('hashchange', onHash);
    inject(DestroyRef).onDestroy(() => removeEventListener('hashchange', onHash));

    const sw = inject(SwUpdate);
    if (sw.isEnabled) {
      sw.versionUpdates
        .pipe(filter((e): e is VersionReadyEvent => e.type === 'VERSION_READY'))
        .subscribe(() => this.updateReady.set(true));
    }
  }

  protected go(tab: Tab): void {
    if (this.tab() === tab) return;
    location.hash = tab;
    this.tab.set(tab);
    scrollTo({ top: 0 });
  }

  protected reload(): void {
    location.reload();
  }
}
