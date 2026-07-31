"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { fieldClass, labelClass, buttonClass } from "@/components/authFormStyles";
import TurnstileWidget from "@/components/TurnstileWidget";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const needsVerification = Boolean(TURNSTILE_SITE_KEY) && !turnstileToken;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: { captchaToken: turnstileToken ?? undefined },
    });

    if (signInError) {
      setLoading(false);
      setError(signInError.message);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    router.push(params.get("redirectTo") || "/account");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className={labelClass}>
        Email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
          autoComplete="email"
        />
      </label>
      <label className={labelClass}>
        Password
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={fieldClass}
          autoComplete="current-password"
        />
      </label>
      {TURNSTILE_SITE_KEY && <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} onVerify={handleVerify} />}
      <button type="submit" disabled={loading || needsVerification} className={buttonClass}>
        {loading ? "Logging in..." : "Log in"}
      </button>
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </form>
  );
}
