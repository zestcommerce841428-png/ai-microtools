// Accessibility settings: a persisted, shared store of real, functional
// display/accessibility toggles (not decorative placeholders). Most are
// applied purely via CSS classes on <html> for zero-flash init-script
// support; a handful (reading guide, reading mask, cursor highlight,
// keyboard-nav banner, alt-text labels, read-aloud) need live DOM/JS and
// are applied by <AccessibilityRuntime>.

export interface A11ySettings {
  // Text & reading
  fontSize: 100 | 110 | 120 | 130 | 150;
  lineHeight: "normal" | "relaxed" | "loose";
  letterSpacing: "normal" | "wide" | "wider";
  wordSpacing: "normal" | "wide" | "wider";
  dyslexiaFont: boolean;
  boldText: boolean;
  justifyText: boolean;
  paragraphSpacing: boolean;
  // Links & structure
  underlineLinks: boolean;
  highlightLinks: boolean;
  highlightHeadings: boolean;
  highlightControls: boolean;
  monochromeLinks: boolean;
  // Color & contrast (combined into one <html> filter)
  highContrast: boolean;
  invertColors: boolean;
  grayscale: boolean;
  lowSaturation: boolean;
  sepia: boolean;
  warmDim: boolean;
  protanopia: boolean;
  deuteranopia: boolean;
  tritanopia: boolean;
  // Cursor & focus
  bigCursor: boolean;
  cursorHighlight: boolean;
  enhancedFocus: boolean;
  persistentFocus: boolean;
  highlightActiveField: boolean;
  // Reading aids
  readingGuide: boolean;
  readingMask: boolean;
  // Motion & interaction
  stopAnimations: boolean;
  reduceHoverMotion: boolean;
  slowTransitions: boolean;
  bigClickTargets: boolean;
  keyboardNavHelper: boolean;
  // Content & layout
  hideImages: boolean;
  showAltLabels: boolean;
  leftAlignText: boolean;
  pageZoom: 100 | 125 | 150 | 175 | 200;
  wideLineLength: boolean;
  hideDecorative: boolean;
  reduceTransparency: boolean;
  // Forms
  largerFormLabels: boolean;
  largerIcons: boolean;
  highVisPlaceholders: boolean;
  // Screen reader
  liveAnnouncements: boolean;
}

export const DEFAULT_A11Y_SETTINGS: A11ySettings = {
  fontSize: 100,
  lineHeight: "normal",
  letterSpacing: "normal",
  wordSpacing: "normal",
  dyslexiaFont: false,
  boldText: false,
  justifyText: false,
  paragraphSpacing: false,
  underlineLinks: false,
  highlightLinks: false,
  highlightHeadings: false,
  highlightControls: false,
  monochromeLinks: false,
  highContrast: false,
  invertColors: false,
  grayscale: false,
  lowSaturation: false,
  sepia: false,
  warmDim: false,
  protanopia: false,
  deuteranopia: false,
  tritanopia: false,
  bigCursor: false,
  cursorHighlight: false,
  enhancedFocus: false,
  persistentFocus: false,
  highlightActiveField: false,
  readingGuide: false,
  readingMask: false,
  stopAnimations: false,
  reduceHoverMotion: false,
  slowTransitions: false,
  bigClickTargets: false,
  keyboardNavHelper: false,
  hideImages: false,
  showAltLabels: false,
  leftAlignText: false,
  pageZoom: 100,
  wideLineLength: false,
  hideDecorative: false,
  reduceTransparency: false,
  largerFormLabels: false,
  largerIcons: false,
  highVisPlaceholders: false,
  liveAnnouncements: false,
};

export const A11Y_STORAGE_KEY = "a11y-settings";
export const THEME_STORAGE_KEY = "theme-color";

type BoolKey = {
  [K in keyof A11ySettings]: A11ySettings[K] extends boolean ? K : never;
}[keyof A11ySettings];

export interface A11yFeature {
  key: BoolKey;
  label: string;
  description: string;
  category: string;
}

