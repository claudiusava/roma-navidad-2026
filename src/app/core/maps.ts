const ROMA = ', Roma';

function withCity(q: string): string {
  return /napoli|pompei|fiumicino|roma/i.test(q) ? q : q + ROMA;
}

export function searchUrl(query: string): string {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(withCity(query));
}

export function routeUrl(stops: string[], mode: 'walking' | 'transit' = 'walking'): string {
  const [origin, ...rest] = stops.map(withCity);
  const destination = rest.pop() ?? origin;
  const params = new URLSearchParams({ api: '1', origin, destination, travelmode: mode });
  if (rest.length) params.set('waypoints', rest.join('|'));
  return 'https://www.google.com/maps/dir/?' + params.toString();
}

export function directionsTo(destination: string, mode: 'walking' | 'transit' = 'transit'): string {
  const params = new URLSearchParams({ api: '1', destination: withCity(destination), travelmode: mode });
  return 'https://www.google.com/maps/dir/?' + params.toString();
}

/** Búsqueda de Google Imágenes del lugar (se abre en el navegador; no se copia nada a la web). */
export function photosUrl(query: string): string {
  return 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(withCity(query));
}
