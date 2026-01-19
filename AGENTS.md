# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts Next.js App Router routes (`page.tsx`, `layout.tsx`), route handlers under `app/**/route.ts`, auth flows in `app/auth/*`, and the landing page in `app/landing/*`.
- `components/` contains shared UI and feature components, with `components/landing/` for landing sections for example.
- `lib/` holds shared helpers, for example the Supabase clients (`lib/supabase/*`), and common utilities in `lib/utils.ts`.
- `supabase/` stores project config and SQL migrations (`supabase/migrations/*.sql`).
- Styling config lives in `tailwind.config.ts` and `postcss.config.mjs`, with global styles in `app/globals.css`.

## Build, Test, and Development Commands
- `npm run dev` — start the Next.js dev server at `http://localhost:3000`.
- `npm run build` — create a production build.
- `npm run start` — run the built app.
- `npm run lint` — run ESLint using `eslint.config.mjs`.
- `npm run lint -- --fix` - attempt fixing linting warnings and errors
- 
## Coding Style & Naming Conventions
- TypeScript + React; 2-space indentation; semicolons; prefer named exports.
- File names use kebab-case in `components/` (e.g., `auth-button.tsx`); route files follow Next.js conventions (`page.tsx`, `layout.tsx`, `route.ts`).
- Tailwind is the primary styling layer, follow design guidelines from `design-guidelines.md`
- Use the `@/` alias for project-root imports (configured in `tsconfig.json`).
- Always run `npm run lint` and make sure there are no warnings or errors before you are finished with anything

## Testing Guidelines
- No automated test runner is configured yet. Use `npm run lint` for CI-level checks.
- If you add tests, use `*.test.ts(x)` naming and document the runner + command in `package.json`.

## Commit & Pull Request Guidelines
- Commit messages are short, imperative, and scoped to a single change (e.g., "Update migration", "Add supabase folder").
- PRs should include: what changed, why, how to test, and screenshots for UI changes.
- For schema changes, add a new migration in `supabase/migrations/` and mention it in the PR.

## Environment & Configuration
- Configure `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- Keep secrets out of the repo; document any new required env vars in this file.
