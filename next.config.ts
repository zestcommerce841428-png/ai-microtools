import type { NextConfig } from "next";

// Turnstile's widget script runs in the browser and needs its own iframe/script
// origin allowed; the Supabase Auth client (signup/login/reset/session) calls
// the Supabase API directly from the browser, so its origin needs connect-src.
// Profile photos are served from Supabase Storage's public URL (a different
// origin from the app itself), so img-src needs it too — without this, the
// browser silently drops the <img> as a CSP violation rather than erroring
// visibly, which is exactly the "uploads fine, never displays" symptom.
// Everything else stays locked to 'self'. Next.js still needs 'unsafe-inline'
// for its own hydration bootstrap script and Tailwind's inline styles —
// tightening further would require a nonce-based setup.
const supabaseOrigin = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: ${supabaseOrigin}`.trim(),
  "font-src 'self' data:",
  `connect-src 'self' https://challenges.cloudflare.com ${supabaseOrigin}`.trim(),
  "frame-src https://challenges.cloudflare.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

const nextConfig: NextConfig = {
  images: {
    // AVIF first (smaller), WebP fallback for browsers that don't support it.
    formats: ["image/avif", "image/webp"],
    // Required as of Next.js 16 — an explicit allowlist, not just a default.
    qualities: [75],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
