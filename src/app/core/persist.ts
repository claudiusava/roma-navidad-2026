import { effect, signal, WritableSignal } from '@angular/core';

const PREFIX = 'roma26:';

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw == null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

/** Señal que se guarda en localStorage. Debe crearse en un contexto de inyección. */
export function persisted<T>(key: string, fallback: T): WritableSignal<T> {
  const s = signal<T>(read(key, fallback));
  effect(() => {
    const value = s();
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch {
      /* almacenamiento no disponible: la app sigue funcionando */
    }
  });
  return s;
}
