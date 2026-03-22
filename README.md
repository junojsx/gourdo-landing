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
# gourdo-landing
