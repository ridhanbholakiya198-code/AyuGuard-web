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

The primary download button links to `/public/apk/AyuGuard-v1.1.0.apk`. To ship a
new build:

1. Replace the file at `public/apk/AyuGuard-v1.1.0.apk` (or update the filename).
2. Update `APK_PATH` and `APP_VERSION` in `lib/content.ts`.
3. Update the `GITHUB_RELEASES` URL if the release tag changed.

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
