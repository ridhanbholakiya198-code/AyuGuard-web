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

## Local / Node deployment

```bash
npm install
npm run build
npm run start
```

The app listens on port 3000 by default (override with `PORT=xxxx npm run start`).

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
