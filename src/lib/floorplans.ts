// src/lib/floorplans.ts

export type GalleryImage = {
  src: string;
  alt: string;
};

export type Plan = {
  slug: string;       // URL slug, e.g. "havens"
  builder: string;    // builder slug, e.g. "timeless-homes"
  name: string;       // display name, e.g. "The Havens"
  sqft?: number;
  beds?: number;
  baths?: number;
  disclaimer?: string;
  /**
   * Array of image paths (relative to /public).
   * You can safely put up to 50 photos here (or more).
   * Example: "/images/floorplans/timeless-homes/havens-01.jpg"
   */
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
  // This is the logo used on the homepage + navbar dropdown
  logo: "/images/logos/timeless.png",
  description:
    "Browse floorplans and available homes built by Timeless Homes.",
  plans: [
    {
      slug: "havens",
      builder: "timeless-homes",
      name: "The Havens",
      // Fill these in once you know them:
      // sqft: 0,
      // beds: 0,
      // baths: 0,
      disclaimer:
        "Renderings and specifications for The Havens are for illustration only and may vary slightly from the final build.",
      // When you have photos, add up to ~50 paths like:
      // images: [
      //   "/images/floorplans/timeless-homes/havens-01.jpg",
      //   "/images/floorplans/timeless-homes/havens-02.jpg",
      //   ...
      // ],
      images: [],
    },
    {
      slug: "brecknock",
      builder: "timeless-homes",
      name: "The Brecknock",
      // sqft,
      // beds,
      // baths,
      disclaimer:
        "Renderings and specifications for The Brecknock are for illustration only and may vary slightly from the final build.",
      // Add up to 50+ photos here when ready:
      // images: [
      //   "/images/floorplans/timeless-homes/brecknock-01.jpg",
      //   "/images/floorplans/timeless-homes/brecknock-02.jpg",
      //   ...
      // ],
      images: [],
    },
  ],
};

/* -----------------------------------
   SWANSON PROPERTIES (INFORMATION ONLY)
   ----------------------------------- */

export const SWANSON_PROPERTIES: Builder = {
  slug: "swanson-properties",
  name: "Swanson Properties",
  logo: "/images/logos/swanson.png",
  description:
    "Floorplans and builds for Swanson Properties are not available online. Please contact Joe directly for more information.",
  plans: [],
};

/* ----------------------------
   BUILDERS MENU FOR NAVBAR / HOMEPAGE
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