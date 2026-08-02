"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { fieldClass, labelClass, buttonClass, otpFieldClass } from "@/components/authFormStyles";
import TurnstileWidget from "@/components/TurnstileWidget";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resent, setResent] = useState(false);
  const [done, setDone] = useState(false);

  const handleVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const needsVerification = Boolean(TURNSTILE_SITE_KEY) && !turnstileToken;

  async function handleSendCode(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      captchaToken: turnstileToken ?? undefined,
    });

    setLoading(false);

    if (resetError) {
      setError(resetError.message);
      return;
    }

    setTurnstileToken(null);
    setStep("code");
  }

  async function handleResetPassword(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: verifyError } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "recovery",
    });

    if (verifyError) {
      setLoading(false);
      setError(verifyError.message);
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setDone(true);
    setTimeout(() => {
      router.push("/account");
      router.refresh();
    }, 1500);
  }

  async function handleResend() {
    setError(null);
    setResent(false);
    setLoading(true);

    const supabase = createClient();
    const { error: resendError } = await supabase.auth.resetPasswordForEmail(email, {
      captchaToken: turnstileToken ?? undefined,
    });

    setLoading(false);

    if (resendError) {
      setError(resendError.message);
      return;
    }

    setTurnstileToken(null);
    setResent(true);
  }

  if (done) {
    return (
      <p className="text-center text-zinc-700 dark:text-zinc-300">Password updated. Redirecting...</p>
    );
  }

  if (step === "code") {
    return (
      <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          We sent a 6-digit code to <strong>{email}</strong>. Enter it along with your new password.
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
        <label className={labelClass}>
          New password
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
        <button type="submit" disabled={loading || code.length < 6} className={buttonClass}>
          {loading ? "Updating..." : "Verify & set new password"}
        </button>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Didn&apos;t get it? Check spam, or complete the check below and resend.
          </p>
          {TURNSTILE_SITE_KEY && <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} onVerify={handleVerify} />}
          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              onClick={() => {
                setStep("email");
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
    <form onSubmit={handleSendCode} className="flex flex-col gap-4">
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
        {loading ? "Sending..." : "Send verification code"}
      </button>
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </form>
  );
}
