// src/lib/floorplans.ts

export type GalleryImage = {
  src: string;
  alt?: string;
};

export type Plan = {
  slug: string;
  name: string;
  sqft: string;
  beds: number;
  baths: number;
  summary: string;
  disclaimer?: string;
  images: GalleryImage[];
};

export type Builder = {
  slug: string;
  name: string;
  logo?: string;
  plans: Record<string, Plan>;
};

/* ============================
   DATA
============================ */

export const BUILDERS: Record<string, Builder> = {
  "timeless-homes": {
    slug: "timeless-homes",
    name: "Timeless Homes",
    logo: "/images/logos/timeless.svg",
    plans: {
      havensworth: {
        slug: "havensworth",
        name: "The Havensworth",
        sqft: "1,950–2,050 sq ft",
        beds: 3,
        baths: 2,
        summary:
          "A comfortably sized 3-bed, 2-bath plan with an open living layout, generous kitchen, and efficient flow for everyday living.",
        disclaimer:
          "Renderings and specifications are for illustration only and may vary from final construction.",
        images: Array.from({ length: 12 }).map((_, i) => ({
          src: `/images/floorplans/havensworth/haven-${String(i + 1).padStart(2, "0")}.jpg`,
          alt: `The Havensworth – image ${i + 1}`,
        })),
      },

      brecknock: {
        slug: "brecknock",
        name: "The Brecknock",
        sqft: "2,050 sq ft",
        beds: 3,
        baths: 2,
        summary:
          "A thoughtfully designed 3-bed, 2-bath home offering a welcoming entry, strong sightlines, and excellent flow for entertaining.",
        disclaimer:
          "Renderings and specifications are for illustration only and may vary from final construction.",
        images: Array.from({ length: 12 }).map((_, i) => ({
          src: `/images/floorplans/brecknock/brecknock-${String(i + 1).padStart(2, "0")}.jpg`,
          alt: `The Brecknock – image ${i + 1}`,
        })),
      },
    },
  },
};

/* ============================
   HELPERS
============================ */

export function getBuilder(slug: string): Builder | null {
  return BUILDERS[slug] ?? null;
}

export function getPlan(builderSlug: string, planSlug: string): Plan | null {
  return BUILDERS[builderSlug]?.plans[planSlug] ?? null;
}

export function getPlansByBuilder(builderSlug: string): Plan[] {
  return Object.values(BUILDERS[builderSlug]?.plans ?? {});
}