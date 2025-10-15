# Atlys UI — React + TypeScript + Tailwind

Live demo: [https://atlys-flame.vercel.app/](https://atlys-flame.vercel.app/)

This project implements a small social feed UI with:
- Comment card UI and a “Create Feed” composer
- Login/Signup (client-only) with validations
- Session-scoped signup storage (sessionStorage) and demo logins
- Route-based pages with React Router
- Tailwind-only styles and micro-interactions
- Auth gate modal prompting login on interactive CTAs when unauthenticated

## Quickstart
```bash
npm i
npm run dev
```

Build & preview production:
```bash
npm run build
npm run preview
```

## Credentials
- demo@example.com / password123
- test@user.com / testpass

Signing up creates a user in `sessionStorage` under `auth:users` and logs in by writing `auth:user` to `localStorage`.

## Structure
- `@ui/` atoms → `@components/` → `@pages/`
- Aliases are configured in Vite and TS:
  - `@ui/*` → `src/ui/*`
  - `@components/*` → `src/components/*`
  - `@pages/*` → `src/pages/*`
  - `@data/*` → `src/data/*`

Key files:
- `src/components/CreateFeed.tsx` — composer with toolbar, counter, and send
- `src/components/FeedCard.tsx` — feed item card
- `src/components/AuthGate.tsx` — modal + `requireAuth`
- `src/pages/Login.tsx`, `src/pages/Signup.tsx` — forms with validation
- `src/pages/Dashboard.tsx` or `src/pages/Feed.tsx` — renders the feed
- `src/components/Header.tsx` — sticky header; Login link hidden when authed

## Auth gating behavior
- All interactive CTAs call `requireAuth(action?)`.
- If not logged in, an in-app modal asks the user to log in; after login, it closes automatically via a custom `auth:changed` event and storage listeners.

## Development notes
- Tailwind v4 (via `@tailwindcss/vite`) is used for styling and animations.
- React Router v6+ handles routes in `src/App.tsx`.
- TypeScript is strict; build with `npm run build`.

---
Deployed to Vercel: `https://atlys-flame.vercel.app/`
