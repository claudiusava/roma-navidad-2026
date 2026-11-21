// Genera los iconos PNG de la PWA a partir de tools/icon.svg.
import { readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const svg = readFileSync(new URL('./icon.svg', import.meta.url), 'utf8');
for (const size of [72, 96, 128, 144, 152, 192, 384, 512]) {
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
  writeFileSync(new URL(`../public/icons/icon-${size}x${size}.png`, import.meta.url), png);
}
writeFileSync(new URL('../public/apple-touch-icon.png', import.meta.url),
  new Resvg(svg, { fitTo: { mode: 'width', value: 180 } }).render().asPng());
writeFileSync(new URL('../public/favicon.svg', import.meta.url), svg);
console.log('Iconos generados');
