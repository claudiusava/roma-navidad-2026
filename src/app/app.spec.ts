import { TestBed } from '@angular/core/testing';
import { provideServiceWorker } from '@angular/service-worker';
import { App } from './app';
import { DAYS } from './data/days';
import { TICKETS } from './data/tickets';
import { routeUrl, searchUrl } from './core/maps';
import { TripState } from './core/trip-state';
import { PHOTOS } from './data/photos.generated';
import { AUDIO } from './data/audio';
import { splitSentences } from './core/audio-player';
import { RESTAURANTS, SWEETS } from './data/food';
import { distance } from './food/food';

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();
    location.hash = '';
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideServiceWorker('ngsw-worker.js', { enabled: false })],
    }).compileComponents();
  });

  it('muestra la cabecera y el plan por defecto', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Roma');
    expect(el.querySelectorAll('.day-chip').length).toBe(DAYS.length);
    expect(el.querySelectorAll('.step').length).toBeGreaterThan(0);
  });

  it('cambia de pestaña', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const btn = [...el.querySelectorAll<HTMLButtonElement>('.tabbar button')].find((b) =>
      b.textContent?.includes('Entradas'),
    )!;
    btn.click();
    await fixture.whenStable();
    expect(el.querySelectorAll('.ticket').length).toBe(TICKETS.length);
  });
});

describe('Datos del viaje', () => {
  it('los días son consecutivos del 17 al 22 de diciembre', () => {
    expect(DAYS.map((d) => d.date)).toEqual([
      '2026-12-17',
      '2026-12-18',
      '2026-12-19',
      '2026-12-20',
      '2026-12-21',
      '2026-12-22',
    ]);
  });

  it('cada paso con entrada apunta a una entrada que existe', () => {
    const ids = new Set(TICKETS.map((t) => t.id));
    for (const d of DAYS) {
      for (const s of d.steps) {
        if (s.ticket) expect(ids.has(s.ticket), `${d.id}: ${s.ticket}`).toBe(true);
      }
    }
  });

  it('las horas de cada día van en orden', () => {
    for (const d of DAYS) {
      const times = d.steps.map((s) => s.time).filter((t) => t >= '05:00');
      expect([...times].sort(), d.id).toEqual(times);
    }
  });

  it('el free tour del viernes es a las 10:30', () => {
    const fri = DAYS.find((d) => d.date === '2026-12-18')!;
    expect(fri.steps.find((s) => s.ticket === 'freetour')?.time).toBe('10:30');
  });

  it('la Borghese no cae en lunes (cierra) y la cúpula va tras el free tour', () => {
    const borghese = DAYS.find((d) => d.steps.some((s) => s.ticket === 'borghese'))!;
    expect(new Date(borghese.date + 'T12:00:00').getDay()).not.toBe(1);
    const fri = DAYS.find((d) => d.date === '2026-12-18')!;
    const idx = (t: string) => fri.steps.findIndex((s) => s.ticket === t);
    expect(idx('cupula')).toBeGreaterThan(idx('freetour'));
  });

  it('el Vaticano no cae en domingo', () => {
    const sunday = DAYS.find((d) => d.date === '2026-12-20')!;
    expect(sunday.steps.some((s) => s.ticket === 'vaticano')).toBe(false);
  });
});

describe('Fotos', () => {
  beforeEach(async () => {
    localStorage.clear();
    location.hash = '';
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideServiceWorker('ngsw-worker.js', { enabled: false })],
    }).compileComponents();
  });

  it('cada foto corresponde a un lugar del plan y tiene autor', () => {
    const places = new Set(DAYS.flatMap((d) => d.steps).map((s) => s.place));
    for (const [place, ph] of Object.entries(PHOTOS)) {
      expect(places.has(place), place).toBe(true);
      expect(ph.author.length, place).toBeGreaterThan(0);
      expect(ph.src).toMatch(/^photos\/.+\.jpg$/);
    }
  });

  it('al tocar la tarjeta se gira y muestra la foto', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    (el.querySelectorAll<HTMLButtonElement>('.day-chip')[1]).click();
    await fixture.whenStable();
    const card = el.querySelector<HTMLElement>('.step-card.has-photo')!;
    card.querySelector<HTMLElement>('p')!.click();
    await fixture.whenStable();
    expect(card.classList).toContain('flipped');
    expect(card.querySelector('img')?.getAttribute('src')).toMatch(/^photos\//);
  });
});

