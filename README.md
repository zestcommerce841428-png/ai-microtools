# AI Microtools

Free, no-signup AI generators (business names, slogans, Instagram bios, YouTube channel names). Monetized by AdSense + affiliate links, not subscriptions — so the product goal is traffic and repeat use, not conversion.

## Stack

- **Next.js 16.2** (App Router) + **Tailwind CSS**
- **OpenRouter** for generation — a free-tier model first, cheap paid fallback second
- **Supabase** for response caching + per-IP daily rate limiting (optional locally, required in prod)
- **Cloudflare** in front for DNS/proxy, Turnstile (bot protection), and edge caching
- **Vercel** for hosting

## How a generation request flows

1. Client submits the form → `POST /api/generate/[slug]`
2. Cloudflare Turnstile token is verified (skipped if `TURNSTILE_SECRET_KEY` isn't set)
3. Per-IP daily rate limit checked in Supabase (skipped if Supabase env vars aren't set)
4. Input is hashed; if that hash is already in `generation_cache`, the cached result is returned — no OpenRouter call
5. Otherwise OpenRouter is called (free model → cheap fallback), the result is cached, then returned

This means **local dev works with zero setup beyond an OpenRouter key** — Supabase and Turnstile degrade gracefully to "off" until configured.

## Local setup

```bash
npm install
cp .env.example .env.local
# fill in at least OPENROUTER_API_KEY
npm run dev
```

## Before deploying

1. **Supabase**: create a project, run [`supabase/schema.sql`](supabase/schema.sql) in the SQL editor, then set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
2. **OpenRouter**: set a monthly spend limit / only prepay the credit you're willing to risk — this is the actual hard cap on cost, not the app's own logic.
3. **Cloudflare**: point your domain's DNS through Cloudflare (proxied), create a Turnstile widget, and set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`. This is what stops bots from running up your OpenRouter bill.
4. **Vercel**: deploy the repo, add all env vars from `.env.example` in the project settings.
5. **AdSense**: each tool page already has intro copy, a "How it works" section, and an FAQ — real content, not just a bare input box, which matters for AdSense approval. Add your AdSense script/ad units where `<AdSlot />` is rendered in [`src/app/tools/[slug]/page.tsx`](<src/app/tools/[slug]/page.tsx>).

## Adding a new tool

Add an entry to the `tools` array in [`src/lib/tools/registry.ts`](src/lib/tools/registry.ts) — slug, form fields, how-to steps, FAQ, and a `buildPrompt` function. Everything else (the page, the API route, caching, rate limiting) is generic and picks it up automatically via `/tools/[slug]`.
