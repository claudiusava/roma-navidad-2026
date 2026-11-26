// Exporta los textos de las audioguías a JSON (para generar los MP3 con tools/make-audio.py).
// Uso: node --experimental-strip-types tools/export-audio-text.mjs > tools/audio-text.json
import { AUDIO } from '../src/app/data/audio.ts';
const split = (t) => (t.match(/[^.!?…]+(?:[.!?…]+|$)/g) ?? [t]).map((s) => s.trim()).filter(Boolean);
const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const out = Object.entries(AUDIO).map(([key, g]) => ({
  key,
  slug: slug(key),
  chapters: g.chapters.map((c) => ({ title: c.title, sentences: split(c.text) })),
}));
process.stdout.write(JSON.stringify(out, null, 1));
