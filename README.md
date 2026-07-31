# shlomolibo.github.io

Personal academic website of Shlomo Libo Feigin, built with [AstroPaper](https://github.com/satnaing/astro-paper) (Astro + Tailwind CSS).

## Development

```bash
npm install
npm run dev      # serves at http://localhost:4321
```

## Build

```bash
npm run build    # static output in dist/
```

## Deployment

Pushing to `master` deploys the site via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) to GitHub Pages.

> **Note:** the repository's *Settings → Pages → Source* must be set to **GitHub Actions** (not "Deploy from a branch").

## Where things live

- Homepage / bio / preprints / talks: `src/pages/index.astro`
- Site config (title, description, social links): `astro-paper.config.ts`
- Profile photo: `src/assets/images/profile.webp`
- Talk slides (PDFs): `public/talks/`
- Theme colors & background: `src/styles/theme.css`, `src/styles/global.css`
