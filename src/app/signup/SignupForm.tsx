"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { fieldClass, labelClass, buttonClass } from "@/components/authFormStyles";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/account` },
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    setDone(true);
  }

  if (done) {
    return (
      <p className="text-center text-zinc-700 dark:text-zinc-300">
        Check <strong>{email}</strong> for a confirmation link to activate your account.
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
      <button type="submit" disabled={loading} className={buttonClass}>
        {loading ? "Creating account..." : "Sign up"}
      </button>
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </form>
  );
}
