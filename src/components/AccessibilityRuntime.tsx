"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  A11Y_FEATURES,
  applyA11yToDom,
  getA11ySettings,
  subscribeA11y,
  type A11ySettings,
} from "@/lib/accessibility";

// Mounted once near the root. Owns every accessibility side-effect that
// needs live JS rather than a pure CSS class: the reading guide/mask,
// cursor highlight, the keyboard-nav banner, image alt-text labels, and
// screen-reader change announcements. Everything else is applied via
// applyA11yToDom (classes/filter/font-size/zoom), which also runs from the
// pre-hydration init script in layout.tsx so there's no flash on load.
export default function AccessibilityRuntime() {
  const settings = useSyncExternalStore<A11ySettings>(subscribeA11y, getA11ySettings, getA11ySettings);
  const guideRef = useRef<HTMLDivElement>(null);
  const maskTopRef = useRef<HTMLDivElement>(null);
  const maskBottomRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const announceRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<A11ySettings>(settings);

  useEffect(() => {
    applyA11yToDom(settings);
  }, [settings]);

  useEffect(() => {
    const prev = prevRef.current;
    if (settings.liveAnnouncements) {
      const changed = A11Y_FEATURES.find((f) => prev[f.key] !== settings[f.key]);
      if (changed && announceRef.current) {
        announceRef.current.textContent = `${changed.label} ${settings[changed.key] ? "enabled" : "disabled"}`;
      }
    }
    prevRef.current = settings;
  }, [settings]);

  useEffect(() => {
    const needsMouse = settings.readingGuide || settings.readingMask || settings.cursorHighlight;
    if (!needsMouse) return;

    function handleMove(e: MouseEvent) {
      if (guideRef.current) guideRef.current.style.top = `${e.clientY - 18}px`;
      if (haloRef.current) {
        haloRef.current.style.left = `${e.clientX}px`;
        haloRef.current.style.top = `${e.clientY}px`;
      }
      if (maskTopRef.current) maskTopRef.current.style.height = `${Math.max(e.clientY - 60, 0)}px`;
      if (maskBottomRef.current) maskBottomRef.current.style.top = `${e.clientY + 60}px`;
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [settings.readingGuide, settings.readingMask, settings.cursorHighlight]);

  useEffect(() => {
    if (!settings.showAltLabels) return;
    const labels: HTMLElement[] = [];
    document.querySelectorAll<HTMLImageElement>("img[alt]:not([alt=''])").forEach((img) => {
      const label = document.createElement("span");
      label.className = "a11y-alt-label";
      label.textContent = `Image: ${img.alt}`;
      img.insertAdjacentElement("afterend", label);
      labels.push(label);
    });
    return () => labels.forEach((el) => el.remove());
  }, [settings.showAltLabels]);

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id="a11y-protanopia">
            <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0" />
          </filter>
          <filter id="a11y-deuteranopia">
            <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" />
          </filter>
          <filter id="a11y-tritanopia">
            <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0" />
          </filter>
        </defs>
      </svg>
      {settings.readingGuide && (
        <div ref={guideRef} className="a11y-reading-guide-bar" style={{ top: "50%" }} aria-hidden="true" />
      )}
      {settings.readingMask && (
        <>
          <div ref={maskTopRef} className="a11y-reading-mask-panel" style={{ top: 0, height: "40%" }} aria-hidden="true" />
          <div ref={maskBottomRef} className="a11y-reading-mask-panel" style={{ top: "60%", bottom: 0 }} aria-hidden="true" />
        </>
      )}
      {settings.cursorHighlight && <div ref={haloRef} className="a11y-cursor-halo" aria-hidden="true" />}
      {settings.keyboardNavHelper && (
        <div className="a11y-keyboard-nav-banner" role="status">
          Keyboard navigation: Tab to move, Enter/Space to activate, Esc to close dialogs.
        </div>
      )}
      <div ref={announceRef} aria-live="polite" className="sr-only" />
    </>
  );
}