// Every entry here is a real, independently-functioning toggle wired up in
// globals.css and/or AccessibilityRuntime — not a placeholder checkbox.
export const A11Y_FEATURES: A11yFeature[] = [
  // Text & Reading
  { key: "dyslexiaFont", label: "Dyslexia-friendly font", description: "Switches body text to a rounder, more legible typeface with extra spacing.", category: "Text & Reading" },
  { key: "boldText", label: "Bold text", description: "Increases font weight across the page for easier scanning.", category: "Text & Reading" },
  { key: "justifyText", label: "Justify paragraphs", description: "Aligns paragraph text evenly on both edges.", category: "Text & Reading" },
  { key: "paragraphSpacing", label: "Extra paragraph spacing", description: "Adds breathing room between lines and paragraphs.", category: "Text & Reading" },
  // Links & Structure
  { key: "underlineLinks", label: "Underline all links", description: "Makes links identifiable without relying on color alone.", category: "Links & Structure" },
  { key: "highlightLinks", label: "Highlight links", description: "Adds a visible background behind every link.", category: "Links & Structure" },
  { key: "highlightHeadings", label: "Highlight headings", description: "Outlines headings so page structure is easy to scan.", category: "Links & Structure" },
  { key: "highlightControls", label: "Highlight buttons & fields", description: "Outlines every button, input, and form control.", category: "Links & Structure" },
  { key: "monochromeLinks", label: "Monochrome links", description: "Removes link color, relying on underline instead — helpful for color-blind users.", category: "Links & Structure" },
  // Color & Contrast
  { key: "highContrast", label: "High contrast", description: "Boosts contrast between text and backgrounds.", category: "Color & Contrast" },
  { key: "invertColors", label: "Invert colors", description: "Inverts the page palette (images stay natural).", category: "Color & Contrast" },
  { key: "grayscale", label: "Grayscale", description: "Removes all color from the page.", category: "Color & Contrast" },
  { key: "lowSaturation", label: "Low saturation", description: "Mutes color intensity across the page.", category: "Color & Contrast" },
  { key: "sepia", label: "Sepia tone", description: "Applies a warm, paper-like tone for reading comfort.", category: "Color & Contrast" },
  { key: "warmDim", label: "Warm dim (night reading)", description: "Dims brightness and warms the color temperature.", category: "Color & Contrast" },
  { key: "protanopia", label: "Protanopia filter", description: "Adjusts colors for red-blindness.", category: "Color & Contrast" },
  { key: "deuteranopia", label: "Deuteranopia filter", description: "Adjusts colors for green-blindness.", category: "Color & Contrast" },
  { key: "tritanopia", label: "Tritanopia filter", description: "Adjusts colors for blue-blindness.", category: "Color & Contrast" },
  // Cursor & Focus
  { key: "bigCursor", label: "Big cursor", description: "Enlarges the mouse cursor for visibility.", category: "Cursor & Focus" },
  { key: "cursorHighlight", label: "Cursor highlight", description: "Shows a soft glow that follows your cursor.", category: "Cursor & Focus" },
  { key: "enhancedFocus", label: "Enhanced focus outline", description: "Draws a bold, high-visibility ring around the focused element.", category: "Cursor & Focus" },
  { key: "persistentFocus", label: "Persistent focus outline", description: "Keeps the focus ring visible even after a mouse click.", category: "Cursor & Focus" },
  { key: "highlightActiveField", label: "Highlight active field", description: "Tints the background of the form field you're typing in.", category: "Cursor & Focus" },
  // Reading Aids
  { key: "readingGuide", label: "Reading guide bar", description: "A horizontal bar that follows your cursor to help track lines.", category: "Reading Aids" },
  { key: "readingMask", label: "Reading mask", description: "Dims everything except a band around your cursor.", category: "Reading Aids" },
  // Motion & Interaction
  { key: "stopAnimations", label: "Stop animations", description: "Disables all CSS animations and transitions.", category: "Motion & Interaction" },
  { key: "reduceHoverMotion", label: "Reduce hover motion", description: "Removes hover transition effects on buttons and links.", category: "Motion & Interaction" },
  { key: "slowTransitions", label: "Slow down transitions", description: "Slows remaining transitions so changes are easier to follow.", category: "Motion & Interaction" },
  { key: "bigClickTargets", label: "Bigger click targets", description: "Enlarges buttons, links, and inputs to at least 44x44px.", category: "Motion & Interaction" },
  { key: "keyboardNavHelper", label: "Keyboard navigation helper", description: "Shows an on-screen reminder of keyboard shortcuts while tabbing.", category: "Motion & Interaction" },
  // Content & Layout
  { key: "hideImages", label: "Hide images", description: "Hides decorative and photographic images.", category: "Content & Layout" },
  { key: "showAltLabels", label: "Show image alt labels", description: "Displays each image's alt text as a visible caption.", category: "Content & Layout" },
  { key: "leftAlignText", label: "Left-align all text", description: "Forces left alignment, overriding centered layouts.", category: "Content & Layout" },
  { key: "wideLineLength", label: "Comfortable line length", description: "Caps text width for easier line tracking.", category: "Content & Layout" },
  { key: "hideDecorative", label: "Hide decorative effects", description: "Removes shadows, gradients, and blur for a flatter, calmer UI.", category: "Content & Layout" },
  { key: "reduceTransparency", label: "Reduce transparency", description: "Makes translucent panels fully opaque.", category: "Content & Layout" },
  // Forms
  { key: "largerFormLabels", label: "Larger form labels", description: "Increases the size and weight of form field labels.", category: "Forms" },
  { key: "largerIcons", label: "Larger icons", description: "Scales up interface icons for visibility.", category: "Forms" },
  { key: "highVisPlaceholders", label: "High-visibility placeholders", description: "Darkens placeholder text in inputs so it's easier to read.", category: "Forms" },
  // Screen Reader
  { key: "liveAnnouncements", label: "Live announcements", description: "Announces setting changes to screen readers via a live region.", category: "Screen Reader" },
];

