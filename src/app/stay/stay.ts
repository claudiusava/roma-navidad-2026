import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { emptyStay, Stay as StayModel, TripState } from '../core/trip-state';
import { searchUrl } from '../core/maps';

type Field = Exclude<keyof StayModel, 'id' | 'chosen'>;

@Component({
  selector: 'app-stay',
  templateUrl: './stay.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stay {
  protected readonly state = inject(TripState);
  protected readonly editing = signal<string | null>(null);

  protected readonly fields: { key: Field; label: string; type: string; placeholder: string }[] = [
    { key: 'name', label: 'Nombre', type: 'text', placeholder: 'Hotel, apartamento…' },
    { key: 'address', label: 'Dirección', type: 'text', placeholder: 'Via …, Roma' },
    { key: 'checkIn', label: 'Entrada', type: 'date', placeholder: '' },
    { key: 'checkOut', label: 'Salida', type: 'date', placeholder: '' },
    { key: 'code', label: 'Localizador / código de la puerta', type: 'text', placeholder: '' },
    { key: 'phone', label: 'Teléfono', type: 'tel', placeholder: '+39 …' },
    { key: 'link', label: 'Enlace de la reserva', type: 'url', placeholder: 'https://…' },
    { key: 'notes', label: 'Notas', type: 'text', placeholder: 'Precio, cancelación gratis hasta…, cómo recoger llaves…' },
  ];

  protected add(): void {
    const s = emptyStay();
    if (!this.state.stays().length) s.chosen = true;
    this.state.stays.update((list) => [...list, s]);
    this.editing.set(s.id);
  }

  protected set(id: string, key: Field, ev: Event): void {
    const value = (ev.target as HTMLInputElement).value;
    this.state.stays.update((list) => list.map((s) => (s.id === id ? { ...s, [key]: value } : s)));
  }

  protected choose(id: string): void {
    this.state.stays.update((list) => list.map((s) => ({ ...s, chosen: s.id === id })));
  }

  protected remove(s: StayModel): void {
    if (!confirm(`¿Borrar "${s.name || 'este alojamiento'}"?`)) return;
    this.state.stays.update((list) => list.filter((x) => x.id !== s.id));
  }

  protected mapUrl(s: StayModel): string {
    return searchUrl(s.address || s.name);
  }

  protected fromAirport(s: StayModel): string {
    const params = new URLSearchParams({
      api: '1',
      origin: 'Aeroporto di Roma-Fiumicino',
      destination: this.place(s),
      travelmode: 'driving',
    });
    return 'https://www.google.com/maps/dir/?' + params.toString();
  }

  protected toCentre(s: StayModel): string {
    const params = new URLSearchParams({
      api: '1',
      origin: this.place(s),
      destination: 'Pantheon, Roma',
      travelmode: 'walking',
    });
    return 'https://www.google.com/maps/dir/?' + params.toString();
  }

  private place(s: StayModel): string {
    const q = s.address || s.name;
    return /roma/i.test(q) ? q : q + ', Roma';
  }
}
