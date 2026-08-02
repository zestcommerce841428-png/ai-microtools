"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { THEMES } from "@/lib/themes";
import { BACKGROUND_THEMES } from "@/lib/backgroundThemes";
import {
  A11Y_FEATURES,
  A11Y_PROFILES,
  applyA11yProfile,
  getA11ySettings,
  resetA11ySettings,
  subscribeA11y,
  updateA11ySettings,
  THEME_STORAGE_KEY,
  BG_THEME_STORAGE_KEY,
  type A11ySettings,
} from "@/lib/accessibility";

function GearIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
function getThemeSnapshot() {
  return document.documentElement.getAttribute("data-theme") ?? "default";
}
function getThemeServerSnapshot() {
  return "default";
}

function subscribeBgTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-bg-theme"] });
  return () => observer.disconnect();
}
function getBgThemeSnapshot() {
  return document.documentElement.getAttribute("data-bg-theme") ?? "default";
}

const numberSteps = {
  fontSize: [100, 110, 120, 130, 150],
  pageZoom: [100, 125, 150, 175, 200],
} as const;
const enumSteps = {
  lineHeight: ["normal", "relaxed", "loose"],
  letterSpacing: ["normal", "wide", "wider"],
  wordSpacing: ["normal", "wide", "wider"],
} as const;

