import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TICKETS } from '../data/tickets';
import { Ticket, Urgency } from '../data/types';
import { TripState } from '../core/trip-state';

const GROUPS: { urgency: Urgency; title: string; hint: string }[] = [
  { urgency: 'ya', title: '🔴 Comprar ya', hint: 'Se agotan o suben de precio.' },
  { urgency: 'pronto', title: '🟠 En los próximos días', hint: 'Mejor antes de mediados de diciembre.' },
  { urgency: 'alli', title: '🟢 Allí mismo o ya hecho', hint: 'No hace falta reservar.' },
];

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tickets {
  protected readonly state = inject(TripState);
  protected readonly groups = GROUPS.map((g) => ({
    ...g,
    tickets: TICKETS.filter((t) => t.urgency === g.urgency),
  }));

  private readonly toBuy = TICKETS.filter((t) => t.urgency !== 'alli');
  protected readonly total = this.toBuy.length;
  protected readonly boughtCount = computed(
    () => this.toBuy.filter((t) => this.state.bought().includes(t.id)).length,
  );

  protected isBought(t: Ticket): boolean {
    return this.state.bought().includes(t.id);
  }

  protected note(t: Ticket): string {
    return this.state.ticketNotes()[t.id] ?? '';
  }

  protected onNote(t: Ticket, ev: Event): void {
    this.state.setTicketNote(t.id, (ev.target as HTMLTextAreaElement).value);
  }
}
