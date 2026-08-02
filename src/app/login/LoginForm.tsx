"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { fieldClass, labelClass, buttonClass, otpFieldClass } from "@/components/authFormStyles";
import TurnstileWidget from "@/components/TurnstileWidget";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Mode = "password" | "otp";
type Step = "primary" | "otp-code" | "mfa";

export default function LoginForm() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("password");
  const [step, setStep] = useState<Step>("primary");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [mfaFactorId, setMfaFactorId] = useState<string | null>(null);
  const [mfaCode, setMfaCode] = useState("");
  const [trustDevice, setTrustDevice] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const needsVerification = Boolean(TURNSTILE_SITE_KEY) && !turnstileToken;

  function finishLogin() {
    const params = new URLSearchParams(window.location.search);
    router.push(params.get("redirectTo") || "/account");
    router.refresh();
  }

  // Runs after ANY primary sign-in succeeds (password, OTP, or passkey) —
  // skips the TOTP prompt on a device the user already trusted, otherwise
  // steps up to MFA if this account has a verified TOTP factor.
  async function handlePostPrimaryAuth() {
    try {
      const checkRes = await fetch("/api/auth/device/check", { method: "POST" });
      const { trusted } = await checkRes.json();
      if (trusted) {
        finishLogin();
        return;
      }
    } catch {
      // If the trust check itself fails, fall through to the normal AAL check.
    }

    const supabase = createClient();
    const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (aal && aal.nextLevel === "aal2" && aal.currentLevel !== aal.nextLevel) {
      const { data: factors } = await supabase.auth.mfa.listFactors();
      const totp = factors?.totp?.[0];
      if (totp) {
        setMfaFactorId(totp.id);
        setStep("mfa");
        return;
      }
    }

    finishLogin();
  }

  async function handlePasswordSubmit(e: React.FormEvent) {
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

    await handlePostPrimaryAuth();
    setLoading(false);
  }

  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: otpError } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: false, captchaToken: turnstileToken ?? undefined },
    });

    setLoading(false);

    if (otpError) {
      setError(otpError.message);
      return;
    }

    setTurnstileToken(null);
    setStep("otp-code");
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: verifyError } = await supabase.auth.verifyOtp({ email, token: otpCode, type: "email" });

    if (verifyError) {
      setLoading(false);
      setError(verifyError.message);
      return;
    }

    await handlePostPrimaryAuth();
    setLoading(false);
  }

  async function handlePasskeyLogin() {
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: passkeyError } = await supabase.auth.signInWithPasskey({
      options: { captchaToken: turnstileToken ?? undefined },
    });

    if (passkeyError) {
      setLoading(false);
      setError(passkeyError.message);
      return;
    }

    await handlePostPrimaryAuth();
    setLoading(false);
  }

  async function handleMfaSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!mfaFactorId) return;
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: verifyError } = await supabase.auth.mfa.challengeAndVerify({
      factorId: mfaFactorId,
      code: mfaCode,
    });

    if (verifyError) {
      setLoading(false);
      setError(verifyError.message);
      return;
    }

    if (trustDevice) {
      try {
        await fetch("/api/auth/device/trust", { method: "POST" });
      } catch {
        // Non-fatal — the user still logged in, they'll just be asked again next time.
      }
    }

    finishLogin();
  }

  if (step === "mfa") {
    return (
      <form onSubmit={handleMfaSubmit} className="flex flex-col gap-4">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          Enter the code from your authenticator app.
        </p>
        <label className={labelClass}>
          Authenticator code
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="[0-9]*"
            maxLength={6}
            required
            value={mfaCode}
            onChange={(e) => setMfaCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
            className={otpFieldClass}
            placeholder="000000"
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <input type="checkbox" checked={trustDevice} onChange={(e) => setTrustDevice(e.target.checked)} />
          Trust this device for 30 days — don&apos;t ask again here
        </label>
        <button type="submit" disabled={loading || mfaCode.length < 6} className={buttonClass}>
          {loading ? "Verifying..." : "Verify"}
        </button>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      </form>
    );
  }

  if (step === "otp-code") {
    return (
      <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          We sent a 6-digit code to <strong>{email}</strong>.
        </p>
        <label className={labelClass}>
          Code
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="[0-9]*"
            maxLength={6}
            required
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
            className={otpFieldClass}
            placeholder="000000"
          />
        </label>
        <button type="submit" disabled={loading || otpCode.length < 6} className={buttonClass}>
          {loading ? "Verifying..." : "Log in"}
        </button>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        <button
          type="button"
          onClick={() => {
            setStep("primary");
            setOtpCode("");
            setError(null);
          }}
          className="text-sm text-zinc-500 hover:text-primary"
        >
          Use a different email
        </button>
      </form>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {mode === "password" ? (
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
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
      ) : (
        <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
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
            {loading ? "Sending..." : "Send login code"}
          </button>
          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        </form>
      )}

      <button
        type="button"
        onClick={() => {
          setMode(mode === "password" ? "otp" : "password");
          setError(null);
        }}
        className="text-sm font-medium text-zinc-500 hover:text-primary"
      >
        {mode === "password" ? "Use a one-time code instead" : "Use your password instead"}
      </button>

      <div className="flex items-center gap-3 text-xs text-zinc-400 dark:text-zinc-600">
        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        or
        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <button
        type="button"
        onClick={handlePasskeyLogin}
        disabled={loading || needsVerification}
        className="rounded-lg border border-zinc-300 px-4 py-2.5 text-center font-semibold text-zinc-700 transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
      >
        Log in with a passkey
      </button>
    </div>
  );
}
