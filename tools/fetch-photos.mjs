// Descarga fotos libres de Wikimedia Commons para cada lugar de tools/photos.json
// y genera src/app/data/photos.generated.ts con la ruta y el crédito de cada una.
// Valores: "search:<búsqueda en Commons>", "wiki:<artículo de en.wikipedia>", "itwiki:<artículo de it.wikipedia>" o "file:<Nombre en Commons>".
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const UA = { 'User-Agent': 'roma-navidad-2026-build/1.0 (static travel planner)' };
const WIDTH = 720;
const root = new URL('../', import.meta.url);
const map = JSON.parse(readFileSync(new URL('tools/photos.json', root), 'utf8'));
const only = process.argv.slice(2);
mkdirSync(new URL('public/photos/', root), { recursive: true });

const genPath = new URL('src/app/data/photos.generated.ts', root);
const prev = existsSync(genPath)
  ? JSON.parse(readFileSync(genPath, 'utf8').split('=').slice(1).join('=').trim().replace(/;$/, ''))
  : {};

const slug = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const strip = (html = '') => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** fetch con reintentos: Wikimedia devuelve 429 si vamos rápido. */
async function get(url) {
  for (let i = 0; ; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.status !== 429 || i === 5) {
      if (!r.ok) throw new Error(`${r.status} ${url}`);
      return r;
    }
    await sleep(Number(r.headers.get('retry-after')) * 1000 || 5000 * (i + 1));
  }
}

async function json(url) {
  return (await get(url)).json();
}

async function fileFor(source) {
  if (source.startsWith('file:')) return source.slice(5);
  if (source.startsWith('search:')) {
    const d = await json(
      'https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srnamespace=6&srlimit=10&srsearch=' +
        encodeURIComponent(source.slice(7)),
    );
    const hit = d.query.search.find((h) => /\.jpe?g$/i.test(h.title));
    if (!hit) throw new Error('sin resultados: ' + source);
    return hit.title.replace(/^File:/, '');
  }
  const [lang, title] = source.startsWith('itwiki:') ? ['it', source.slice(7)] : ['en', source.slice(5)];
  const d = await json(
    `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=name&redirects=1&titles=` +
      encodeURIComponent(title),
  );
  const page = Object.values(d.query.pages)[0];
  if (!page.pageimage) throw new Error('sin imagen: ' + title);
  if (/\.svg$/i.test(page.pageimage)) throw new Error('es un SVG (logo/mapa): ' + page.pageimage);
  return page.pageimage;
}

const out = Object.fromEntries(Object.entries(prev).filter(([k]) => k in map));
for (const [place, source] of Object.entries(map)) {
  if (only.length ? !only.includes(place) : prev[place]) continue;
  try {
    const file = await fileFor(source);
    const d = await json(
      'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=' +
        WIDTH +
        '&titles=File:' +
        encodeURIComponent(file),
    );
    const info = Object.values(d.query.pages)[0].imageinfo[0];
    const meta = info.extmetadata ?? {};
    const name = slug(place) + '.jpg';
    const img = await get(info.thumburl);
    writeFileSync(new URL('public/photos/' + name, root), Buffer.from(await img.arrayBuffer()));
    out[place] = {
      src: 'photos/' + name,
      author: strip(meta.Artist?.value) || 'Wikimedia Commons',
      license: strip(meta.LicenseShortName?.value) || '',
      page: info.descriptionurl,
    };
    console.log('ok   ', place, '←', file);
  } catch (e) {
    console.log('FALLO', place, e.message);
  }
  await sleep(1500);
}
writeFileSync(
  genPath,
  '// Generado por tools/fetch-photos.mjs. No editar a mano.\nexport const PHOTOS: Record<string, { src: string; author: string; license: string; page: string }> = ' +
    JSON.stringify(out, null, 2) +
    ';\n',
);
