# Roma · Navidad 2026

Planning del viaje a Roma del 17 al 22 de diciembre de 2026: itinerario día a día, entradas que hay que comprar con antelación, dónde comer, alojamiento, presupuesto y guía práctica. Funciona sin conexión (PWA) y se puede instalar en el móvil.

## Desarrollo

```bash
npm install
npm start
```

Los datos del viaje están en `src/app/data/`. Lo que se marca en la app (entradas compradas, pasos hechos, alojamiento, presupuesto) se guarda en el `localStorage` de cada móvil.

`node tools/make-icons.mjs` regenera los iconos desde `tools/icon.svg`.

## Despliegue

Cada push a `main` pasa los tests, compila y publica en GitHub Pages con `.github/workflows/deploy.yml` (Settings → Pages → Source: **GitHub Actions**).
