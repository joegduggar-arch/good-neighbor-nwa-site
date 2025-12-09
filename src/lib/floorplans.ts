// src/lib/floorplans.ts

export type GalleryImage = {
  src: string;
  alt: string;
};

export type Plan = {
  slug: string;
  builder: string;
  name: string;
  sqft?: number;
  beds?: number;
  baths?: number;
  disclaimer?: string;
  images?: string[];
};

export type Builder = {
  slug: string;
  name: string;
  logo: string;
  description: string;
  plans: Plan[];
};

/* -------------------------
   TIMELESS HOMES (ACTIVE)
   ------------------------- */

export const TIMELESS_HOMES: Builder = {
  slug: "timeless-homes",
  name: "Timeless Homes",
  logo: "/images/logos/timeless.png",
  description:
    "Browse floorplans and available homes built by Timeless Homes.",
  plans: [
    {
      slug: "plan-01",
      builder: "timeless-homes",
      name: "Plan 01",
      sqft: 1850,
      beds: 3,
      baths: 2,
      images: [], // Add images in /public/timeless/plan-01
    },
    {
      slug: "plan-02",
      builder: "timeless-homes",
      name: "Plan 02",
      sqft: 2200,
      beds: 4,
      baths: 2.5,
      images: [],
    },
  ],
};

/* -----------------------------------
   SWANSON PROPERTIES / DREAM BUILT
   ----------------------------------- */

export const SWANSON_PROPERTIES: Builder = {
  // Use the slug that matches your existing page:
  // src/app/builders/dream-built-homes/page.tsx  ->  /builders/dream-built-homes
  slug: "dream-built-homes",
  name: "Swanson Properties",
  logo: "/images/logos/dreambuilt.png",
  description:
    "Floorplans and builds for Swanson Properties are not available online. Please contact Joe directly for more information.",
  plans: [],
};

/* ----------------------------
   BUILDERS MENU FOR NAVBAR
   ---------------------------- */

export const BUILDERS = [TIMELESS_HOMES, SWANSON_PROPERTIES];

export const BUILDERS_MENU = BUILDERS.map((b) => ({
  name: b.name,
  slug: b.slug,
  logo: b.logo,
}));

/* ----------------------------
   LOOKUP HELPERS
   ---------------------------- */

export function getBuilder(slug: string): Builder | undefined {
  return BUILDERS.find((b) => b.slug === slug);
}

export function getPlansByBuilder(slug: string): Plan[] {
  return getBuilder(slug)?.plans ?? [];
}

export function getPlan(
  builderSlug: string,
  planSlug: string
): Plan | undefined {
  return getBuilder(builderSlug)?.plans.find((p) => p.slug === planSlug);
}