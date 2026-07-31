"use client";

import { useCallback, useState } from "react";
import type { ToolConfig } from "@/lib/tools/types";
import TurnstileWidget from "./TurnstileWidget";

// Only the serializable fields the form needs — passing the full ToolConfig
// (which includes the buildPrompt function) would fail client-component
// serialization.
export type ToolFormData = Pick<ToolConfig, "slug" | "name" | "inputFields">;

interface ToolFormProps {
  tool: ToolFormData;
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ToolForm({ tool }: ToolFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(tool.inputFields.map((field) => [field.name, field.options?.[0] ?? ""]))
  );
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [results, setResults] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleVerify = useCallback((token: string) => setTurnstileToken(token), []);

  const needsVerification = Boolean(TURNSTILE_SITE_KEY) && !turnstileToken;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch(`/api/generate/${tool.slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values, turnstileToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setResults(data.results);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleCopy(text: string, index: number) {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  }

  return (
    <div className="w-full max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        {tool.inputFields.map((field) => (
          <label
            key={field.name}
            className="flex flex-col gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            {field.label}
            {field.type === "select" ? (
              <select
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                value={values[field.name]}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
              >
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                required={field.required}
              />
            )}
          </label>
        ))}

        {TURNSTILE_SITE_KEY && (
          <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} onVerify={handleVerify} />
        )}

        <button
          type="submit"
          disabled={loading || needsVerification}
          className="mt-2 rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      </form>

      {results && results.length > 0 && (
        <ul className="mt-6 flex flex-col gap-2">
          {results.map((result, index) => (
            <li
              key={index}
              className="flex items-start justify-between gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="whitespace-pre-wrap text-zinc-900 dark:text-zinc-100">{result}</span>
              <button
                onClick={() => handleCopy(result, index)}
                className="sticky top-3 shrink-0 rounded-md border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
