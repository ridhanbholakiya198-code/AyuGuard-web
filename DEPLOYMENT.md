# Deployment Guide

## Option A — Deploy to Vercel (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed.
4. Click **Deploy**. Your site will be live at `your-project.vercel.app`.
5. (Optional) Add a custom domain under **Project → Settings → Domains**.

### Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Option B — Deploy to any Node host

```bash
npm install
npm run build
npm run start
```

The app listens on port 3000 by default (override with `PORT=xxxx npm run start`).

## Option C — Static export

This project uses standard Next.js APIs compatible with static export if you don't
need the `/apk` download headers behavior. To export:

1. Remove the `headers()` function in `next.config.js` (not supported in static export).
2. Add `output: "export"` to `next.config.js`.
3. Run `npm run build`. Static files will be in `/out`.
4. Deploy `/out` to any static host (GitHub Pages, Netlify, S3, Cloudflare Pages).

## Environment

No environment variables are required — this is a fully static, content-driven
marketing site with no backend calls.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: AyuGuard website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```
