"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AccountActions() {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  async function handleDelete() {
    setDeleting(true);
    setError(null);

    const res = await fetch("/api/account/delete", { method: "POST" });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Couldn't delete your account. Please try again.");
      setDeleting(false);
      return;
    }

    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={handleSignOut}
        className="self-start rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
      >
        Sign out
      </button>

      {!confirming ? (
        <button
          type="button"
          onClick={() => setConfirming(true)}
          className="self-start text-sm font-medium text-red-600 hover:underline dark:text-red-400"
        >
          Delete account and all data
        </button>
      ) : (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950">
          <p className="text-sm text-red-800 dark:text-red-200">
            This permanently deletes your account and saved generation history. This can&apos;t be undone.
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
            >
              {deleting ? "Deleting..." : "Yes, delete everything"}
            </button>
            <button
              type="button"
              onClick={() => setConfirming(false)}
              disabled={deleting}
              className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
          </div>
          {error && <p className="mt-2 text-sm text-red-700 dark:text-red-300">{error}</p>}
        </div>
      )}
    </div>
  );
}
