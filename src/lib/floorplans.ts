// src/lib/floorplans.ts

export type BuilderKey = "dreambuilt" | "timeless";

export type PlanKey =
  | "brecknock"
  | "havensworth";

export type Status = "available" | "under-construction" | "sold";

export interface Builder {
  key: BuilderKey;
  slug: string;
  name: string;
  logo: string; // path in /public
  blurb: string;
  href: string;
}

export interface Plan {
  key: PlanKey;
  slug: string;
  builder: BuilderKey;
  name: string;
  sqft: string;
  beds?: string;
  baths?: string;
  status: Status;
  shortDescription: string;
  images: string[]; // paths in /public/floorplans/...
  disclaimer?: string;
}

/**
 * Builders we represent
 */
export const BUILDERS: Builder[] = [
  {
    key: "dreambuilt",
    slug: "dreambuilt-custom-homes",
    name: "Swanson Properties – Dreambuilt Custom Homes",
    logo: "/logos/swanson.png",
    blurb:
      "Thoughtful plans, quality construction, and buyer-friendly details across Northwest Arkansas.",
    href: "/builders/dreambuilt-custom-homes",
  },
  {
    key: "timeless",
    slug: "timeless-homes",
    name: "Timeless Homes – Milagro Designs, LLC",
    logo: "/logos/timeless.png",
    blurb:
      "Classic curb appeal and efficient layouts around ±2000 sq ft — ideal for comfortable everyday living.",
    href: "/builders/timeless-homes",
  },
];

/**
 * Slimmed-down builder info for the navbar dropdown
 */
export const BUILDERS_MENU = BUILDERS.map((b) => ({
  slug: b.slug,
  name: b.name,
  logo: b.logo,
  href: b.href,
}));

/**
 * All floorplans for both builders
 * (You can adjust beds/baths/sqft/status later without breaking imports.)
 */
export const PLANS: Plan[] = [
  // Dreambuilt / Swanson Properties – 8 plans
  ,

  // Timeless Homes – Milagro Designs – 2 plans (±2000 sq ft)
  {
    key: "brecknock",
    slug: "brecknock",
    builder: "timeless",
    name: "Brecknock",
    sqft: "±2000 sq ft",
    beds: "3",
    baths: "2",
    status: "available",
    shortDescription:
      "Classic front elevation with a comfortable, easy-to-live-in layout around 2000 sq ft.",
    images: [],
  },
  {
    key: "havensworth",
    slug: "havensworth",
    builder: "timeless",
    name: "Havensworth",
    sqft: "±2000 sq ft",
    beds: "3",
    baths: "2",
    status: "available",
    shortDescription:
      "Warm, welcoming curb appeal with a practical interior footprint for everyday life.",
    images: [],
  },
];

/**
 * Helpers
 */

export function getBuilderBySlug(slug: string): Builder | undefined {
  return BUILDERS.find((b) => b.slug === slug);
}

export function getPlansByBuilder(builder: BuilderKey): Plan[] {
  return PLANS.filter((p) => p.builder === builder);
}

export function getPlan(builder: BuilderKey, slug: string): Plan | undefined {
  return PLANS.find((p) => p.builder === builder && p.slug === slug);
}

export function getPlansForRouteBuilder(
  builderSlug: string | string[] | undefined
): { builder: Builder | null; plans: Plan[] } {
  if (!builderSlug || Array.isArray(builderSlug)) {
    return { builder: null, plans: [] };
  }
  const builder = getBuilderBySlug(builderSlug) || null;
  if (!builder) return { builder: null, plans: [] };
  return { builder, plans: getPlansByBuilder(builder.key) };
}
