// src/lib/floorplans.ts

export type BuilderKey = "timeless-homes";
export type PlanKey = "brecknock" | "havensworth";

export interface Plan {
  builder: BuilderKey;
  slug: PlanKey;
  name: string;
  sqft: string; // keep as string to support ranges like “~2000”
  hero: string; // path to a lead image in /public
  gallery: string[]; // any number of images in /public
  blurb: string;
}

export const BUILDERS: Record<BuilderKey, { name: string; logo?: string }> = {
  "timeless-homes": {
    name: "Timeless Homes",
    logo: "/images/logos/timeless-homes.png", // put your cleaned PNG here
  },
};

// ---- Plans (Timeless only) ----
export const PLANS: Plan[] = [
  {
    builder: "timeless-homes",
    slug: "brecknock",
    name: "Brecknock",
    sqft: "±2000 sq ft",
    hero: "/images/floorplans/timeless/brecknock/hero.jpg",
    gallery: [
      "/images/floorplans/timeless/brecknock/1.jpg",
      "/images/floorplans/timeless/brecknock/2.jpg",
      "/images/floorplans/timeless/brecknock/3.jpg",
      // add as many as you want (up to 50+ is fine)
    ],
    blurb:
      "A balanced, livable plan with open entertaining spaces, efficient bedrooms, and thoughtful storage.",
  },
  {
    builder: "timeless-homes",
    slug: "havensworth",
    name: "Havensworth",
    sqft: "±2000 sq ft",
    hero: "/images/floorplans/timeless/havensworth/hero.jpg",
    gallery: [
      "/images/floorplans/timeless/havensworth/1.jpg",
      "/images/floorplans/timeless/havensworth/2.jpg",
      "/images/floorplans/timeless/havensworth/3.jpg",
    ],
    blurb:
      "Light-filled living with flexible spaces and a kitchen-first layout — ideal for daily life and hosting.",
  },
];

// Helpers
export function getPlan(builder: BuilderKey, slug: PlanKey) {
  return PLANS.find((p) => p.builder === builder && p.slug === slug) || null;
}

export function getPlansByBuilder(builder: BuilderKey) {
  return PLANS.filter((p) => p.builder === builder);
}
