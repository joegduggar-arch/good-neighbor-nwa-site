// src/lib/floorplans.ts

export type Floorplan = {
  slug: string;
  name: string;
  sqft: string;
  beds: number;
  baths: number;
  summary: string;
  disclaimer?: string;
  images: string[];
};

export type Builder = {
  slug: string;
  name: string;
  logo: string;
  href: string;
  plans: Record<string, Floorplan>;
};

export const BUILDERS_MENU = [
  {
    slug: "timeless-homes",
    name: "Timeless Homes",
    logo: "/images/logos/timeless.svg",
    href: "/builders/timeless-homes",
  },
];

export const BUILDERS: Record<string, Builder> = {
  "timeless-homes": {
    slug: "timeless-homes",
    name: "Timeless Homes",
    logo: "/images/logos/timeless.svg",
    href: "/builders/timeless-homes",
    plans: {
      havensworth: {
        slug: "havensworth",
        name: "The Havensworth",
        sqft: "1,950–2,050",
        beds: 3,
        baths: 2,
        summary:
          "A comfortably sized 3-bed, 2-bath home with an open main living area and a generous kitchen—ideal for everyday living and entertaining.",
        disclaimer:
          "Renderings and floorplans are for illustration purposes only and may vary from the final build.",
        images: Array.from({ length: 50 }, (_, i) =>
          `/images/floorplans/havensworth/haven-${i + 1}.jpg`
        ),
      },
      brecknock: {
        slug: "brecknock",
        name: "The Brecknock",
        sqft: "2,050",
        beds: 3,
        baths: 2,
        summary:
          "A thoughtfully designed 3-bed, 2-bath plan featuring a welcoming entry and excellent flow throughout the home.",
        disclaimer:
          "Renderings and floorplans are for illustration purposes only and may vary from the final build.",
        images: Array.from({ length: 50 }, (_, i) =>
          `/images/floorplans/brecknock/brecknock-${i + 1}.jpg`
        ),
      },
    },
  },
};

export function getBuilder(slug: string) {
  return BUILDERS[slug] || null;
}

export function getPlansByBuilder(slug: string): Floorplan[] {
  const builder = getBuilder(slug);
  return builder ? Object.values(builder.plans) : [];
}

export function getPlan(builderSlug: string, planSlug: string) {
  const builder = getBuilder(builderSlug);
  return builder?.plans[planSlug] || null;
}