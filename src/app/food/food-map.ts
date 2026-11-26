import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import type * as L from 'leaflet';

export interface MapPoint {
  name: string;
  lat: number;
  lng: number;
  kind: 'comer' | 'dulce';
  label: string;
  special?: boolean;
}

/** Mapa con Leaflet y teselas de OpenStreetMap (necesita conexión para el fondo). */
@Component({
  selector: 'app-food-map',
  template: `<div #map class="food-map" role="application" aria-label="Mapa de restaurantes"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodMap {
  readonly points = input.required<MapPoint[]>();
  readonly me = input<{ lat: number; lng: number } | null>(null);
  readonly selected = output<string>();

  private readonly el = viewChild.required<ElementRef<HTMLDivElement>>('map');
  private lib: typeof L | null = null;
  private map: L.Map | null = null;
  private layer: L.LayerGroup | null = null;
  private meMarker: L.Marker | null = null;

  constructor() {
    afterNextRender(async () => {
      // Leaflet es CommonJS: en producción el build lo expone en `default`, en desarrollo no.
      const mod = (await import('leaflet')) as typeof L & { default?: typeof L };
      const lib = mod.default ?? mod;
      this.lib = lib;
      this.map = lib
        .map(this.el().nativeElement, { zoomControl: true, attributionControl: true })
        .setView([41.895, 12.48], 14);
      lib
        .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap',
        })
        .addTo(this.map);
      this.layer = lib.layerGroup().addTo(this.map);
      this.draw();
      this.drawMe();
    });

    effect(() => {
      this.points();
      this.draw();
    });
    effect(() => {
      this.me();
      this.drawMe();
    });

    inject(DestroyRef).onDestroy(() => this.map?.remove());
  }

  private icon(p: MapPoint): L.DivIcon {
    return this.lib!.divIcon({
      className: 'pin pin-' + p.kind + (p.special ? ' pin-special' : ''),
      html: p.kind === 'dulce' ? '☕' : p.special ? '★' : '🍝',
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  }

  private draw(): void {
    const lib = this.lib;
    if (!lib || !this.map || !this.layer) return;
    this.layer.clearLayers();
    const pts = this.points();
    for (const p of pts) {
      const dir =
        'https://www.google.com/maps/dir/?api=1&travelmode=walking&destination=' + encodeURIComponent(`${p.lat},${p.lng}`);
      const popup = document.createElement('div');
      popup.className = 'pin-popup';
      const b = document.createElement('strong');
      b.textContent = p.name;
      const sub = document.createElement('span');
      sub.textContent = p.label;
      const a = document.createElement('a');
      a.href = dir;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = 'Cómo llegar ↗';
      popup.append(b, sub, a);
      lib
        .marker([p.lat, p.lng], { icon: this.icon(p), title: p.name })
        .bindPopup(popup)
        .on('click', () => this.selected.emit(p.name))
        .addTo(this.layer);
    }
    if (pts.length && !this.me()) {
      this.map.fitBounds(lib.latLngBounds(pts.map((p) => [p.lat, p.lng] as [number, number])), { padding: [24, 24] });
    }
  }

  private drawMe(): void {
    const lib = this.lib;
    const me = this.me();
    if (!lib || !this.map) return;
    this.meMarker?.remove();
    this.meMarker = null;
    if (!me) return;
    this.meMarker = lib
      .marker([me.lat, me.lng], {
        icon: lib.divIcon({ className: 'pin-me', html: '', iconSize: [18, 18], iconAnchor: [9, 9] }),
        title: 'Estáis aquí',
        zIndexOffset: 1000,
      })
      .addTo(this.map);
    this.map.setView([me.lat, me.lng], 16);
  }
}
