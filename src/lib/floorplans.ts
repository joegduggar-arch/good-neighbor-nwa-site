// src/lib/floorplans.ts

export type Plan = {
  slug: string;
  name: string;
  sqft: string; // keep flexible: "1,950 sq ft (approx.)"
  beds: number;
  baths: number;
  summary: string;
  images: string[]; // must be valid /public paths, e.g. "/images/timeless-homes/havens-01.jpg"
  disclaimer?: string;
};

export type Builder = {
  slug: string;
  name: string;
  logo?: string; // "/images/logos/timeless.png"
  description: string;
  plans: Record<string, Plan>;
};

export type BuildersMenuItem = {
  slug: string;
  name: string;
  logo?: string;
};

const DEFAULT_PLAN_DISCLAIMER =
  "Renderings and specifications are for illustration only and may vary slightly from the final build.";

// IMPORTANT:
// - Everything in /public is referenced from the site root.
// - If the file is at public/images/timeless-homes/havens-01.jpg
//   then the src MUST be: "/images/timeless-homes/havens-01.jpg"

const BUILDERS: Record<string, Builder> = {
  "timeless-homes": {
    slug: "timeless-homes",
    name: "Timeless Homes",
    logo: "/images/logos/timeless.png", // or "/images/logos/timeless.svg"
    description:
      "Quality new-construction homes with thoughtful layouts and attention to detail. For current availability, reach out to Good Neighbor Realty and we’ll walk you through options, pricing, and timelines.",
    plans: {
      havensworth: {
        slug: "havensworth",
        name: "The Havensworth",
        sqft: "1,950 sq ft (approx.)",
        beds: 3,
        baths: 2,
        summary:
          "A comfortably sized 3-bed, 2-bath plan in the 1,950–2,050 sq ft range with an open main living area and generous kitchen—designed for everyday living without feeling cramped.",
        disclaimer: DEFAULT_PLAN_DISCLAIMER,
        images: [
          // Update these to EXACT filenames you have in /public/images/timeless-homes
          "/images/timeless-homes/havens-01.jpg",
          "/images/timeless-homes/havens-02.jpg",
          "/images/timeless-homes/havens-03.jpg",
          "/images/timeless-homes/havens-04.jpg",
          "/images/timeless-homes/havens-06.jpeg",
          "/images/timeless-homes/havens-07.jpeg",
          "/images/timeless-homes/havens-08.jpeg",
          "/images/timeless-homes/havens-09.jpeg",
        ],
      },

      brecknock: {
        slug: "brecknock",
        name: "The Brecknock",
        sqft: "2,050 sq ft (approx.)",
        beds: 3,
        baths: 2,
        summary:
          "A thoughtfully designed 3-bed, 2-bath plan around 2,050 sq ft with a welcoming entry, open living and dining, and a kitchen built for hosting with generous workspace and storage.",
        disclaimer: DEFAULT_PLAN_DISCLAIMER,
        images: [
          // Update these to EXACT filenames you have in /public/images/timeless-homes
          "/images/timeless-homes/brecknock-19.jpg",
          "/images/timeless-homes/brecknock-20.jpg",
          "/images/timeless-homes/brecknock-21.jpg",
          "/images/timeless-homes/brecknock-22.jpg",
          "/images/timeless-homes/brecknock-23.jpg",
          "/images/timeless-homes/brecknock-24.jpg",
          "/images/timeless-homes/brecknock-25.jpg",
          "/images/timeless-homes/brecknock-26.jpg",
          "/images/timeless-homes/brecknock-27.jpeg",
        ],
      },
    },
  },
};

// Used by navbar / homepage builder tiles
export const BUILDERS_MENU: BuildersMenuItem[] = Object.values(BUILDERS).map((b) => ({
  slug: b.slug,
  name: b.name,
  logo: b.logo,
}));

export function getBuilder(slug: string): Builder | null {
  return BUILDERS[slug] ?? null;
}

export function getPlansByBuilder(builderSlug: string): Plan[] {
  const b = BUILDERS[builderSlug];
  if (!b) return [];
  return Object.values(b.plans);
}

export function getPlan(builderSlug: string, planSlug: string): Plan | null {
  const b = BUILDERS[builderSlug];
  if (!b) return null;
  return b.plans[planSlug] ?? null;
}