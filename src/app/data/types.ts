export type StepKind = 'visit' | 'food' | 'move' | 'xmas' | 'free' | 'sleep';

export interface Step {
  time: string;
  title: string;
  detail: string;
  kind: StepKind;
  /** Texto para buscar en Google Maps. */
  place?: string;
  /** Entrada asociada (id de TICKETS). */
  ticket?: string;
  optional?: boolean;
}

export interface Day {
  id: string;
  date: string; // YYYY-MM-DD
  short: string; // "Vie 18"
  title: string;
  summary: string;
  steps: Step[];
  /** Paradas principales para la ruta a pie en Google Maps (en orden). */
  route?: string[];
  travelMode?: 'walking' | 'transit';
  tips?: string[];
  planB?: { title: string; steps: Step[] };
}

export type Urgency = 'ya' | 'pronto' | 'alli';

export interface Ticket {
  id: string;
  name: string;
  when: string;
  price: string;
  urgency: Urgency;
  deadline: string;
  url: string;
  urlLabel: string;
  notes: string;
}

export interface Restaurant {
  name: string;
  zone: string;
  kind: string;
  price: '€' | '€€' | '€€€';
  reserve: boolean;
  why: string;
  order: string;
  day?: string;
  tag?: 'especial' | 'merece';
}
