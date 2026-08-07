# compile — agency landing page

A dark, scroll-driven landing page for a MERN + AI dev studio, built with
React, Vite, and Tailwind CSS. The Capabilities and Process sections use a
pinned scroll-scrub effect (content stays fixed on screen while you scroll,
crossfading between states) inspired by godaylight.com.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

The `dist/` folder from `npm run build` is what you deploy (e.g. drag into
Vercel, Netlify, or any static host).

## Where things live

```
src/
  App.jsx                 — assembles every section, in page order
  index.css                — design tokens (CSS variables) + global styles
  main.jsx                 — React entry point

  components/
    Navbar.jsx              — sticky nav + mobile menu
    Hero.jsx                — headline, parallax orb, floating "product card"
    StackBar.jsx            — tech stack badge row
    Capabilities.jsx        — PINNED scroll-scrub: 3 services
    Portfolio.jsx           — case study cards (Cliently / StudyAI / RiskGuard AI)
    Process.jsx             — PINNED scroll-scrub: 4-step process + terminal
    About.jsx               — founder bios (edit the co-founder placeholder!)
    Testimonials.jsx        — placeholder — add a real quote, or delete
    Pricing.jsx             — 3 tiers (edit the placeholder numbers)
    Contact.jsx             — the lead-gen form
    ClosingCTA.jsx          — full-bleed closing statement + button
    Footer.jsx
    ui/
      Eyebrow.jsx            — small uppercase label used above headings
      CTAButton.jsx          — the pill button (solid + outline variants)
      Reveal.jsx             — fade/slide-up wrapper for scroll reveals

  hooks/
    useScroll.js            — useScrollY, useScrollProgressTotal, usePinnedProgress
    useReveal.js             — IntersectionObserver reveal-on-scroll
    useCountUp.js             — number count-up animation (not wired in yet,
                                 ready if you want animated stats)

  utils/
    scrollTo.js               — smooth-scrolls to a section id
```

## Things to edit before you launch

1. **Contact email** — `src/components/Contact.jsx`, the `CONTACT_EMAIL`
   constant. The form currently opens a pre-filled email as a working
   fallback with no backend. To wire it to a real endpoint, replace the body
   of `handleSubmit` with a POST to Formspree, EmailJS, or your own API
   route — there's a comment showing exactly where.
2. **LinkedIn / GitHub links** — same file, the two `<a href="#">` placeholders.
3. **Co-founder bio** — `src/components/About.jsx`, second entry in `FOUNDERS`.
4. **Testimonials** — `src/components/Testimonials.jsx` is an intentional
   placeholder, not a fake quote. Replace it with a real one, or remove
   `<Testimonials />` from `App.jsx` until you have one.
5. **Pricing numbers** — `src/components/Pricing.jsx`, the `TIERS` array.
6. **Brand name** — currently "compile" in `Navbar.jsx` and `Footer.jsx`
   (search for `compile<span` in both files).
7. **Meta tags / title** — `index.html`.

## Design tokens

All colors, fonts, and spacing scale live in `src/index.css` under `:root`
as CSS variables (`--bg`, `--accent`, `--font-display`, etc.) — change them
there and they propagate everywhere, since every component reads from
`var(--...)` rather than hardcoded values.

## Notes on the pinned scroll sections

`Capabilities.jsx` and `Process.jsx` both use the same pattern: a tall outer
`<div>` (`height: ${steps * 70}vh`) wrapping a `position: sticky` inner
panel. `usePinnedProgress` (in `hooks/useScroll.js`) tracks how far you've
scrolled through that outer wrapper and returns a 0–1 progress value plus the
active step index. If a section feels too long or too short to scroll
through, adjust the `70` multiplier on that section's outer wrapper.
