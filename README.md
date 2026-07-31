# AI Microtools

47+ free, no-signup AI generators (business names, resumes, social bios, wedding speeches, and more) across Business, Marketing, Social Media, Career, Life Events, Fun, and Writing. Monetized by AdSense + affiliate links, not subscriptions — so the product goal is traffic and repeat use, not conversion.

## Stack

- **Next.js 16.2** (App Router) + **Tailwind CSS**
- **OpenRouter** for generation — see [Model choice](#model-choice) below
- **Supabase** for response caching + per-IP daily rate limiting (optional locally, required in prod)
- **Cloudflare** in front for DNS/proxy, Turnstile (bot protection), and edge caching
- **Vercel** for hosting, with GitHub Actions running lint + build on every push/PR

## Model choice

Primary model is a cheap **paid** model (`google/gemini-2.5-flash-lite`), not a free one. Free-tier
OpenRouter models were tested here first and produced garbled multilingual/repeated-character
artifacts in longer outputs — unacceptable for user-facing content. The paid model costs a fraction
of a cent per generation, so quality wins over the marginal savings. A free model is kept only as a
last-resort fallback for reliability during a paid-model outage, not for routine cost savings.

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

## CI/CD

- **CI**: `.github/workflows/ci.yml` runs `npm run lint` and `npm run build` on every push and PR to `master` — this is a pure gate, it doesn't deploy anything.
- **CD**: the Vercel project is git-connected, so a push to `master` should trigger a production deployment and PRs get preview deployments automatically.
- **One-time manual step**: if auto-deploy doesn't fire after a push, the Vercel GitHub App likely isn't authorized for this repo yet (common when a repo is created via API/CLI rather than through Vercel's own "Import" flow). Fix it at [github.com/settings/installations](https://github.com/settings/installations) → Vercel → Configure → make sure this repo is included in its repository access. Until that's fixed, deploy manually with `vercel deploy --prod`.

## Adding a new tool

Add an entry to the `tools` array in [`src/lib/tools/registry.ts`](src/lib/tools/registry.ts) — slug, form fields, how-to steps, FAQ, and a `buildPrompt` function. Everything else (the page, the API route, caching, rate limiting) is generic and picks it up automatically via `/tools/[slug]`. For longer-form outputs, size `maxTokens` generously (aim for roughly 2 tokens per target word, times the number of results) — under-budgeting truncates output mid-sentence rather than erroring.