export default function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"themes" | "background" | "accessibility">("themes");
  const [speaking, setSpeaking] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const bgTheme = useSyncExternalStore(subscribeBgTheme, getBgThemeSnapshot, getThemeServerSnapshot);
  const settings = useSyncExternalStore<A11ySettings>(subscribeA11y, getA11ySettings, getA11ySettings);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    };
  }, []);

  function selectTheme(id: string) {
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem(THEME_STORAGE_KEY, id);
  }

  function selectBgTheme(id: string) {
    document.documentElement.setAttribute("data-bg-theme", id);
    localStorage.setItem(BG_THEME_STORAGE_KEY, id);
  }

  function toggleReadAloud() {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const main = document.querySelector("main");
    const text = (main?.textContent ?? document.body.textContent ?? "").trim();
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text.slice(0, 8000));
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  const categories = Array.from(new Set(A11Y_FEATURES.map((f) => f.category)));
  const tabClass = (active: boolean) =>
    `rounded-t-md px-3 py-2 text-sm font-medium transition ${
      active
        ? "border-b-2 border-primary-ring text-zinc-900 dark:text-zinc-50"
        : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
    }`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open display and accessibility settings"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
      >
        <GearIcon />
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-30 flex items-start justify-center overflow-y-auto bg-black/40 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="settings-panel-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-surface-border bg-surface shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-surface-border px-5 py-4">
              <h2 id="settings-panel-title" className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Display &amp; Accessibility
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close settings"
                className="rounded-md p-1 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex gap-1 border-b border-surface-border px-5">
              <button type="button" onClick={() => setTab("themes")} className={tabClass(tab === "themes")}>
                Accent ({THEMES.length})
              </button>
              <button type="button" onClick={() => setTab("background")} className={tabClass(tab === "background")}>
                Background ({BACKGROUND_THEMES.length})
              </button>
              <button type="button" onClick={() => setTab("accessibility")} className={tabClass(tab === "accessibility")}>
                Accessibility ({A11Y_FEATURES.length + 5})
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-5 py-4">
              {tab === "themes" ? (
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Pick an accent color — themes work independently of light/dark mode.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
                    {THEMES.map((t) => {
                      const active = theme === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => selectTheme(t.id)}
                          aria-pressed={active}
                          className={`flex flex-col items-center gap-1.5 rounded-lg border p-2 text-xs transition ${
                            active
                              ? "border-primary-ring ring-2 ring-primary-ring"
                              : "border-zinc-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500"
                          }`}
                        >
                          <span
                            className="h-6 w-6 rounded-full border border-black/10 dark:border-white/10"
                            style={{ backgroundColor: t.swatch }}
                          />
                          <span className="text-zinc-700 dark:text-zinc-300">{t.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : tab === "background" ? (
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Tint the page background and cards — works independently of the accent color and light/dark mode.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
                    {BACKGROUND_THEMES.map((t) => {
                      const active = bgTheme === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => selectBgTheme(t.id)}
                          aria-pressed={active}
                          className={`flex flex-col items-center gap-1.5 rounded-lg border p-2 text-xs transition ${
                            active
                              ? "border-primary-ring ring-2 ring-primary-ring"
                              : "border-zinc-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500"
                          }`}
                        >
                          <span
                            className="h-6 w-6 rounded-full border border-black/10 dark:border-white/10"
                            style={{ backgroundColor: t.swatch }}
                          />
                          <span className="text-zinc-700 dark:text-zinc-300">{t.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Quick profiles</h3>
                      <button
                        type="button"
                        onClick={() => resetA11ySettings()}
                        className="text-xs font-medium text-zinc-500 hover:text-primary"
                      >
                        Reset all
                      </button>
                    </div>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {A11Y_PROFILES.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => applyA11yProfile(p)}
                          className="rounded-lg border border-zinc-200 p-3 text-left text-xs transition hover:border-primary-ring dark:border-zinc-700"
                        >
                          <p className="font-medium text-zinc-900 dark:text-zinc-100">{p.name}</p>
                          <p className="mt-0.5 text-zinc-500 dark:text-zinc-400">{p.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Text size &amp; spacing</h3>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <label className="flex flex-col gap-1 text-xs">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Font size</span>
                        <select
                          value={settings.fontSize}
                          onChange={(e) => updateA11ySettings({ fontSize: Number(e.target.value) as A11ySettings["fontSize"] })}
                          className="rounded-md border border-zinc-300 bg-white px-2 py-1 dark:border-zinc-700 dark:bg-zinc-800"
                        >
                          {numberSteps.fontSize.map((v) => (
                            <option key={v} value={v}>{v}%</option>
                          ))}
                        </select>
                      </label>
                      <label className="flex flex-col gap-1 text-xs">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Line height</span>
                        <select
                          value={settings.lineHeight}
                          onChange={(e) => updateA11ySettings({ lineHeight: e.target.value as A11ySettings["lineHeight"] })}
                          className="rounded-md border border-zinc-300 bg-white px-2 py-1 dark:border-zinc-700 dark:bg-zinc-800"
                        >
                          {enumSteps.lineHeight.map((v) => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </label>
                      <label className="flex flex-col gap-1 text-xs">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Letter spacing</span>
                        <select
                          value={settings.letterSpacing}
                          onChange={(e) => updateA11ySettings({ letterSpacing: e.target.value as A11ySettings["letterSpacing"] })}
                          className="rounded-md border border-zinc-300 bg-white px-2 py-1 dark:border-zinc-700 dark:bg-zinc-800"
                        >
                          {enumSteps.letterSpacing.map((v) => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </label>
                      <label className="flex flex-col gap-1 text-xs">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Word spacing</span>
                        <select
                          value={settings.wordSpacing}
                          onChange={(e) => updateA11ySettings({ wordSpacing: e.target.value as A11ySettings["wordSpacing"] })}
                          className="rounded-md border border-zinc-300 bg-white px-2 py-1 dark:border-zinc-700 dark:bg-zinc-800"
                        >
                          {enumSteps.wordSpacing.map((v) => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </label>
                      <label className="flex flex-col gap-1 text-xs">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Page zoom</span>
                        <select
                          value={settings.pageZoom}
                          onChange={(e) => updateA11ySettings({ pageZoom: Number(e.target.value) as A11ySettings["pageZoom"] })}
                          className="rounded-md border border-zinc-300 bg-white px-2 py-1 dark:border-zinc-700 dark:bg-zinc-800"
                        >
                          {numberSteps.pageZoom.map((v) => (
                            <option key={v} value={v}>{v}%</option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Read this page aloud</h3>
                    <button
                      type="button"
                      onClick={toggleReadAloud}
                      className="mt-2 rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    >
                      {speaking ? "Stop reading" : "Start reading aloud"}
                    </button>
                  </div>

                  {categories.map((category) => (
                    <div key={category}>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{category}</h3>
                      <div className="mt-2 grid gap-2 sm:grid-cols-2">
                        {A11Y_FEATURES.filter((f) => f.category === category).map((f) => (
                          <label
                            key={f.key}
                            className="flex items-start gap-2 rounded-lg border border-zinc-200 p-2.5 text-xs dark:border-zinc-700"
                          >
                            <input
                              type="checkbox"
                              className="mt-0.5"
                              checked={settings[f.key]}
                              onChange={(e) => updateA11ySettings({ [f.key]: e.target.checked } as Partial<A11ySettings>)}
                            />
                            <span>
                              <span className="block font-medium text-zinc-900 dark:text-zinc-100">{f.label}</span>
                              <span className="block text-zinc-500 dark:text-zinc-400">{f.description}</span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
