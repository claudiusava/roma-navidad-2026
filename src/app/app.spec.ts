import { TestBed } from '@angular/core/testing';
import { provideServiceWorker } from '@angular/service-worker';
import { App } from './app';
import { DAYS } from './data/days';
import { TICKETS } from './data/tickets';
import { routeUrl, searchUrl } from './core/maps';
import { TripState } from './core/trip-state';

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
      for (const s of [...d.steps, ...(d.planB?.steps ?? [])]) {
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

  it('el Vaticano no cae en domingo', () => {
    const sunday = DAYS.find((d) => d.date === '2026-12-20')!;
    expect(sunday.steps.some((s) => s.ticket === 'vaticano')).toBe(false);
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
