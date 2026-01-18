# Partnertid Web

Production-ready Next.js + Supabase web app for Partnertid.

## Quickstart

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment variables

Set these in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_or_anon_key
```

Notes:
- Supabase now provides publishable keys; legacy anon keys also work with
  `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` during the transition.
- Find values in your Supabase project API settings.

## Tech

- Next.js App Router
- Supabase (SSR + auth)
- Tailwind CSS + Radix UI

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project structure

- `app/`: routes, layouts, route handlers, auth, landing
- `components/`: shared UI and landing sections
- `lib/`: shared helpers and Supabase clients
- `supabase/`: local config and SQL migrations
