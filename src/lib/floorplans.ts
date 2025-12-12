// src/lib/floorplans.ts

export type Builder = {
  slug: string;
  name: string;
  /** Path under /public (must start with "/") */
  logo: string;
  href: string;
};

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

export function getBuilder(slug: string): Builder | undefined {
  return BUILDERS_MENU.find((b) => b.slug === slug);
}

export function getPlansByBuilder(builderSlug: string): Plan[] {
  return PLANS.filter((p) => p.builderSlug === builderSlug);
}

export function getPlan(builderSlug: string, planSlug: string): Plan | undefined {
  return PLANS.find((p) => p.builderSlug === builderSlug && p.planSlug === planSlug);
}