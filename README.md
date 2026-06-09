# Omthentic

The editorial site for the Omthentic house — a set of ventures built around
*aligned authenticity*: closing the distance between intention and expression.

Built with Next.js (App Router) and Tailwind CSS v4. The site is four pages —
**Index**, **Vision**, **Companies**, and **Contact** — all under the
`(omthentic)` route group, with a self-contained design system in
`src/app/(omthentic)/omthentic.css`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/app/
  (omthentic)/            # the editorial site
    _components/          # AlignmentField, ResonanceHero, Reveal, SiteNav, …
    omthentic.css         # scoped design system (fonts, Ember palette)
    page.tsx              # index
    vision/ companies/ contact/
  layout.tsx              # root html/body + metadata
  globals.css             # minimal base + Tailwind
```

## Scripts

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
