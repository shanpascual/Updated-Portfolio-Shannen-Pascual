# Shannen Pascual — Portfolio

Multi-page React + Vite portfolio (Home, About, Projects, Resume, Contact), rebuilt from the previous Angular site
([shanpascual/Pascual-Shannen_E-Portfolio_WDFOL](https://github.com/shanpascual/Pascual-Shannen_E-Portfolio_WDFOL)).
The home page follows the "Product Designer Portfolio" Figma community file; the inner pages reuse its theme
(dark rounded panels, rose accent, Urbanist type), all re-coloured to Shannen's rose/pink brand.

## Run

```bash
npm install
npm run dev
```

`npm run build` outputs to `dist/` (Netlify: build command `npm run build`, publish directory `dist`).
`public/_redirects` sends every path to `index.html` so routes like `/about` work on refresh.

## Contact form

The form sends through EmailJS. Copy `.env.example` to `.env.local` and fill in the three `VITE_EMAILJS_*` values
(on Netlify, add them under Site settings → Environment variables). These are EmailJS's public client-side IDs.

## Where things live

- `src/App.jsx` — routes. Home is in the main bundle; About, Projects, Resume, Contact load on demand.
- `src/pages/` — one file per page (plus its CSS).
- `src/components/layout/` — Layout (nav, footer, page titles, focus on route change), PageHeader, CtaBand.
- `src/data/content.js` and `src/data/profile.js` — all copy, projects, skills, education, certifications, links. Edit content here.
- `src/index.css` — design tokens (colors, radii, spacing) and shared button styles.
- `src/components/<section>/` — one folder per page section, each with its own CSS.
- `src/components/reactbits/` — components copied from [reactbits.dev](https://reactbits.dev):
  BlurText, RotatingText (hero), SpotlightCard (services), CountUp (stats), Magnet (buttons),
  AnimatedContent (scroll reveals), ScrollVelocity (skills marquee).
  Local tweaks: BlurText renders a `<span>` (valid inside `<h1>`), AnimatedContent accepts an `as` prop.
- `public/images/` — photos, project shots and certificates carried over from the old site.
