// Busca coordenadas en OpenStreetMap (Nominatim) para una lista de "nombre|consulta".
// Uso: node tools/geocode.mjs  (lee tools/geocode-input.txt, escribe por consola)
import { readFileSync } from 'node:fs';
const UA = { 'User-Agent': 'roma-navidad-2026-build/1.0 (static travel planner)' };
const lines = readFileSync(new URL('./geocode-input.txt', import.meta.url), 'utf8').split(/\r?\n/).filter(Boolean);
for (const line of lines) {
  const [name, q] = line.split('|');
  const url =
    'https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&viewbox=12.35,41.98,12.62,41.80&bounded=1&q=' +
    encodeURIComponent(q || name);
  const r = await fetch(url, { headers: UA });
  const d = r.ok ? await r.json() : [];
  const hit = d[0];
  console.log(
    JSON.stringify({ name, lat: hit ? +(+hit.lat).toFixed(5) : null, lng: hit ? +(+hit.lon).toFixed(5) : null, found: hit?.display_name?.slice(0, 90) ?? 'NO ENCONTRADO' }),
  );
  await new Promise((r) => setTimeout(r, 1200));
}
