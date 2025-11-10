// src/lib/floorplans.ts

export type BuilderKey = "timeless";
export type Status = "sold" | "under-construction" | "coming-soon";
export type PlanKey = "brecknock" | "havensworth";

export interface Plan {
  builder: BuilderKey;
  key: PlanKey;
  name: string;
  sqft: string;
  status: Status;
  hero: string;           // public/ path (e.g. /images/...)
  gallery: string[];      // up to 50+ images supported by the page
  blurb: string;
}

export interface Builder {
  key: BuilderKey;
  name: string;
  slug: string;           // used in URLs
  logo: string;           // public/ path (png/svg)
  summary: string;
  disclaimer: string;
}

/**
 * BUILDERS
 */
export const BUILDERS: Builder[] = [
  {
    key: "timeless",
    name: "Timeless Homes (Milagro Designs, LLC)",
    slug: "milagro-designs",
    logo: "/images/logos/timeless-homes.png",
    summary:
      "Timeless Homes builds thoughtfully planned homes across NWA with clean detailing and functional layouts.",
    disclaimer:
      "Note: Floorplan, finishes, and specifications may vary per home at the builder’s discretion. Renderings, photos, and descriptions are for marketing reference only."
  }
];

/**
 * PLANS (Timeless only for now)
 */
const timelessPlans: Plan[] = [
  {
    builder: "timeless",
    key: "brecknock",
    name: "Brecknock",
    sqft: "≈ 2,000 sq ft",
    status: "under-construction",
    hero: "/images/floorplans/timeless/brecknock/hero.jpg",
    gallery: [
      "/images/floorplans/timeless/brecknock/hero.jpg",
      "/images/floorplans/timeless/brecknock/1.jpg",
      "/images/floorplans/timeless/brecknock/2.jpg",
      "/images/floorplans/timeless/brecknock/3.jpg",
    ],
    blurb:
      "An efficient, bright plan with open living, great kitchen flow, and generous bedroom sizes."
  },
  {
    builder: "timeless",
    key: "havensworth",
    name: "Havensworth",
    sqft: "≈ 2,000 sq ft",
    status: "coming-soon",
    hero: "/images/floorplans/timeless/havensworth/hero.jpg",
    gallery: [
      "/images/floorplans/timeless/havensworth/hero.jpg",
      "/images/floorplans/timeless/havensworth/1.jpg",
      "/images/floorplans/timeless/havensworth/2.jpg",
      "/images/floorplans/timeless/havensworth/3.jpg",
    ],
    blurb:
      "Flexible living with inviting common areas and smart storage—ideal for everyday life in Bella Vista."
  }
];

const ALL_PLANS: Plan[] = [...timelessPlans];

/**
 * Helper lookups
 */
export function getBuilderBySlug(slug: string): Builder | undefined {
  return BUILDERS.find(b => b.slug === slug);
}

export function getPlan(builder: BuilderKey, key: PlanKey): Plan | undefined {
  return ALL_PLANS.find(p => p.builder === builder && p.key === key);
}

export function byStatus(builder: BuilderKey): Record<Status, Plan[]> {
  const filtered = ALL_PLANS.filter(p => p.builder === builder);
  return {
    "sold": filtered.filter(p => p.status === "sold"),
    "under-construction": filtered.filter(p => p.status === "under-construction"),
    "coming-soon": filtered.filter(p => p.status === "coming-soon"),
  };
}

/**
 * Navbar menu convenience
 */
export const BUILDERS_MENU = BUILDERS.map(b => ({
  name: b.name.replace(" (Milagro Designs, LLC)", ""),
  slug: b.slug,
  logo: b.logo,
}));