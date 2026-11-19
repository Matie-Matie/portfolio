# Matiee Portfolio v3

Esports-themed portfolio for Reymart "Matieee" Edra. The hero is a media-day player card: a background-removed portrait in a red/black radial spotlight with the name over the jersey.

React 19 + TypeScript + Vite, GSAP (ScrollTrigger, SplitText) + Lenis. Dark only.

## Run

```bash
npm install
npm run dev       # local dev
npm run build     # type-check + production build
npm run lint
```

## Where to edit

| What | Where |
|---|---|
| All copy (name, nav, projects, career, trophies, contact) | `src/content.ts` |
| Colors, fonts, layout | `src/styles/index.css` (tokens at the top) |
| Hero layout and intro animation | `src/sections/Hero.tsx` |
| Portrait | `assets-src/portrait-original.png` → cutout → `npm run images` |

Re-cutting the portrait:

```bash
npx hyperframes remove-background assets-src/portrait-original.png -o assets-src/portrait-cutout.png
npm run images
```

## Sections

Hero → Profile (player card + stats) → Loadout (toolkit) → Matches (projects) → Career bracket → Trophy case → Contact.
