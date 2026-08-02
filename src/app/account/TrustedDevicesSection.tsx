"use client";

import { useEffect, useState } from "react";

interface TrustedDevice {
  id: number;
  user_agent: string | null;
  created_at: string;
  expires_at: string;
  isCurrentDevice: boolean;
}

// Minimal, good-enough parsing for a readable label ("Chrome on Windows") —
// not trying to be a full UA-parsing library, just enough to tell devices
// apart in a list.
function describeUserAgent(ua: string | null): string {
  if (!ua) return "Unknown device";

  let browser = "Unknown browser";
  if (ua.includes("Edg/")) browser = "Edge";
  else if (ua.includes("OPR/") || ua.includes("Opera")) browser = "Opera";
  else if (ua.includes("Chrome/")) browser = "Chrome";
  else if (ua.includes("Firefox/")) browser = "Firefox";
  else if (ua.includes("Safari/") && !ua.includes("Chrome")) browser = "Safari";

  let os = "an unknown OS";
  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Mac OS X") || ua.includes("Macintosh")) os = "macOS";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";
  else if (ua.includes("Linux")) os = "Linux";

  return `${browser} on ${os}`;
}

export default function TrustedDevicesSection() {
  const [devices, setDevices] = useState<TrustedDevice[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | "all" | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/auth/device/list")
      .then((res) => res.json())
      .then((data) => setDevices(data.devices ?? []))
      .finally(() => setLoading(false));
  }, []);

  async function revoke(id: number) {
    setBusyId(id);
    setError(null);

    const res = await fetch("/api/auth/device/revoke", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setBusyId(null);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Couldn't revoke that device.");
      return;
    }

    setDevices((prev) => prev.filter((d) => d.id !== id));
  }

  async function revokeAll() {
    setBusyId("all");
    setError(null);

    const res = await fetch("/api/auth/device/revoke", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ all: true }),
    });

    setBusyId(null);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Couldn't revoke devices.");
      return;
    }

    setDevices([]);
  }

  if (loading) {
    return <div className="h-8" aria-hidden="true" />;
  }

  if (devices.length === 0) {
    return (
      <div>
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Trusted devices</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          No devices are currently skipping two-factor verification. Check &ldquo;Trust this device&rdquo;
          next time you complete a code from your authenticator app to add one.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Trusted devices</p>
        <button
          type="button"
          onClick={revokeAll}
          disabled={busyId !== null}
          className="text-sm font-medium text-red-600 hover:underline disabled:opacity-50 dark:text-red-400"
        >
          {busyId === "all" ? "Revoking..." : "Revoke all"}
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {devices.map((device) => (
          <li
            key={device.id}
            className="flex items-center justify-between rounded-lg border border-surface-border p-2.5 text-sm"
          >
            <span className="text-zinc-700 dark:text-zinc-300">
              {describeUserAgent(device.user_agent)}
              {device.isCurrentDevice && (
                <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-content">
                  This device
                </span>
              )}
              <span className="block text-xs text-zinc-500 dark:text-zinc-500">
                Trusted until {new Date(device.expires_at).toLocaleDateString()}
              </span>
            </span>
            <button
              type="button"
              onClick={() => revoke(device.id)}
              disabled={busyId !== null}
              className="shrink-0 text-xs font-medium text-red-600 hover:underline disabled:opacity-50 dark:text-red-400"
            >
              {busyId === device.id ? "Revoking..." : "Revoke"}
            </button>
          </li>
        ))}
      </ul>
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
