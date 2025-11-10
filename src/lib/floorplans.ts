// src/lib/floorplans.ts
// Single source of truth for builders + plans.
// Swanson/DreamBuilt is intentionally REMOVED per your direction.
// Timeless Homes (Milagro Designs) only, for now.

export type BuilderKey = "timeless";

export type PlanKey = "brecknock" | "havensworth";

export type Status = "available" | "under-construction" | "sold";

export interface Builder {
  key: BuilderKey;
  slug: string;           // same as key for simplicity
  name: string;
  logo: string;           // public path to transparent PNG
  blurb?: string;
}

export interface Plan {
  key: PlanKey;
  slug: string;           // same as key
  builder: BuilderKey;
  title: string;
  approxSqft?: string;    // "≈ 2000 sq ft" etc
  status?: Status;
  cover: string;          // hero image path (public/)
  images: string[];       // up to 50+ images OK
  summary?: string;
  disclaimer?: string;
}

// ------------------------------------------------------------
// BUILDERS
// ------------------------------------------------------------
export const BUILDERS: Builder[] = [
  {
    key: "timeless",
    slug: "timeless",
    name: "Timeless Homes (Milagro Designs, LLC)",
    logo: "/images/logos/timeless-homes.png", // <-- use the transparent PNG you exported
    blurb:
      "Thoughtful floor plans and finishes across Northwest Arkansas. Built in Bella Vista exclusively.",
  },
];

// Used by the Navbar dropdown (kept, since your Navbar expects it)
export const BUILDERS_MENU = BUILDERS.map((b) => ({
  name: b.name,
  slug: b.slug,
  logo: b.logo,
}));

// Simple helpers
export const getBuilders = () => BUILDERS;

export const getBuilderBySlug = (slug: string) =>
  BUILDERS.find((b) => b.slug === slug);

// ------------------------------------------------------------
// PLANS (Timeless Homes)
// Note: images can be as many as you want (20–50+). Just drop
// them into /public/floorplans/timeless/<plan>/ and list them.
// ------------------------------------------------------------
const disclaimer =
  "Floorplan, finishes, and colors may vary by home at the builder’s discretion.";

export const PLANS: Plan[] = [
  {
    key: "brecknock",
    slug: "brecknock",
    builder: "timeless",
    title: "Brecknock",
    approxSqft: "≈ 2000 sq ft",
    status: "available",
    cover: "/floorplans/timeless/brecknock/1.jpg",
    images: [
      "/floorplans/timeless/brecknock/1.jpg",
      "/floorplans/timeless/brecknock/2.jpg",
      "/floorplans/timeless/brecknock/3.jpg",
      // add up to 50+ as you wish
    ],
    summary:
      "Comfortable, efficient layout with inviting common spaces and flexible bedrooms.",
    disclaimer,
  },
  {
    key: "havensworth",
    slug: "havensworth",
    builder: "timeless",
    title: "Havensworth",
    approxSqft: "≈ 2000 sq ft",
    status: "under-construction",
    cover: "/floorplans/timeless/havensworth/1.jpg",
    images: [
      "/floorplans/timeless/havensworth/1.jpg",
      "/floorplans/timeless/havensworth/2.jpg",
      "/floorplans/timeless/havensworth/3.jpg",
      // add more here
    ],
    summary:
      "Bright, open living with an easy flow to kitchen and dining—great for everyday life.",
    disclaimer,
  },
];

// ------------------------------------------------------------
// Queries your pages/components import
// ------------------------------------------------------------
export function getPlansByBuilder(builder: BuilderKey): Plan[] {
  return PLANS.filter((p) => p.builder === builder);
}

export function getPlan(
  builder: BuilderKey,
  plan: PlanKey
): Plan | undefined {
  return PLANS.find((p) => p.builder === builder && p.slug === plan);
}

// Types exported for convenience in routes
export type { Plan as FloorPlan };