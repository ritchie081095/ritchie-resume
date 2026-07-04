# Ritchie P. Nalam — Resume Website

A clean, animated, interactive personal resume site built with **React + Vite** and **Framer Motion**.

## Features
- Sticky navbar with **scrollspy** (active-section highlight) + smooth scrolling
- Animated hero with **typing role effect**, gradient blobs, and a live stats panel
- Scroll-reveal animations on every section (Framer Motion)
- **Animated skill bars**, hover-reactive project cards, timeline experience
- **Dark / light theme toggle** (remembers your choice)
- Scroll-progress bar, fully responsive, respects `prefers-reduced-motion`

## Run it

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Customize

- **All content** lives in [`src/data/resume.js`](src/data/resume.js) — edit text, jobs, skills (and their %), projects, education, and references there. The UI updates automatically.
- **Add a real photo:** in [`src/components/Hero.jsx`](src/components/Hero.jsx), replace the `.hero__avatar-inner` initials with an `<img src="/me.jpg" alt="Ritchie" />` and drop the image in `public/`.
- **Colors/theme:** tweak the accent variables at the top of [`src/index.css`](src/index.css) (`--accent-1`, `--accent-2`, `--accent-3`).

## Deploy
Any static host works (Vercel, Netlify, GitHub Pages). Build with `npm run build` and serve the `dist/` folder.
