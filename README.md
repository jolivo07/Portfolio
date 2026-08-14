# Portfolio — Joaquín Olivo

Personal portfolio of **Joaquín Ernesto Olivo Escalante**, Systems Engineer focused on
backend engineering and software architecture with C# / .NET.

**Live at [jolivo.vercel.app](https://jolivo.vercel.app)**

---

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | lucide-react |
| Hosting | Vercel |

## Features

- **Dark / light theme** with no flash of the wrong palette — the stored preference is
  applied by an inline script before first paint, so the page never repaints on load.
- **Pointer-reactive backdrop** — a soft accent light eases toward the cursor while the
  technical grid lights up only in a disc around it. Positions are written to CSS custom
  properties so all painting stays in the compositor, and the animation loop parks itself
  once the light catches up. Disabled on coarse pointers and under `prefers-reduced-motion`.
- **Filterable project grid** with animated layout transitions.
- **Scroll-spy navigation** driven by `IntersectionObserver`.
- **Résumé generated from HTML** rather than hand-edited as a PDF — see [`cv/`](cv).
- Static export, SEO and OpenGraph metadata, responsive from 375px up.

## Content

All copy — profile, skills, projects, experience, education — lives in a single file:

**[`src/data/profile.ts`](src/data/profile.ts)**

Editing that file is enough to update the whole site. No component changes required.

## Project structure

```
src/
  app/
    layout.tsx        Root layout, fonts, metadata, theme script
    page.tsx          Section composition and ordering
    globals.css       Design tokens, backdrop layers, base styles
    icon.svg          Favicon
  components/         One component per section, plus Nav/Reveal/ThemeToggle
  data/profile.ts     All site content
cv/                   HTML source and footer script for the résumé PDF
public/               Résumé PDF served by the site
```

## Running locally

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

To produce a production build:

```bash
npm run build
```

## Deployment

Deployed on Vercel. Production builds are published with:

```bash
npx vercel deploy --prod
```

## Résumé

The PDF at `/Joaquin_Olivo_CV.pdf` is generated from [`cv/cv.html`](cv/cv.html) via headless
Chrome, then stamped with a running footer by [`cv/stamp_footer.py`](cv/stamp_footer.py).
See [`cv/README.md`](cv/README.md) for the regeneration steps.

---

## Contact

- Portfolio — [jolivo.vercel.app](https://jolivo.vercel.app)
- LinkedIn — [joaquin-olivo-escalante](https://www.linkedin.com/in/joaquin-olivo-escalante-49a455261/)
- Email — joaquin.olivo@hotmail.com
