import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RESTAURANTS, SWEETS } from '../data/food';
import { Restaurant } from '../data/types';
import { photosUrl, searchUrl } from '../core/maps';
import { FoodMap, MapPoint } from './food-map';

type Filter = 'todos' | 'reserva' | 'barato' | 'plan';

/** Distancia aproximada en metros entre dos coordenadas (haversine). */
export function distance(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371000;
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

@Component({
  selector: 'app-food',
  imports: [FoodMap],
  templateUrl: './food.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Food {
  protected readonly filter = signal<Filter>('todos');
  protected readonly view = signal<'lista' | 'mapa'>('lista');
  protected readonly me = signal<{ lat: number; lng: number } | null>(null);
  protected readonly locating = signal(false);
  protected readonly geoError = signal('');
  protected readonly highlight = signal<string | null>(null);

  protected readonly filters: { id: Filter; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'plan', label: 'En el plan' },
    { id: 'barato', label: 'Baratos' },
    { id: 'reserva', label: 'Hay que reservar' },
  ];

  protected readonly list = computed(() => {
    let items: Restaurant[];
    switch (this.filter()) {
      case 'reserva':
        items = RESTAURANTS.filter((r) => r.reserve);
        break;
      case 'barato':
        items = RESTAURANTS.filter((r) => r.price === '€');
        break;
      case 'plan':
        items = RESTAURANTS.filter((r) => r.day);
        break;
      default:
        items = RESTAURANTS;
    }
    const me = this.me();
    return me ? [...items].sort((a, b) => distance(me, a) - distance(me, b)) : items;
  });

  protected readonly sweets = computed(() => {
    const me = this.me();
    return me ? [...SWEETS].sort((a, b) => distance(me, a) - distance(me, b)) : SWEETS;
  });

  protected readonly points = computed<MapPoint[]>(() => [
    ...this.list().map((r) => ({
      name: r.name,
      lat: r.lat,
      lng: r.lng,
      kind: 'comer' as const,
      label: `${r.kind} · ${r.price}${r.reserve ? ' · reservar' : ''}`,
      special: r.tag === 'especial' || r.tag === 'merece',
    })),
    ...(this.filter() === 'todos'
      ? SWEETS.map((s) => ({ name: s.name, lat: s.lat, lng: s.lng, kind: 'dulce' as const, label: s.what }))
      : []),
  ]);

  protected locate(): void {
    if (!('geolocation' in navigator)) {
      this.geoError.set('Este móvil no permite saber la ubicación.');
      return;
    }
    this.locating.set(true);
    this.geoError.set('');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.locating.set(false);
        this.me.set({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {
        this.locating.set(false);
        this.geoError.set('No se ha podido obtener la ubicación. Revisad el permiso de ubicación del navegador.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  }

  protected away(p: { lat: number; lng: number }): string {
    const me = this.me();
    if (!me) return '';
    const m = distance(me, p);
    const min = Math.max(1, Math.round(m / 80)); // ~80 m por minuto andando
    return m < 1000 ? `${Math.round(m / 10) * 10} m · ${min} min` : `${(m / 1000).toFixed(1)} km · ${min} min`;
  }

  protected onPin(name: string): void {
    this.highlight.set(name);
  }

  protected photos(name: string): string {
    return photosUrl(name);
  }

  protected maps(name: string): string {
    return searchUrl(name);
  }
}
