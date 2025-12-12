// src/lib/floorplans.ts

export type Plan = {
  slug: string;
  name: string;
  sqft: number;
  beds: number;
  baths: number;
  summary?: string;
  disclaimer?: string;
  images: string[]; // MUST be absolute-from-public, e.g. "/floorplans/timeless-homes/brecknock/brecknock-11.jpg"
};

export type Builder = {
  slug: string;
  name: string;
  href: string; // builders landing page
  logo: string; // absolute-from-public path
  description?: string;
  plans: Plan[];
};

export type BuilderMenuItem = Pick<Builder, "slug" | "name" | "href" | "logo">;

export type GalleryImage = {
  src: string;
  alt: string;
};

const timelessHomes: Builder = {
  slug: "timeless-homes",
  name: "Timeless Homes",
  href: "/builders/timeless-homes",
  logo: "/images/logos/timeless.png",
  description:
    "Quality new-construction homes with thoughtful layouts and attention to detail. For current availability, reach out to Good Neighbor Realty and we’ll walk you through options, pricing, and timelines.",
  plans: [
    {
      slug: "havensworth",
      name: "The Havensworth",
      sqft: 1950,
      beds: 3,
      baths: 2,
      summary:
        "A comfortably sized 3-bed, 2-bath plan with an open main living area and a generous kitchen.",
      images: [
        // ✅ These MUST match the real filenames under /public/floorplans/...
        // You said you have 30 Havensworth photos named like "havens-01.jpg", "havens-02.jpg", etc.
        "/floorplans/timeless-homes/havensworth/havens-01.jpg",
        "/floorplans/timeless-homes/havensworth/havens-02.jpg",
        "/floorplans/timeless-homes/havensworth/havens-03.jpg",
        "/floorplans/timeless-homes/havensworth/havens-04.jpg",
        "/floorplans/timeless-homes/havensworth/havens-05.jpg",
        "/floorplans/timeless-homes/havensworth/havens-06.jpg",
        "/floorplans/timeless-homes/havensworth/havens-07.jpg",
        "/floorplans/timeless-homes/havensworth/havens-08.jpg",
        "/floorplans/timeless-homes/havensworth/havens-09.jpg",
        "/floorplans/timeless-homes/havensworth/havens-10.jpg",
        "/floorplans/timeless-homes/havensworth/havens-11.jpg",
        "/floorplans/timeless-homes/havensworth/havens-12.jpg",
        "/floorplans/timeless-homes/havensworth/havens-13.jpg",
        "/floorplans/timeless-homes/havensworth/havens-14.jpg",
        "/floorplans/timeless-homes/havensworth/havens-15.jpg",
        "/floorplans/timeless-homes/havensworth/havens-16.jpg",
        "/floorplans/timeless-homes/havensworth/havens-17.jpg",
        // If you actually have 30 and want them all, keep adding:
        // "/floorplans/timeless-homes/havensworth/havens-18.jpg",
        // ...
        // "/floorplans/timeless-homes/havensworth/havens-30.jpg",
      ],
    },
    {
      slug: "brecknock",
      name: "The Brecknock",
      sqft: 2050,
      beds: 3,
      baths: 2,
      summary:
        "A thoughtfully designed 3-bed, 2-bath plan around 2,050 sq ft, with a welcoming entry and great flow for everyday life and entertaining.",
      images: [
        // You said you have 27 Brecknock photos named like "brecknock-11.jpg" ... "brecknock-27.jpg".
        // ✅ Make sure these filenames exist exactly in /public/floorplans/timeless-homes/brecknock/
        "/floorplans/timeless-homes/brecknock/brecknock-11.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-12.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-13.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-14.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-15.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-16.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-17.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-18.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-19.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-20.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-21.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-22.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-23.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-24.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-25.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-26.jpg",
        "/floorplans/timeless-homes/brecknock/brecknock-27.jpg",
      ],
    },
  ],
};

const BUILDERS: Record<string, Builder> = {
  "timeless-homes": timelessHomes,
};

export const BUILDERS_MENU: BuilderMenuItem[] = Object.values(BUILDERS).map((b) => ({
  slug: b.slug,
  name: b.name,
  href: b.href,
  logo: b.logo,
}));

export function getBuilder(slug: string): Builder | null {
  return BUILDERS[slug] ?? null;
}

export function getPlansByBuilder(slug: string): Plan[] {
  return BUILDERS[slug]?.plans ?? [];
}

export function getPlan(builderSlug: string, planSlug: string): Plan | null {
  const b = BUILDERS[builderSlug];
  if (!b) return null;
  return b.plans.find((p) => p.slug === planSlug) ?? null;
}

export function toGalleryImages(planName: string, images: string[]): GalleryImage[] {
  return images.map((src, i) => ({
    src,
    alt: `${planName} - image ${i + 1}`,
  }));
}