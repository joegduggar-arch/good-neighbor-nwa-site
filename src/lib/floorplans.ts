// src/lib/floorplans.ts

/** Builder slugs we expose on the site */
export type BuilderKey = "timeless-homes"; // (Swanson removed)

/** Status buckets you may want to group by */
export type Status = "available" | "under-construction" | "sold";

/** One floorplan record */
export type Plan = {
  slug: string;           // url-safe id, e.g. "brecknock"
  name: string;           // display name
  builder: BuilderKey;    // which builder owns this plan
  sqft?: string;          // "≈ 2,000 sf" (free text)
  beds?: number;          // optional
  baths?: number;         // optional
  status?: Status;        // optional
  /** Put image paths in /public, e.g. /plans/brecknock/1.jpg */
  images: string[];       // any length (1..50+)
  /** Shown under the gallery if present */
  disclaimer?: string;
};

/** Small items used by the navbar dropdown */
export type BuilderMenuItem = {
  name: string;
  slug: BuilderKey;
  logo: string; // /logos/timeless-homes.png
};

export const BUILDERS_MENU: BuilderMenuItem[] = [
  { name: "Timeless Homes", slug: "timeless-homes", logo: "/logos/timeless-homes.png" },
];

/** In-memory plans (safe defaults; swap to your real images as you add them) */
const PLANS: Plan[] = [
  {
    slug: "brecknock",
    name: "Brecknock",
    builder: "timeless-homes",
    sqft: "≈ 2,000 sf",
    images: [
      "/plans/brecknock/1.jpg",
      "/plans/brecknock/2.jpg",
      "/plans/brecknock/3.jpg",
    ],
    disclaimer:
      "Floorplan, finishes, and dimensions are subject to change at builder’s discretion.",
  },
  {
    slug: "havensworth",
    name: "Havensworth",
    builder: "timeless-homes",
    sqft: "≈ 2,000 sf",
    images: [
      "/plans/havensworth/1.jpg",
      "/plans/havensworth/2.jpg",
      "/plans/havensworth/3.jpg",
    ],
    disclaimer:
      "Each build may vary in colors, fixtures, and materials at the builder’s discretion.",
  },
];

/** --- Query helpers (used by pages/components) --- */

export function getBuilders(): BuilderMenuItem[] {
  return BUILDERS_MENU;
}

export function getPlans(): Plan[] {
  return PLANS;
}

export function getPlansByBuilder(builder: BuilderKey): Plan[] {
  return PLANS.filter((p) => p.builder === builder);
}

export function getPlan(builder: BuilderKey, slug: string): Plan | undefined {
  return PLANS.find((p) => p.builder === builder && p.slug === slug);
}
