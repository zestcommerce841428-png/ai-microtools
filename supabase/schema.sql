-- Run once in the Supabase SQL editor (or via the CLI) before deploying.

create table if not exists generation_cache (
  id bigserial primary key,
  tool_slug text not null,
  input_hash text not null,
  input_json jsonb not null,
  output_json jsonb not null,
  model_used text not null,
  created_at timestamptz not null default now(),
  unique (tool_slug, input_hash)
);

create table if not exists rate_limits (
  ip_hash text not null,
  day date not null,
  tool_slug text not null,
  count int not null default 1,
  primary key (ip_hash, day, tool_slug)
);

-- rate_limits rows are only relevant for ~1 day; prune old ones periodically,
-- e.g. via a Supabase cron job:
-- delete from rate_limits where day < current_date - interval '7 days';

-- --- Accounts (optional — tools work fine anonymously without any of this) ---

-- Higher daily limit for signed-in users, keyed by user_id instead of IP.
-- Server-only bookkeeping (service_role), so RLS is enabled with no policies
-- to deny all client-side access by default.
create table if not exists user_rate_limits (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  tool_slug text not null,
  count int not null default 1,
  primary key (user_id, day, tool_slug)
);
alter table user_rate_limits enable row level security;

-- A signed-in user's generation history, shown on their account page.
-- Read directly by the client (via the user's own session), so RLS policies
-- restrict each user to their own rows.
create table if not exists saved_generations (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  tool_slug text not null,
  tool_name text not null,
  input_json jsonb not null,
  output_json jsonb not null,
  created_at timestamptz not null default now()
);
alter table saved_generations enable row level security;

create policy "Users can view their own generations"
  on saved_generations for select
  using (auth.uid() = user_id);

create policy "Users can insert their own generations"
  on saved_generations for insert
  with check (auth.uid() = user_id);

create policy "Users can delete their own generations"
  on saved_generations for delete
  using (auth.uid() = user_id);

-- Blog posts, DB-backed so /blog can offer real search (via search_vector)
-- and category filtering instead of a static in-repo array. Public read
-- only — posts are written by an admin/seed script using the service role
-- key, which bypasses RLS, so no insert/update policy is needed here.
create table if not exists blog_posts (
  id bigint generated always as identity primary key,
  slug text unique not null,
  title text not null,
  description text not null,
  category text not null,
  content jsonb not null,
  related_tools text[] not null default '{}',
  published_at timestamptz not null default now(),
  search_vector tsvector generated always as (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(content #>> '{}', '')), 'C')
  ) stored
);

create index if not exists blog_posts_search_idx on blog_posts using gin(search_vector);
create index if not exists blog_posts_category_idx on blog_posts (category);
create index if not exists blog_posts_published_at_idx on blog_posts (published_at desc);

alter table blog_posts enable row level security;

create policy "Public can read blog posts"
  on blog_posts for select
  to anon, authenticated
  using (true);

-- "Trust this device" for MFA: after a user completes a TOTP challenge and
-- opts in, /api/auth/device/trust stores a hash of a random token (never
-- the raw token) and sets it as an httpOnly cookie. On future logins,
-- /api/auth/device/check looks up the hash to skip the MFA prompt for the
-- device. Deliberately has no RLS policies — every access goes through
-- these two server routes using the service-role key, which bypasses RLS;
-- RLS is still enabled so a future accidental anon-key query denies by
-- default rather than leaking rows.
create table if not exists trusted_devices (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  device_token_hash text not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  unique (user_id, device_token_hash)
);

create index if not exists trusted_devices_lookup_idx on trusted_devices (user_id, device_token_hash, expires_at);

alter table trusted_devices enable row level security;
