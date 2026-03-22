# Gourdo — Landing Page

Landing page for **Gourdo**, a smart grocery tracking iOS app. Built with TypeScript, React, Vite, and React Router.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with `npm run preview`.

## Pages

- **Home** — App intro and App Store link
- **Privacy Policy** — How we collect and use data
- **Terms of Use** — Usage terms and license
- **Data Deletion** — How to delete app data and request account deletion
- **Feedback** — UserJot-powered feedback (`/feedback`)

## UserJot

Copy `.env.example` to `.env` or `.env.local` and set `VITE_USERJOT_PROJECT_ID` to the **Project ID** from UserJot (**Settings → Project**), e.g. `proj_…`. Do **not** paste your public board URL (`https://….userjot.com`) — that breaks the widget and causes 404s. Restart the dev server after changing env vars.

## Deployment (SPA routing)

`/feedback`, `/privacy-policy`, etc. are **client-side routes**. The server must fall back to `index.html` for unknown paths, or direct visits and refreshes will **404**.

- **Netlify / Cloudflare Pages:** `public/_redirects` is copied into `dist/` on build (`/* → /index.html`).
- **Vercel:** `vercel.json` rewrites are included in the repo.

For **GitHub Pages**, S3, or custom nginx/Apache, configure the same “single-page app” fallback to `index.html`.
