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