describe('Utilidades', () => {
  it('genera enlaces de Google Maps', () => {
    expect(searchUrl('Pantheon')).toContain('Pantheon%2C%20Roma');
    const url = routeUrl(['A', 'B', 'C']);
    expect(url).toContain('waypoints=B');
    expect(url).toContain('travelmode=walking');
  });

  it('elige el día del viaje según la fecha', () => {
    const state = TestBed.inject(TripState);
    expect(state.defaultDayId(new Date('2026-11-21T10:00:00'))).toBe('d17');
    expect(state.defaultDayId(new Date('2026-12-19T10:00:00'))).toBe('d19');
    expect(state.defaultDayId(new Date('2027-01-05T10:00:00'))).toBe('d22');
  });
});

describe('Audioguías, mapa y plan sin Pompeya', () => {
  beforeEach(async () => {
    localStorage.clear();
    location.hash = '';
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideServiceWorker('ngsw-worker.js', { enabled: false })],
    }).compileComponents();
  });

  it('cada audioguía corresponde a un lugar del plan y tiene texto', () => {
    const places = new Set(DAYS.flatMap((d) => d.steps).map((s) => s.place));
    for (const [place, g] of Object.entries(AUDIO)) {
      expect(places.has(place), place).toBe(true);
      expect(g.chapters.length, place).toBeGreaterThan(0);
      for (const c of g.chapters) expect(c.text.length, `${place}: ${c.title}`).toBeGreaterThan(200);
    }
  });

  it('los textos de audio no llevan números romanos ni abreviaturas que la voz lea mal', () => {
    for (const g of Object.values(AUDIO)) {
      for (const c of g.chapters) {
        expect(c.text, c.title).not.toMatch(/\bsiglo [IVXL]+\b|\ba\. ?C\.|\bd\. ?C\./);
      }
    }
  });

  it('divide el texto en frases', () => {
    expect(splitSentences('Hola. ¿Qué tal? Bien… y tú')).toEqual(['Hola.', '¿Qué tal?', 'Bien…', 'y tú']);
  });

  it('ya no hay nada de Pompeya ni Nápoles', () => {
    const all = JSON.stringify(DAYS) + JSON.stringify(TICKETS);
    expect(all).not.toMatch(/Pompe|Napol|Nápoles/);
  });

  it('el sábado se come a una hora normal', () => {
    const sat = DAYS.find((d) => d.date === '2026-12-19')!;
    const lunch = sat.steps.find((s) => s.kind === 'food' && s.title.startsWith('Comida'))!;
    expect(lunch.time >= '13:00').toBe(true);
  });

  it('todos los días completos tienen desayuno', () => {
    for (const d of DAYS.filter((x) => x.date > '2026-12-17' && x.date < '2026-12-22')) {
      expect(d.steps.some((s) => /desayuno/i.test(s.title)), d.id).toBe(true);
    }
  });

  it('todos los restaurantes y cafés tienen coordenadas en Roma', () => {
    for (const r of [...RESTAURANTS, ...SWEETS]) {
      expect(r.lat, r.name).toBeGreaterThan(41.8);
      expect(r.lat, r.name).toBeLessThan(42);
      expect(r.lng, r.name).toBeGreaterThan(12.4);
      expect(r.lng, r.name).toBeLessThan(12.6);
    }
  });

  it('calcula distancias', () => {
    const d = distance({ lat: 41.8986, lng: 12.4768 }, { lat: 41.9009, lng: 12.4833 }); // Panteón → Trevi
    expect(d).toBeGreaterThan(450);
    expect(d).toBeLessThan(700);
  });

  it('el botón de audioguía abre el reproductor', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    el.querySelectorAll<HTMLButtonElement>('.day-chip')[1].click();
    await fixture.whenStable();
    el.querySelector<HTMLButtonElement>('.pill.audio')!.click();
    await fixture.whenStable();
    expect(el.querySelector('.audio-sheet h2')?.textContent).toContain('Panteón');
    expect(el.querySelectorAll('.chapters button').length).toBe(AUDIO['Pantheon Roma'].chapters.length);
  });
});
