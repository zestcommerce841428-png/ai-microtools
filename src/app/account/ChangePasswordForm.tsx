"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { fieldClass, labelClass, buttonClass, otpFieldClass } from "@/components/authFormStyles";

// Real OTP-gated password change: sends a reauthentication code to the
// user's own email (supabase.auth.reauthenticate(), using the
// "Reauthentication" template), then finalizes with both the code and the
// current password — this project has both
// security_update_password_require_reauthentication and
// security_update_password_require_current_password enabled, so both are
// genuinely required server-side, not just decorative form fields.
export default function ChangePasswordForm() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"current" | "code">("current");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSendCode(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: reauthError } = await supabase.auth.reauthenticate();

    setLoading(false);

    if (reauthError) {
      setError(reauthError.message);
      return;
    }

    setStep("code");
  }

  async function handleUpdatePassword(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
      current_password: currentPassword,
      nonce: code,
    });

    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setDone(true);
  }

  function reset() {
    setOpen(false);
    setStep("current");
    setCurrentPassword("");
    setNewPassword("");
    setCode("");
    setError(null);
    setDone(false);
  }

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="self-start text-sm font-medium underline">
        Change password
      </button>
    );
  }

  if (done) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-sm text-zinc-700 dark:text-zinc-300">Password updated.</p>
        <button type="button" onClick={reset} className="self-start text-sm font-medium underline">
          Done
        </button>
      </div>
    );
  }

  if (step === "code") {
    return (
      <form onSubmit={handleUpdatePassword} className="flex flex-col gap-3 rounded-lg border border-surface-border p-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Enter the verification code we emailed you, along with your new password.
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
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={fieldClass}
            autoComplete="new-password"
          />
        </label>
        <div className="flex items-center gap-3">
          <button type="submit" disabled={loading || code.length < 6} className={buttonClass}>
            {loading ? "Updating..." : "Update password"}
          </button>
          <button type="button" onClick={reset} className="text-sm text-zinc-500 hover:text-primary">
            Cancel
          </button>
        </div>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={handleSendCode} className="flex flex-col gap-3 rounded-lg border border-surface-border p-4">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Enter your current password. We&apos;ll email you a code to confirm the change.
      </p>
      <label className={labelClass}>
        Current password
        <input
          type="password"
          required
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className={fieldClass}
          autoComplete="current-password"
        />
      </label>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={loading} className={buttonClass}>
          {loading ? "Sending..." : "Send verification code"}
        </button>
        <button type="button" onClick={reset} className="text-sm text-zinc-500 hover:text-primary">
          Cancel
        </button>
      </div>
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </form>
  );
}