export interface A11yProfile {
  id: string;
  name: string;
  description: string;
  apply: Partial<A11ySettings>;
}

// One-click bundles — a common, real pattern in professional accessibility
// toolbars (seizure-safe, low-vision, cognitive, etc. profiles).
export const A11Y_PROFILES: A11yProfile[] = [
  {
    id: "seizure-safe",
    name: "Seizure-safe profile",
    description: "Stops animations and motion, and reduces saturation to minimize flashing/flicker risk.",
    apply: { stopAnimations: true, reduceHoverMotion: true, lowSaturation: true },
  },
  {
    id: "low-vision",
    name: "Low-vision profile",
    description: "Larger text, high contrast, a bigger cursor, and bolder focus outlines.",
    apply: { fontSize: 130, highContrast: true, enhancedFocus: true, bigCursor: true, largerIcons: true },
  },
  {
    id: "adhd-friendly",
    name: "ADHD-friendly profile",
    description: "Removes decorative clutter and transparency, and adds a reading guide.",
    apply: { hideDecorative: true, reduceTransparency: true, readingGuide: true, wideLineLength: true, stopAnimations: true },
  },
  {
    id: "cognitive-reading",
    name: "Cognitive & reading profile",
    description: "Dyslexia-friendly font, relaxed spacing, and a comfortable reading width.",
    apply: { dyslexiaFont: true, lineHeight: "relaxed", wordSpacing: "wide", wideLineLength: true, paragraphSpacing: true },
  },
  {
    id: "motor-keyboard",
    name: "Motor & keyboard profile",
    description: "Bigger click targets, persistent focus rings, and a keyboard navigation helper.",
    apply: { bigClickTargets: true, keyboardNavHelper: true, persistentFocus: true, enhancedFocus: true, reduceHoverMotion: true },
  },
];

function isBrowser() {
  return typeof window !== "undefined";
}

