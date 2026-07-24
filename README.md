# AyuGuard — Official Website

The production website for **AyuGuard**, an offline-first, privacy-focused personal
safety Android application. Built with Next.js 14 (App Router), TypeScript, Tailwind
CSS, and Framer Motion.

Live content on this site is sourced directly from the AyuGuard project report —
no invented features, statistics, or testimonials.

## Tech Stack

- **Next.js 14** (App Router, static-friendly)
- **React 18** + **TypeScript**
- **Tailwind CSS** for styling (pure-black AMOLED theme, emergency-red accent)
- **Framer Motion** for scroll reveals and micro-interactions
- **lucide-react** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
ayuguard-website/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx           # Assembles all sections
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Tailwind base + design tokens
├── components/             # One component per section
├── lib/
│   └── content.ts          # All copy, sourced from the project report
├── public/
│   ├── screenshots/        # 8 real app screenshots
│   ├── apk/                # Signed release APK for direct download
│   ├── logo.png             # App icon
│   └── og-image.png         # Generated Open Graph image
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Replacing the APK

The primary download button links to `/public/apk/AyuGuard-v1.0.1.apk`. To ship a
new build:

1. Replace the file at `public/apk/AyuGuard-v1.0.1.apk` (or update the filename).
2. Update `APK_PATH` and `APP_VERSION` in `lib/content.ts`.
3. Update the `GITHUB_RELEASES` URL if the release tag changed.

## v2 — Premium Redesign Notes

This pass focused on elevation, hierarchy, and motion polish without touching
copy, screenshots, routing, or the APK/GitHub links:

- Added a layered elevation system (`.card`, `.card-interactive`, `shadow-card`,
  `shadow-card-hover`) so surfaces read as tiered instead of flat borders on black.
- Rebuilt buttons as `.btn-primary` / `.btn-secondary` primitives with gradient,
  inset highlight, and lift-on-hover — replacing flat single-color pills.
- Introduced a real type scale (`text-display-xl/lg/md`) and applied it to the
  hero headline for a stronger Apple/Linear-style scale jump.
- Added a consistent `.section-label` (mono, tracked, with a leading tick mark)
  used across every section eyebrow instead of ad hoc classes.
- Varied section vertical rhythm (secondary sections now `py-20 sm:py-28` vs.
  primary sections `py-24 sm:py-32`) so the page doesn't scroll monotonously.
- Rebuilt the Screenshots section from a dense 8-up grid into a horizontal,
  snap-scrolling showcase strip with manual prev/next controls — reads as
  a curated product tour rather than a gallery dump.
- Added a subtle floating animation and staggered spec-card reveals to the hero
  device, and an active-state indicator to the Core Features list.
- Gave the footer a soft top gradient hairline and a large low-opacity wordmark
  sign-off, matching the Apple/Nothing/Linear pattern of a confident brand close.

No functionality, routes, or content facts were changed or removed.

## Design System

| Token | Value |
|---|---|
| Background | `#000000` (true AMOLED black) |
| Primary text | `#FFFFFF` |
| Secondary text | `#A1A1A6` / `#6E6E73` |
| Accent (emergency) | `#FF3B30` |
| Success / safe | `#34C759` |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono / data font | JetBrains Mono |

Red is reserved for emergency actions and SOS-adjacent moments — everything else
stays monochrome and restrained.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step Vercel and GitHub instructions.

## License

Website code © Ridhan Bholakiya. AyuGuard app screenshots and content used with
permission from the project author.
