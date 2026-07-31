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