function loadSettings(): A11ySettings {
  if (!isBrowser()) return DEFAULT_A11Y_SETTINGS;
  try {
    const raw = localStorage.getItem(A11Y_STORAGE_KEY);
    if (!raw) return DEFAULT_A11Y_SETTINGS;
    return { ...DEFAULT_A11Y_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_A11Y_SETTINGS;
  }
}

let settings: A11ySettings = DEFAULT_A11Y_SETTINGS;
let hydrated = false;
const listeners = new Set<() => void>();

function ensureHydrated() {
  if (!hydrated && isBrowser()) {
    settings = loadSettings();
    hydrated = true;
  }
}

export function getA11ySettings(): A11ySettings {
  ensureHydrated();
  return settings;
}

export function subscribeA11y(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function persist() {
  if (!isBrowser()) return;
  localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(settings));
}

export function updateA11ySettings(patch: Partial<A11ySettings>) {
  ensureHydrated();
  settings = { ...settings, ...patch };
  persist();
  listeners.forEach((l) => l());
}

export function applyA11yProfile(profile: A11yProfile) {
  updateA11ySettings(profile.apply);
}

export function resetA11ySettings() {
  ensureHydrated();
  settings = { ...DEFAULT_A11Y_SETTINGS };
  persist();
  listeners.forEach((l) => l());
}

// Class names correspond 1:1 to selectors defined in globals.css.
const BOOL_CLASS_MAP: Record<string, string> = {
  dyslexiaFont: "a11y-dyslexia-font",
  boldText: "a11y-bold-text",
  justifyText: "a11y-justify",
  paragraphSpacing: "a11y-para-spacing",
  underlineLinks: "a11y-underline-links",
  highlightLinks: "a11y-highlight-links",
  highlightHeadings: "a11y-highlight-headings",
  highlightControls: "a11y-highlight-controls",
  monochromeLinks: "a11y-monochrome-links",
  bigCursor: "a11y-big-cursor",
  enhancedFocus: "a11y-enhanced-focus",
  persistentFocus: "a11y-persistent-focus",
  highlightActiveField: "a11y-highlight-active-field",
  stopAnimations: "a11y-stop-animations",
  reduceHoverMotion: "a11y-reduce-hover",
  slowTransitions: "a11y-slow-transitions",
  bigClickTargets: "a11y-big-targets",
  hideImages: "a11y-hide-images",
  showAltLabels: "a11y-show-alt-labels",
  leftAlignText: "a11y-left-align",
  wideLineLength: "a11y-line-length",
  hideDecorative: "a11y-hide-decorative",
  reduceTransparency: "a11y-reduce-transparency",
  largerFormLabels: "a11y-large-labels",
  largerIcons: "a11y-large-icons",
  highVisPlaceholders: "a11y-hv-placeholders",
};

const STEP_CLASS_MAP: Record<string, Record<string, string>> = {
  lineHeight: { relaxed: "a11y-line-relaxed", loose: "a11y-line-loose" },
  letterSpacing: { wide: "a11y-tracking-wide", wider: "a11y-tracking-wider" },
  wordSpacing: { wide: "a11y-word-wide", wider: "a11y-word-wider" },
};

const ALL_STEP_CLASSES = Object.values(STEP_CLASS_MAP).flatMap((m) => Object.values(m));

export function computeFilter(s: A11ySettings): string {
  const parts: string[] = [];
  if (s.protanopia) parts.push("url(#a11y-protanopia)");
  if (s.deuteranopia) parts.push("url(#a11y-deuteranopia)");
  if (s.tritanopia) parts.push("url(#a11y-tritanopia)");
  if (s.grayscale) parts.push("grayscale(1)");
  if (s.invertColors) parts.push("invert(1) hue-rotate(180deg)");
  if (s.lowSaturation) parts.push("saturate(0.45)");
  if (s.sepia) parts.push("sepia(0.55)");
  if (s.warmDim) parts.push("brightness(0.92) sepia(0.12)");
  if (s.highContrast) parts.push("contrast(1.35)");
  return parts.join(" ");
}

// Applies every CSS-class/filter/font-size/zoom driven setting to <html>.
// Called by AccessibilityRuntime on every change, and mirrored (in compact
// inline form) by the pre-hydration init script in layout.tsx.
export function applyA11yToDom(s: A11ySettings) {
  if (!isBrowser()) return;
  const root = document.documentElement;

  for (const [key, className] of Object.entries(BOOL_CLASS_MAP)) {
    root.classList.toggle(className, Boolean(s[key as keyof A11ySettings]));
  }

  root.classList.remove(...ALL_STEP_CLASSES);
  for (const [key, valueMap] of Object.entries(STEP_CLASS_MAP)) {
    const value = s[key as keyof A11ySettings] as string;
    const className = valueMap[value];
    if (className) root.classList.add(className);
  }

  root.style.fontSize = s.fontSize !== 100 ? `${s.fontSize}%` : "";
  root.style.setProperty("zoom", s.pageZoom !== 100 ? `${s.pageZoom}%` : "");

  // Applied to the #a11y-filter-scope wrapper, not <html>/<body>: filter
  // creates a new containing block for position:fixed descendants, which
  // would otherwise trap the settings modal and overlay widgets inside the
  // filtered element instead of the viewport.
  const filterTarget = document.getElementById("a11y-filter-scope") ?? root;
  filterTarget.style.filter = computeFilter(s) || "";
}
