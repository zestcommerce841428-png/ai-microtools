// Color themes for the settings panel. Each theme (other than "default")
// sets a fixed accent color pair that works on both light and dark
// backgrounds, so switching themes never fights the separate dark/light
// mode toggle. "default" is intentionally omitted from the CSS overrides
// in globals.css — it falls through to the original :root / :root.dark
// zinc invert button styling so existing users see zero visual change.
export interface Theme {
  id: string;
  name: string;
  swatch: string;
}

export const THEMES: Theme[] = [
  { id: "default", name: "Default", swatch: "#18181b" },
  { id: "ocean", name: "Ocean", swatch: "#2563eb" },
  { id: "sky", name: "Sky", swatch: "#0ea5e9" },
  { id: "azure", name: "Azure", swatch: "#0077ff" },
  { id: "sapphire", name: "Sapphire", swatch: "#1e3a8a" },
  { id: "cobalt", name: "Cobalt", swatch: "#1d4ed8" },
  { id: "indigo", name: "Indigo", swatch: "#4f46e5" },
  { id: "violet", name: "Violet", swatch: "#7c3aed" },
  { id: "grape", name: "Grape", swatch: "#9333ea" },
  { id: "orchid", name: "Orchid", swatch: "#c026d3" },
  { id: "lavender", name: "Lavender", swatch: "#a78bfa" },
  { id: "plum", name: "Plum", swatch: "#86198f" },
  { id: "rose", name: "Rose", swatch: "#e11d48" },
  { id: "ruby", name: "Ruby", swatch: "#be123c" },
  { id: "crimson", name: "Crimson", swatch: "#dc2626" },
  { id: "coral", name: "Coral", swatch: "#f43f5e" },
  { id: "cherry", name: "Cherry", swatch: "#d6336c" },
  { id: "sunset", name: "Sunset", swatch: "#f97316" },
  { id: "amber", name: "Amber", swatch: "#d97706" },
  { id: "honey", name: "Honey", swatch: "#eab308" },
  { id: "tangerine", name: "Tangerine", swatch: "#fb923c" },
  { id: "gold", name: "Gold", swatch: "#ca8a04" },
  { id: "forest", name: "Forest", swatch: "#15803d" },
  { id: "emerald", name: "Emerald", swatch: "#059669" },
  { id: "mint", name: "Mint", swatch: "#2dd4bf" },
  { id: "sage", name: "Sage", swatch: "#65a30d" },
  { id: "jade", name: "Jade", swatch: "#10b981" },
  { id: "lime", name: "Lime", swatch: "#84cc16" },
  { id: "teal", name: "Teal", swatch: "#0d9488" },
  { id: "cyan", name: "Cyan", swatch: "#06b6d4" },
  { id: "turquoise", name: "Turquoise", swatch: "#0e9f9f" },
  { id: "aqua", name: "Aqua", swatch: "#22d3ee" },
  { id: "slate", name: "Slate", swatch: "#475569" },
  { id: "graphite", name: "Graphite", swatch: "#3f3f46" },
  { id: "charcoal", name: "Charcoal", swatch: "#27272a" },
  { id: "sand", name: "Sand", swatch: "#d4a373" },
  { id: "clay", name: "Clay", swatch: "#b45309" },
  { id: "espresso", name: "Espresso", swatch: "#78350f" },
  { id: "midnight", name: "Midnight", swatch: "#1e293b" },
  { id: "steel", name: "Steel", swatch: "#64748b" },
  { id: "cyberpunk", name: "Cyberpunk", swatch: "#ec4899" },
  { id: "synthwave", name: "Synthwave", swatch: "#d946ef" },
  { id: "neon-green", name: "Neon Green", swatch: "#22c55e" },
  { id: "electric-blue", name: "Electric Blue", swatch: "#0066ff" },
  { id: "bubblegum", name: "Bubblegum", swatch: "#f472b6" },
  { id: "autumn", name: "Autumn", swatch: "#c2410c" },
  { id: "spring", name: "Spring", swatch: "#4ade80" },
  { id: "winter", name: "Winter", swatch: "#38bdf8" },
  { id: "copper", name: "Copper", swatch: "#c2703d" },
  { id: "denim", name: "Denim", swatch: "#3b6ea5" },
];
