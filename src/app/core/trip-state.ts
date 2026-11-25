import { computed, Injectable } from '@angular/core';
import { persisted } from './persist';
import { DAYS } from '../data/days';

export interface Stay {
  id: string;
  name: string;
  address: string;
  checkIn: string;
  checkOut: string;
  code: string;
  phone: string;
  link: string;
  notes: string;
  chosen: boolean;
}

export function emptyStay(): Stay {
  return {
    id: Math.random().toString(36).slice(2, 9),
    name: '',
    address: '',
    checkIn: '2026-12-17',
    checkOut: '2026-12-22',
    code: '',
    phone: '',
    link: '',
    notes: '',
    chosen: false,
  };
}

/** Fecha local en formato YYYY-MM-DD. */
export function todayIso(now = new Date()): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}`;
}

@Injectable({ providedIn: 'root' })
export class TripState {
  /** Ids de entradas compradas. */
  readonly bought = persisted<string[]>('bought', []);
  /** Notas por entrada (localizador, punto de encuentro…). */
  readonly ticketNotes = persisted<Record<string, string>>('ticketNotes', {});
  /** Pasos hechos: "dayId#index". */
  readonly done = persisted<string[]>('done', []);
  readonly stays = persisted<Stay[]>('stays', []);
  readonly budget = persisted<Record<string, number>>('budget', {});
  readonly people = persisted<number>('people', 2);

  readonly chosenStay = computed(() => this.stays().find((s) => s.chosen) ?? null);

  toggle(list: 'bought' | 'done', id: string): void {
    const s = this[list];
    s.update((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
  }

  setTicketNote(id: string, value: string): void {
    this.ticketNotes.update((n) => ({ ...n, [id]: value }));
  }

  /** Día del viaje que toca hoy, o el primero si aún no ha empezado. */
  defaultDayId(now = new Date()): string {
    const t = todayIso(now);
    return DAYS.find((d) => d.date === t)?.id ?? (t > DAYS[DAYS.length - 1].date ? DAYS[DAYS.length - 1].id : DAYS[0].id);
  }
}
