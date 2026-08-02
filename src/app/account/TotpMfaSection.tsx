"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { otpFieldClass, labelClass, buttonClass } from "@/components/authFormStyles";

interface TotpFactor {
  id: string;
  status: "verified" | "unverified";
}

export default function TotpMfaSection() {
  const [loading, setLoading] = useState(true);
  const [factor, setFactor] = useState<TotpFactor | null>(null);
  const [enrolling, setEnrolling] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const [pendingFactorId, setPendingFactorId] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function refreshFactors() {
    const supabase = createClient();
    const { data } = await supabase.auth.mfa.listFactors();
    const totp = data?.totp?.[0] ?? null;
    setFactor(totp ? { id: totp.id, status: "verified" } : null);
    setLoading(false);
  }

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.mfa.listFactors().then(({ data }) => {
      const totp = data?.totp?.[0] ?? null;
      setFactor(totp ? { id: totp.id, status: "verified" } : null);
      setLoading(false);
    });
  }, []);

  async function startEnroll() {
    setError(null);
    setBusy(true);
    const supabase = createClient();

    // Clean up any abandoned unverified attempt first — Supabase only
    // allows one in-progress TOTP enrollment at a time.
    const { data: existing } = await supabase.auth.mfa.listFactors();
    const stale = existing?.all.find((f) => f.factor_type === "totp" && f.status === "unverified");
    if (stale) await supabase.auth.mfa.unenroll({ factorId: stale.id });

    const { data, error: enrollError } = await supabase.auth.mfa.enroll({ factorType: "totp" });
    setBusy(false);

    if (enrollError || !data) {
      setError(enrollError?.message ?? "Couldn't start enrollment. Please try again.");
      return;
    }

    setPendingFactorId(data.id);
    setQrCode(data.totp.qr_code);
    setSecret(data.totp.secret);
    setEnrolling(true);
  }

  async function confirmEnroll(e: React.FormEvent) {
    e.preventDefault();
    if (!pendingFactorId) return;
    setBusy(true);
    setError(null);

    const supabase = createClient();
    const { error: verifyError } = await supabase.auth.mfa.challengeAndVerify({
      factorId: pendingFactorId,
      code,
    });

    setBusy(false);

    if (verifyError) {
      setError(verifyError.message);
      return;
    }

    setEnrolling(false);
    setQrCode(null);
    setSecret(null);
    setPendingFactorId(null);
    setCode("");
    await refreshFactors();
  }

  async function disable() {
    if (!factor) return;
    setBusy(true);
    setError(null);

    const supabase = createClient();
    const { error: unenrollError } = await supabase.auth.mfa.unenroll({ factorId: factor.id });

    setBusy(false);

    if (unenrollError) {
      setError(unenrollError.message);
      return;
    }

    await refreshFactors();
  }

  function cancelEnroll() {
    setEnrolling(false);
    setQrCode(null);
    setSecret(null);
    setPendingFactorId(null);
    setCode("");
    setError(null);
  }

  if (loading) {
    return <div className="h-8" aria-hidden="true" />;
  }

  if (enrolling) {
    return (
      <form onSubmit={confirmEnroll} className="flex flex-col gap-3 rounded-lg border border-surface-border p-4">
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Set up an authenticator app</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Scan this QR code with an authenticator app (Google Authenticator, 1Password, Authy), or enter the code manually.
        </p>
        {qrCode && (
          // eslint-disable-next-line @next/next/no-img-element -- qr_code is an SVG data URI, not an optimizable asset
          <img src={qrCode} alt="TOTP QR code" className="h-40 w-40 self-center rounded-lg bg-white p-2" />
        )}
        {secret && (
          <p className="self-center break-all rounded-md bg-zinc-100 px-3 py-1.5 text-center text-xs font-mono dark:bg-zinc-800">
            {secret}
          </p>
        )}
        <label className={labelClass}>
          Code from your authenticator app
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
        <div className="flex items-center gap-3">
          <button type="submit" disabled={busy || code.length < 6} className={buttonClass}>
            {busy ? "Verifying..." : "Verify & enable"}
          </button>
          <button type="button" onClick={cancelEnroll} className="text-sm text-zinc-500 hover:text-primary">
            Cancel
          </button>
        </div>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      </form>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Two-factor authentication</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            {factor ? "Enabled via authenticator app." : "Require a code from an authenticator app when logging in."}
          </p>
        </div>
        {factor ? (
          <button
            type="button"
            onClick={disable}
            disabled={busy}
            className="shrink-0 text-sm font-medium text-red-600 hover:underline disabled:opacity-50 dark:text-red-400"
          >
            {busy ? "Removing..." : "Disable"}
          </button>
        ) : (
          <button
            type="button"
            onClick={startEnroll}
            disabled={busy}
            className="shrink-0 text-sm font-medium underline disabled:opacity-50"
          >
            {busy ? "Starting..." : "Enable"}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
