// src/lib/floorplans.ts
// Central data + helpers for builders & floorplans

// ---------- Types ----------
export type Status = "available" | "under-construction" | "sold";

export type Builder = {
  name: string;
  slug: "milagro-designs" | "swanson-properties";
  logo: string;            // /public path
  active: boolean;         // if false, we hide from menus
  blurb: string;
};

export type Plan = {
  builderSlug: Builder["slug"];
  planSlug: string;
  name: string;
  sqft: string;
  status: Status;
  cover: string;           // main image
  gallery: string[];       // additional images
  short: string;           // one-liner
};

// ---------- Builders ----------
export const BUILDERS: Builder[] = [
  {
    name: "Timeless Homes (Milagro Designs)",
    slug: "milagro-designs",
    logo: "/images/logos/timeless-homes.png", // make sure this file exists in /public/images/logos
    active: true,
    blurb:
      "Quality homes throughout Bella Vista with thoughtful layouts and clean detailing.",
  },
  {
    // Kept in data layer, but hidden from UI per your request
    name: "Swanson Properties",
    slug: "swanson-properties",
    logo: "/images/logos/swanson-properties.png",
    active: false,
    blurb:
      "Represented by Good Neighbor Realty. Contact us directly for floorplan details.",
  },
];

// This is what the Navbar and menus should import
export const BUILDERS_MENU = BUILDERS.filter((b) => b.active).map((b) => ({
  name: b.name,
  slug: b.slug,
  logo: b.logo,
}));

// Helper to fetch a builder by slug (used on builder pages)
export function getBuilderBySlug(slug: string): Builder | undefined {
  return BUILDERS.find((b) => b.slug === slug);
}

// ---------- Plans (only active builder plans shown) ----------
export const PLANS: Plan[] = [
  // Timeless Homes sample plans (≈2000 sqft per your note)
  {
    builderSlug: "milagro-designs",
    planSlug: "brecknock",
    name: "Brecknock",
    sqft: "≈ 2,000 sqft",
    status: "available",
    cover: "/images/placeholders/featured-1.jpg",
    gallery: [
      "/images/placeholders/interior-living-2.jpg",
      "/images/placeholders/interior-kitchen-2.jpg",
      "/images/placeholders/interior-fireplace-2.jpg",
    ],
    short:
      "A balanced, livable layout with bright social spaces and great flow.",
  },
  {
    builderSlug: "milagro-designs",
    planSlug: "havensworth",
    name: "Havensworth",
    sqft: "≈ 2,000 sqft",
    status: "under-construction",
    cover: "/images/placeholders/featured-2.jpg",
    gallery: [
      "/images/placeholders/foyer.jpg",
      "/images/placeholders/interior-dining.jpg",
      "/images/placeholders/interior-living-2.jpg",
    ],
    short:
      "Comfort-forward design with clean detailing and functional storage.",
  },

  // If later you want to re-enable Swanson plans, add them here and flip active:true above.
];

// ---------- Helpers used around the app ----------

// Filter plans by status
export function byStatus(status: Status): Plan[] {
  return PLANS.filter((p) => p.status === status);
}

// All plans for a specific builder
export function getPlansByBuilder(builderSlug: Builder["slug"]): Plan[] {
  return PLANS.filter((p) => p.builderSlug === builderSlug);
}

// Find a single plan by builder + plan slug (used by dynamic pages)
export function getPlan(
  builderSlug: Builder["slug"],
  planSlug: string
): Plan | undefined {
  return PLANS.find(
    (p) => p.builderSlug === builderSlug && p.planSlug === planSlug
  );
}
