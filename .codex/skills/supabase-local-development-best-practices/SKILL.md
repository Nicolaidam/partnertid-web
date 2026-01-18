---
name: supabase-local-development-best-practices
description: "Local Supabase development best practices: CLI install/init, running the local stack, creating and applying migrations, resetting/seeding the DB, enabling RLS, generating types, working with edge functions, and common pitfalls when the user is changing schema or iterating locally."
---

# Supabase Local Development – Best Practices

## Quick context
Running Supabase locally gives you control over schema changes, fast iteration, deterministic migrations, and automatic type generation. Use this skill anytime the user works with the Supabase CLI, local database lifecycle, or schema migration workflow.

## Setup and Command Flow
1. **Install & authenticate**
   ```bash
   npm install -g supabase
   supabase login
   ```
2. **Initialize (once per repo)**
   ```bash
   supabase init
   ```
   This creates `supabase/` with `migrations/`, `functions/`, `seed.sql`, and `config.toml`.
3. **Run the stack**
   ```bash
   supabase start
   supabase stop
   supabase db reset
   ```
   Use `reset` after changing migrations so the database matches the latest schema and seeds.

## Schema and migrations
- Always create a new migration with `supabase migration new <name>` before altering tables.
- Example:
  ```sql
  create table public.users (
    id uuid primary key default gen_random_uuid(),
    email text not null unique,
    created_at timestamptz default now()
  );
  ```
- Apply migrations by resetting the DB (`supabase db reset`) when iterating locally.
- `seed.sql` runs during `supabase db reset`; keep it idempotent.
- Always enable RLS as soon as the table exists:
  ```sql
  alter table public.users enable row level security;
  ```

## Supplying runtime assets
- Generate TypeScript types after each migration:
  ```bash
  supabase gen types typescript --local --schema public > src/integrations/supabase/types.ts
  ```
- Treat Supabase schema and policies as code; never edit the running DB manually or the schema will drift.

## Additional Supabase features
- **Public RPC functions**: define `create or replace function public.xxx()` with grants for `anon` and `authenticated` and test with SQL statements.
- **Edge functions**:
  ```bash
  supabase functions new hello-world
  supabase functions serve
  supabase functions deploy hello-world
  ```
- **Deploying**:
  ```bash
  supabase link --project-ref your-project-ref
  supabase db push
  ```

## Recommended workflow (repeatable)
1. Start Supabase
2. Create a migration
3. Reset the database
4. Generate fresh types
5. Run tests/lint
6. Commit changes
7. Push to production

## Common pitfalls
- Avoid manual DB edits outside migrations
- Enable RLS for every table
- Never forget to regenerate types after schema changes
- Watch for schema drift between local and production

## Folder reminders
```
src/types/supabase.ts
supabase/migrations
supabase/functions
supabase/seed.sql
```
These files should stay in sync with migrations, seeds, and generated types.

## Final advice
Treat Supabase as code, not a GUI—every change should be reproducible through migrations, seeds, and scripts.
