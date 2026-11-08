# Simple Desk website

The site at https://jboullion.github.io/simple-desk-releases/: landing page, downloads, docs, privacy and terms.
Astro + Starlight (docs) + Tailwind v4, deployed to GitHub Pages by `.github/workflows/pages.yml`.

```bash
pnpm install
pnpm dev        # http://localhost:4321/simple-desk-releases/
pnpm build      # astro check + static build into dist/
pnpm preview    # serve dist/ under the same base path
```

## Where things are

- `src/site.config.ts`: name, base path, releases repo, Buy Me a Coffee username, contact email, legal date.
- `src/pages/`: landing (`index.astro`), `download`, `try` (placeholder for the browser demo), `privacy`, `terms`, `404`.
- `src/content/docs/docs/`: the docs (Starlight; sidebar order in `astro.config.mjs`).
- `src/lib/release.ts`: reads the latest GitHub release at build time and matches files to platforms. If the API
  can't be reached the build still passes and the buttons link to the releases page. CI passes `GITHUB_TOKEN`;
  locally it's anonymous (60 requests an hour, plenty).
- `src/styles/global.css`: the app's color tokens, light and dark, and Starlight's palette mapped onto them.
- `src/assets/screens/`: screenshots (from the app's browser preview for now).

## Links and the base path

The site lives under `/simple-desk-releases/`. Link to pages with `url("download/")` from `src/lib/url.ts` (and in
docs Markdown, with the full `/simple-desk-releases/...` path). With a custom domain later: add `public/CNAME`, set
`site` to the domain and `base` to `"/"` in `site.config.ts`.

## When the site rebuilds

On pushes to `main` that touch `site/`, when a release is published or edited (the app's publish workflow does both),
and by hand (Actions → Website → Run workflow).
