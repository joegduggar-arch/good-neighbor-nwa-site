// src/lib/floorplans.ts

<<<<<<< HEAD
=======
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
  summary?: string;     // ⬅ NEW
  disclaimer?: string;
  images?: string[];
};

>>>>>>> parent of b6b5635 (builder pages)
export type Builder = {
  slug: string;
  name: string;
  /** Path under /public (must start with "/") */
  logo: string;
  href: string;
};

<<<<<<< HEAD
export type Plan = {
  builderSlug: string;
  planSlug: string;
  name: string;
  sqft: number;
  beds: number;
  baths: number;
  summary?: string;
  disclaimer?: string;
  /** Paths under /public (must start with "/") */
  images: string[];
=======
/* ---------------------------------
   IMAGE LISTS FOR TIMELESS HOMES
   --------------------------------- */

// The Havensworth images (havens-01.jpg … havens-09.jpg under /public/images/timeless-homes)
const HAVENSWORTH_IMAGES: string[] = [
  "/images/timeless-homes/havens-01.jpg",
  "/images/timeless-homes/havens-02.jpg",
  "/images/timeless-homes/havens-03.jpg",
  "/images/timeless-homes/havens-04.jpg",
  "/images/timeless-homes/havens-05.jpg",
  "/images/timeless-homes/havens-06.jpg",
  "/images/timeless-homes/havens-07.jpg",
  "/images/timeless-homes/havens-08.jpg",
  "/images/timeless-homes/havens-09.jpg",
  // add more here as you upload them (up to ~50 is fine)
];

// The Brecknock images (brecknock-01.jpg … brecknock-27.jpg under /public/images/timeless-homes)
const BRECKNOCK_IMAGES: string[] = [
  "/images/timeless-homes/brecknock-01.jpg",
  "/images/timeless-homes/brecknock-02.jpg",
  "/images/timeless-homes/brecknock-03.jpg",
  "/images/timeless-homes/brecknock-04.jpg",
  "/images/timeless-homes/brecknock-05.jpg",
  "/images/timeless-homes/brecknock-06.jpg",
  "/images/timeless-homes/brecknock-07.jpg",
  "/images/timeless-homes/brecknock-08.jpg",
  "/images/timeless-homes/brecknock-09.jpg",
  "/images/timeless-homes/brecknock-10.jpg",
  "/images/timeless-homes/brecknock-11.jpg",
  "/images/timeless-homes/brecknock-12.jpg",
  "/images/timeless-homes/brecknock-13.jpg",
  "/images/timeless-homes/brecknock-14.jpg",
  "/images/timeless-homes/brecknock-15.jpg",
  "/images/timeless-homes/brecknock-16.jpg",
  "/images/timeless-homes/brecknock-17.jpg",
  "/images/timeless-homes/brecknock-18.jpg",
  "/images/timeless-homes/brecknock-19.jpg",
  "/images/timeless-homes/brecknock-20.jpg",
  "/images/timeless-homes/brecknock-21.jpg",
  "/images/timeless-homes/brecknock-22.jpg",
  "/images/timeless-homes/brecknock-23.jpg",
  "/images/timeless-homes/brecknock-24.jpg",
  "/images/timeless-homes/brecknock-25.jpg",
  "/images/timeless-homes/brecknock-26.jpg",
  "/images/timeless-homes/brecknock-27.jpg",
];

/* -------------------------
   TIMELESS HOMES (ACTIVE)
   ------------------------- */

export const TIMELESS_HOMES: Builder = {
  slug: "timeless-homes",
  name: "Timeless Homes",
  // adjust if your logo lives somewhere else
  logo: "/images/logos/timeless.png",
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
      summary:
        "A comfortably sized 3-bed, 2-bath plan in the 1,950–2,050 sq ft range with an open main living area and generous kitchen.",
      disclaimer:
        "Renderings, specifications, and selections for The Havensworth are for illustration only and may vary slightly from the final build.",
      images: HAVENSWORTH_IMAGES,
    },
    {
      slug: "brecknock",
      builder: "timeless-homes",
      name: "The Brecknock",
      sqft: 2050,
      beds: 3,
      baths: 2,
      summary:
        "A thoughtfully designed 3-bed, 2-bath plan around 2,050 sq ft, with a welcoming entry and great flow for everyday life and entertaining.",
      disclaimer:
        "Renderings, specifications, and selections for The Brecknock are for illustration only and may vary slightly from the final build.",
      images: BRECKNOCK_IMAGES,
    },
  ],
