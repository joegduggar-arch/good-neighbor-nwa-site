// src/lib/floorplans.ts
// Single source of truth for builders & plans (Timeless Homes only)

export type BuilderKey = "timeless";

export type Builder = {
  key: BuilderKey;
  slug: string;
  name: string;
  logo: string;        // /images/logos/...
  blurb?: string;
};

export type PlanKey =
  | "brecknock"
  | "havensworth";

export type Plan = {
  builder: BuilderKey;
  slug: PlanKey;
  name: string;
  sqft?: number | string;
  beds?: number;
  baths?: number | string;
  hero?: string;        // first image to show large
  images: string[];     // any number of image paths under /public
  disclaimer?: string;
};

export const BUILDERS: Record<BuilderKey, Builder> = {
  timeless: {
    key: "timeless",
    slug: "milagro-designs",
    name: "Timeless Homes",
    logo: "/images/logos/timeless-homes.png",
    blurb:
      "Quality construction and thoughtful layouts across Northwest Arkansas.",
  },
};

// Optional convenience for menus (already includes href)
export const BUILDERS_MENU: Array<{
  slug: string;
  name: string;
  logo: string;
  href: string;
}> = Object.values(BUILDERS).map((b) => ({
  slug: b.slug,
  name: b.name,
  logo: b.logo,
  href: `/builders/${b.slug}`,
}));

// --- Plans (add images you place under /public) ---
export const PLANS: Plan[] = [
  {
    builder: "timeless",
    slug: "brecknock",
    name: "Brecknock",
    sqft: "≈ 2,000+",
    beds: 3,
    baths: 2,
    hero: "/images/plans/brecknock/1.jpg",
    images: [
      "/images/plans/brecknock/1.jpg",
      "/images/plans/brecknock/2.jpg",
      "/images/plans/brecknock/3.jpg",
      // add up to 50+; just drop more files and list them here
    ],
    disclaimer:
      "Renderings, finishes, and dimensions may vary by lot and builder updates.",
  },
  {
    builder: "timeless",
    slug: "havensworth",
    name: "Havensworth",
    sqft: "≈ 2,000+",
    beds: 3,
    baths: 2.5,
    hero: "/images/plans/havensworth/1.jpg",
    images: [
      "/images/plans/havensworth/1.jpg",
      "/images/plans/havensworth/2.jpg",
      "/images/plans/havensworth/3.jpg",
    ],
    disclaimer:
      "Plans and selections are subject to change at builder’s discretion.",
  },
];

// --- helpers used by pages/components ---
export const getBuilders = (): Builder[] => Object.values(BUILDERS);

export const getBuilderBySlug = (slug: string): Builder | undefined =>
  getBuilders().find((b) => b.slug === slug);

export const getPlansByBuilder = (builder: BuilderKey): Plan[] =>
  PLANS.filter((p) => p.builder === builder);

export const getPlan = (builder: BuilderKey, slug: PlanKey): Plan | undefined =>
  PLANS.find((p) => p.builder === builder && p.slug === slug);
