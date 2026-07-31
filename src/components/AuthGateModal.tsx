"use client";

import Link from "next/link";

export default function AuthGateModal({
  redirectTo,
  onDismiss,
}: {
  redirectTo: string;
  onDismiss: () => void;
}) {
  const redirectParam = encodeURIComponent(redirectTo);

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-gate-title"
    >
      <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <h2 id="auth-gate-title" className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Free account required
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Sign up free (takes about 10 seconds) to generate results — and get a higher daily limit
          plus saved history while you&apos;re at it.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <Link
            href={`/signup?redirectTo=${redirectParam}`}
            className="rounded-lg bg-zinc-900 px-4 py-2.5 text-center font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Sign up free
          </Link>
          <Link
            href={`/login?redirectTo=${redirectParam}`}
            className="rounded-lg border border-zinc-300 px-4 py-2.5 text-center font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Log in
          </Link>
          <button
            type="button"
            onClick={onDismiss}
            className="mt-1 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
          >
            Not now, just browsing
          </button>
        </div>
      </div>
    </div>
  );
}
