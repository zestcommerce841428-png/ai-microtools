"use client";

import { useEffect, useState } from "react";
import { getA11ySettings } from "@/lib/accessibility";

const SHOW_UP_THRESHOLD = 300;
const MIN_SCROLLABLE_HEIGHT = 400;

function isScrollable() {
  return document.documentElement.scrollHeight - window.innerHeight > MIN_SCROLLABLE_HEIGHT;
}

// Rendered as a sibling of #a11y-filter-scope (see layout.tsx), not inside
// it — same reason as AccessibilityRuntime's overlays: an active color
// filter there would trap this fixed-position button instead of pinning it
// to the viewport.
export default function ScrollToTopButton() {
  const [scrollable, setScrollable] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setScrollable(isScrollable());
      setAtTop(window.scrollY < SHOW_UP_THRESHOLD);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (!scrollable) return null;

  function scroll() {
    const behavior = getA11ySettings().stopAnimations ? "auto" : "smooth";
    window.scrollTo({ top: atTop ? document.documentElement.scrollHeight : 0, behavior });
  }

  return (
    <button
      type="button"
      onClick={scroll}
      aria-label={atTop ? "Scroll to bottom" : "Scroll to top"}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-content shadow-lg transition hover:bg-primary-hover"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-5 w-5 transition-transform ${atTop ? "" : "rotate-180"}`}
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