>>>>>>> parent of b6b5635 (builder pages)
};

/** Helper to generate local public image paths like "/images/floorplans/timeless-homes/brecknock/brecknock-11.jpg" */
function makeImageRange(opts: {
  baseDir: string; // e.g. "/images/floorplans/timeless-homes/brecknock"
  prefix: string;  // e.g. "brecknock-"
  from: number;
  to: number;
  ext?: string;    // default "jpg"
  pad?: number;    // e.g. 2 -> 01,02
}) {
  const { baseDir, prefix, from, to, ext = "jpg", pad } = opts;
  const out: string[] = [];
  for (let i = from; i <= to; i++) {
    const n = pad ? String(i).padStart(pad, "0") : String(i);
    out.push(`${baseDir}/${prefix}${n}.${ext}`);
  }
  return out;
}

<<<<<<< HEAD
/** Builders shown in your navbar + homepage section */
export const BUILDERS_MENU: Builder[] = [
  {
    slug: "timeless-homes",
    name: "Timeless Homes",
    logo: "/images/logos/timeless.png", // you said: public/images/logos/timeless.png
    href: "/builders/timeless-homes",
  },
];

/** Floorplans data */
export const PLANS: Plan[] = [
  {
    builderSlug: "timeless-homes",
    planSlug: "havensworth",
    name: "The Havensworth",
    sqft: 1950,
    beds: 3,
    baths: 2,
    summary:
      "A comfortably sized 3-bed, 2-bath plan with an open main living area and generous kitchen.",
    images: [
      // Update ranges if your actual filenames differ.
      // Screenshot shows havens-01.jpg ... havens-17.jpg (you said 30 total; adjust if you have more).
      ...makeImageRange({
        baseDir: "/images/floorplans/timeless-homes/havensworth",
        prefix: "havens-",
        from: 1,
        to: 17,
        pad: 2,
      }),
    ],
  },
  {
    builderSlug: "timeless-homes",
    planSlug: "brecknock",
    name: "The Brecknock",
    sqft: 2050,
    beds: 3,
    baths: 2,
    summary:
      "A thoughtfully designed 3-bed, 2-bath plan around 2,050 sq ft, with a welcoming entry and great flow.",
    images: [
      // Screenshot shows brecknock-11.jpg ... brecknock-27.jpg
      ...makeImageRange({
        baseDir: "/images/floorplans/timeless-homes/brecknock",
        prefix: "brecknock-",
        from: 11,
        to: 27,
      }),
    ],
  },
];
=======
export const SWANSON_PROPERTIES: Builder = {
  slug: "swanson-properties",
  name: "Swanson Properties",
  logo: "/images/logos/dreambuilt.png",
  description:
    "Floorplans and builds for Swanson Properties are not available online. Please contact Good Neighbor Realty directly for current offerings.",
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
>>>>>>> parent of b6b5635 (builder pages)

export function getBuilder(slug: string): Builder | undefined {
  return BUILDERS_MENU.find((b) => b.slug === slug);
}

export function getPlansByBuilder(builderSlug: string): Plan[] {
  return PLANS.filter((p) => p.builderSlug === builderSlug);
}

export function getPlan(builderSlug: string, planSlug: string): Plan | undefined {
  return PLANS.find((p) => p.builderSlug === builderSlug && p.planSlug === planSlug);
}