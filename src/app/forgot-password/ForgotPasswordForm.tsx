"use client";

import { useCallback, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { fieldClass, labelClass, buttonClass } from "@/components/authFormStyles";
import TurnstileWidget from "@/components/TurnstileWidget";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const handleVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const needsVerification = Boolean(TURNSTILE_SITE_KEY) && !turnstileToken;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
      captchaToken: turnstileToken ?? undefined,
    });

    setLoading(false);

    if (resetError) {
      setError(resetError.message);
      return;
    }

    setDone(true);
  }

  if (done) {
    return (
      <p className="text-center text-zinc-700 dark:text-zinc-300">
        If an account exists for <strong>{email}</strong>, a reset link is on its way.
      </p>
    );
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
      {TURNSTILE_SITE_KEY && <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} onVerify={handleVerify} />}
      <button type="submit" disabled={loading || needsVerification} className={buttonClass}>
        {loading ? "Sending..." : "Send reset link"}
      </button>
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </form>
  );
}
