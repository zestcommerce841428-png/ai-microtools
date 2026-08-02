"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { fieldClass, labelClass, buttonClass, otpFieldClass } from "@/components/authFormStyles";
import TurnstileWidget from "@/components/TurnstileWidget";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function SignupForm() {
  const router = useRouter();
  const [step, setStep] = useState<"details" | "code">("details");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resent, setResent] = useState(false);

  const handleVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const needsVerification = Boolean(TURNSTILE_SITE_KEY) && !turnstileToken;

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { captchaToken: turnstileToken ?? undefined },
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    setTurnstileToken(null);
    setStep("code");
  }

  async function handleVerifyCode(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: verifyError } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "signup",
    });

    setLoading(false);

    if (verifyError) {
      setError(verifyError.message);
      return;
    }

    router.push("/account");
    router.refresh();
  }

  async function handleResend() {
    setError(null);
    setResent(false);
    setLoading(true);

    const supabase = createClient();
    const { error: resendError } = await supabase.auth.resend({
      type: "signup",
      email,
      options: { captchaToken: turnstileToken ?? undefined },
    });

    setLoading(false);

    if (resendError) {
      setError(resendError.message);
      return;
    }

    setTurnstileToken(null);
    setResent(true);
  }

  if (step === "code") {
    return (
      <form onSubmit={handleVerifyCode} className="flex flex-col gap-4">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          We sent a 6-digit code to <strong>{email}</strong>. Enter it below to activate your account.
        </p>
        <label className={labelClass}>
          Verification code
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="[0-9]*"
            maxLength={6}
            required
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
            className={otpFieldClass}
            placeholder="000000"
          />
        </label>
        <button type="submit" disabled={loading || code.length < 6} className={buttonClass}>
          {loading ? "Verifying..." : "Verify & activate account"}
        </button>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

        <div className="flex flex-col gap-3 border-t border-surface-border pt-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Didn&apos;t get it? Check spam, or complete the check below and resend.
          </p>
          {TURNSTILE_SITE_KEY && <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} onVerify={handleVerify} />}
          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              onClick={() => {
                setStep("details");
                setCode("");
                setError(null);
              }}
              className="text-zinc-500 hover:text-primary"
            >
              Use a different email
            </button>
            <button
              type="button"
              onClick={handleResend}
              disabled={loading || needsVerification}
              className="font-medium text-zinc-600 hover:text-primary disabled:opacity-50 dark:text-zinc-400"
            >
              {resent ? "Code resent" : "Resend code"}
            </button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-4">
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
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={fieldClass}
          autoComplete="new-password"
        />
      </label>
      {TURNSTILE_SITE_KEY && <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} onVerify={handleVerify} />}
      <button type="submit" disabled={loading || needsVerification} className={buttonClass}>
        {loading ? "Creating account..." : "Sign up"}
      </button>
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </form>
  );
}
