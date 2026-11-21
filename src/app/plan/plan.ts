import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { DAYS } from '../data/days';
import { TICKETS } from '../data/tickets';
import { Step, StepKind } from '../data/types';
import { routeUrl, searchUrl } from '../core/maps';
import { TripState } from '../core/trip-state';

const ICONS: Record<StepKind, string> = {
  visit: '🏛️',
  food: '🍝',
  move: '🚶',
  xmas: '🎄',
  free: '☕',
  sleep: '🌙',
};

@Component({
  selector: 'app-plan',
  templateUrl: './plan.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Plan {
  protected readonly state = inject(TripState);
  readonly goTickets = output<void>();

  protected readonly days = DAYS;
  protected readonly dayId = signal(this.state.defaultDayId());
  protected readonly day = computed(() => DAYS.find((d) => d.id === this.dayId())!);
  protected readonly showPlanB = computed(
    () => !!this.day().planB && this.state.mondayPlan() === 'roma',
  );
  protected readonly steps = computed<Step[]>(() =>
    this.showPlanB() ? this.day().planB!.steps : this.day().steps,
  );
  protected readonly stepKey = (i: number) => `${this.dayId()}${this.showPlanB() ? 'b' : ''}#${i}`;

  protected readonly routeLink = computed(() => {
    const d = this.day();
    if (this.showPlanB()) {
      return routeUrl(d.planB!.steps.filter((s) => s.place).map((s) => s.place!), 'transit');
    }
    return d.route ? routeUrl(d.route, d.travelMode) : null;
  });

  protected icon(kind: StepKind): string {
    return ICONS[kind];
  }

  protected maps(place: string): string {
    return searchUrl(place);
  }

  protected ticketName(id: string): string {
    return TICKETS.find((t) => t.id === id)?.name ?? id;
  }

  protected isBought(id: string): boolean {
    return this.state.bought().includes(id) || id === 'freetour';
  }

  protected isDone(i: number): boolean {
    return this.state.done().includes(this.stepKey(i));
  }

  protected dateLabel(iso: string): string {
    return new Date(iso + 'T12:00:00').toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  }
}
