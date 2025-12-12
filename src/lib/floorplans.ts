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
  images?: string[]; // URLs under /public
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
  // make sure this file exists under /public
  // e.g. public/timeless-homes/logo.png
  logo: "/timeless-homes/logo.png",
  description:
    "Quality new-construction homes with thoughtful layouts and attention to detail.",
  plans: [
    {
      slug: "havensworth",
      builder: "timeless-homes",
      name: "The Havensworth",
      sqft: 1950,
      beds: 3,
      baths: 2,
      disclaimer:
        "Renderings and specifications for The Havensworth are for illustration only and may vary slightly from the final build.",
      images: [
        "/timeless-homes/floorplans/havens-01.jpg",
        "/timeless-homes/floorplans/havens-02.jpg",
        "/timeless-homes/floorplans/havens-03.jpg",
        "/timeless-homes/floorplans/havens-04.jpg",
        "/timeless-homes/floorplans/havens-05.jpg",
        "/timeless-homes/floorplans/havens-06.jpg",
        "/timeless-homes/floorplans/havens-07.jpg",
        "/timeless-homes/floorplans/havens-08.jpg",
        "/timeless-homes/floorplans/havens-09.jpg",
      ],
    },
    {
      slug: "brecknock",
      builder: "timeless-homes",
      name: "The Brecknock",
      sqft: 2050,
      beds: 3,
      baths: 2,
      disclaimer:
        "Renderings and specifications for The Brecknock are for illustration only and may vary slightly from the final build.",
      images: [
        "/timeless-homes/floorplans/brecknock-19.jpg",
        "/timeless-homes/floorplans/brecknock-20.jpg",
        "/timeless-homes/floorplans/brecknock-21.jpg",
        "/timeless-homes/floorplans/brecknock-22.jpg",
        "/timeless-homes/floorplans/brecknock-23.jpg",
        "/timeless-homes/floorplans/brecknock-24.jpg",
        "/timeless-homes/floorplans/brecknock-25.jpg",
        "/timeless-homes/floorplans/brecknock-26.jpg",
        "/timeless-homes/floorplans/brecknock-27.jpg",
      ],
    },
  ],
};

/* -----------------------------------
   SWANSON PROPERTIES (INFORMATION ONLY)
   ----------------------------------- */

export const SWANSON_PROPERTIES: Builder = {
  slug: "swanson-properties",
  name: "Swanson Properties",
  // make sure this exists: public/swanson-properties/logo.png (or adjust path)
  logo: "/swanson-properties/logo.png",
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