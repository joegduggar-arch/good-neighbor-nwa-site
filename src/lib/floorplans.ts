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
  /**
   * Marketing copy that appears near the top of the plan page.
   */
  summary?: string;
  /**
   * Legal / fine-print text that appears at the bottom.
   */
  disclaimer?: string;
  /**
   * Array of image paths (relative to /public).
   * You can safely put 50+ photos here.
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
  // Logo used on homepage + navbar dropdown
  logo: "/images/logos/timeless.png",
  description:
    "Browse floorplans and available homes built by Timeless Homes.",
  plans: [
    {
      slug: "havens",
      builder: "timeless-homes",
      name: "The Havens",
      sqft: 1950, // approx
      beds: 3,
      baths: 2,
      summary:
        "The Havens is a comfortably sized plan, typically in the 1,950–2,050 sq ft range. It’s designed for everyday living with an open main living area, generous kitchen, and a layout that keeps bedrooms tucked away for privacy. A great fit for families or anyone wanting new-construction efficiency without feeling cramped.",
      disclaimer:
        "Renderings and specifications for The Havens are for illustration only and may vary slightly from the final build.",
      images: [
        // Make sure these files exist under: /public/images/timeless-homes/
        "/images/timeless-homes/haven-01.jpg",
        "/images/timeless-homes/haven-02.jpg",
        "/images/timeless-homes/haven-03.jpg",
        "/images/timeless-homes/haven-04.jpg",
        // Add more as needed:
        // "/images/timeless-homes/haven-05.jpg",
        // ...
      ],
    },
    {
      slug: "brecknock",
      builder: "timeless-homes",
      name: "The Brecknock",
      sqft: 2050, // approx
      beds: 3,
      baths: 2,
      summary:
        "The Brecknock is a thoughtfully designed plan, generally around 2,000 sq ft. It offers a welcoming entry, open living and dining, and a kitchen that’s made for hosting with plenty of workspace and storage. Bedrooms are well-proportioned, and the overall flow is ideal for both everyday life and entertaining.",
      disclaimer:
        "Renderings and specifications for The Brecknock are for illustration only and may vary slightly from the final build.",
      images: [
        // Make sure these files exist under: /public/images/timeless-homes/
        "/images/timeless-homes/brecknock-01.jpg",
        "/images/timeless-homes/brecknock-02.jpg",
        "/images/timeless-homes/brecknock-03.jpg",
        "/images/timeless-homes/brecknock-04.jpg",
        // Add more as needed:
        // "/images/timeless-homes/brecknock-05.jpg",
        // ...
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