# GenXAlpha — web

Angular 18 standalone-components project, scaffolded by hand (no `ng new` was run,
since the build environment had no network access) but structured exactly like a
CLI-generated project, so all standard Angular CLI commands work once you install
dependencies locally.

## Content source

Copy on this page was transcribed from a scrolling screen-recording of the
GenXAlpha marketing site (OCR + frame review). A few short section labels were
lightly reworded for grammatical flow — check them against the source design
before treating this as final copy.

## Run it

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Build for production

```bash
npm run build
```

Output goes to `dist/genxalpha-web/browser`.

## Project structure

```
src/
  app/
    core-diagram/         signature animated "connected core" SVG component
    app.component.*       full one-page layout (nav, hero, capabilities, etc.)
    app.config.ts         standalone app providers
  index.html               fonts: Space Grotesk, Inter, IBM Plex Mono
  main.ts                  bootstrap
  styles.css                global design tokens (colors, fonts)
```

## Deploying with a custom domain (free options)

1. Buy a domain (Porkbun or Namecheap, ~$8-12/yr — this is the only real cost).
2. Push this repo to GitHub.
3. Connect the repo to **Vercel**, **Netlify**, or **Cloudflare Pages** (all free
   for a static Angular build):
   - Build command: `npm run build`
   - Output directory: `dist/genxalpha-web/browser`
4. Add your custom domain in the host's dashboard, then update your DNS
   (usually a CNAME record) at your registrar.
5. SSL is issued automatically and free (Let's Encrypt) — no extra setup.

## Notes / things to confirm against the source

- Exact final wording of the OCR'd headlines (a couple of words were ambiguous
  in the recording).
- Real capability descriptions if the six categories need longer supporting copy.
- Contact form currently has no backend — wire it to your form handler of
  choice (Netlify Forms, Formspree, or a small serverless function) before going live.
