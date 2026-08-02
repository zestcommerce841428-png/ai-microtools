"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Passkey {
  id: string;
  friendly_name?: string;
  created_at: string;
}

export default function PasskeySection() {
  const [passkeys, setPasskeys] = useState<Passkey[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.passkey.list().then(({ data, error: listError }) => {
      if (listError) {
        setError(listError.message);
      } else {
        setPasskeys(data ?? []);
      }
      setLoading(false);
    });
  }, []);

  async function refresh() {
    const supabase = createClient();
    const { data } = await supabase.auth.passkey.list();
    setPasskeys(data ?? []);
  }

  async function addPasskey() {
    setBusy(true);
    setError(null);

    const supabase = createClient();
    const { error: registerError } = await supabase.auth.registerPasskey();

    setBusy(false);

    if (registerError) {
      setError(registerError.message);
      return;
    }

    await refresh();
  }

  async function removePasskey(passkeyId: string) {
    setBusy(true);
    setError(null);

    const supabase = createClient();
    const { error: deleteError } = await supabase.auth.passkey.delete({ passkeyId });

    setBusy(false);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    await refresh();
  }

  if (loading) {
    return <div className="h-8" aria-hidden="true" />;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Passkeys</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Sign in with Face ID, Touch ID, Windows Hello, or a security key — no password.
          </p>
        </div>
        <button
          type="button"
          onClick={addPasskey}
          disabled={busy}
          className="shrink-0 text-sm font-medium underline disabled:opacity-50"
        >
          {busy ? "Working..." : "Add a passkey"}
        </button>
      </div>

      {passkeys.length > 0 && (
        <ul className="flex flex-col gap-2">
          {passkeys.map((pk) => (
            <li
              key={pk.id}
              className="flex items-center justify-between rounded-lg border border-surface-border p-2.5 text-sm"
            >
              <span className="text-zinc-700 dark:text-zinc-300">
                {pk.friendly_name || "Passkey"} — added {new Date(pk.created_at).toLocaleDateString()}
              </span>
              <button
                type="button"
                onClick={() => removePasskey(pk.id)}
                disabled={busy}
                className="text-xs font-medium text-red-600 hover:underline disabled:opacity-50 dark:text-red-400"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
