// src/lib/floorplans.ts

export type Plan = {
  slug: string;
  name: string;
  sqft: string;
  beds: number;
  baths: number;
  summary: string;
  disclaimer?: string;
  images: string[]; // URLs under /public
};

export type Builder = {
  slug: string;
  name: string;
  logo?: string; // URL under /public
  blurb?: string;
  plans: Plan[];
};

function range(n1: number, n2: number) {
  const out: number[] = [];
  for (let i = n1; i <= n2; i++) out.push(i);
  return out;
}

/**
 * Because your folder contains both .jpg and .jpeg,
 * we generate BOTH for each index and the UI hides any that 404.
 */
function makeImageCandidates(basePath: string, prefix: string, indices: number[]) {
  const urls: string[] = [];
  for (const i of indices) {
    const nn = String(i).padStart(2, "0");
    urls.push(`${basePath}/${prefix}-${nn}.jpg`);
    urls.push(`${basePath}/${prefix}-${nn}.jpeg`);
  }
  return urls;
}

const TIMELESS_BASE = "/floorplans/timeless-homes";

export const BUILDERS: Builder[] = [
  {
    slug: "timeless-homes",
    name: "Timeless Homes",
    // Put the logo wherever you keep it in /public. Example:
    // public/logos/timeless-homes.png  => "/logos/timeless-homes.png"
    logo: "/logos/timeless-homes.png",
    blurb:
      "Quality new-construction homes with thoughtful layouts and attention to detail. For current availability, reach out to Good Neighbor Realty and we’ll walk you through options, pricing, and timelines.",
    plans: [
      {
        slug: "havensworth", // IMPORTANT: renamed from “havens”
        name: "The Havensworth",
        sqft: "1,950 sq ft (approx.)",
        beds: 3,
        baths: 2,
        summary:
          "A comfortably sized 3-bed, 2-bath plan in the 1,950–2,050 sq ft range with an open main living area and generous kitchen — designed for everyday living without feeling cramped.",
        disclaimer:
          "Renderings and specifications are for illustration only and may vary slightly from the final build.",
        // If you expect up to 50, change 1..50 later — this supports it now.
        images: makeImageCandidates(TIMELESS_BASE, "havens", range(1, 50)),
      },
      {
        slug: "brecknock",
        name: "The Brecknock",
        sqft: "2,050 sq ft (approx.)",
        beds: 3,
        baths: 2,
        summary:
          "A thoughtfully designed plan around 2,000 sq ft with a welcoming entry, open living and dining, and a kitchen made for hosting with plenty of workspace and storage.",
        disclaimer:
          "Renderings and specifications are for illustration only and may vary slightly from the final build.",
        images: makeImageCandidates(TIMELESS_BASE, "brecknock", range(1, 50)),
      },
    ],
  },
  // Add other builders here...
];

export const BUILDERS_MENU = BUILDERS.map((b) => ({
  slug: b.slug,
  name: b.name,
}));

export function getBuilder(slug: string) {
  return BUILDERS.find((b) => b.slug === slug) ?? null;
}

export function getPlansByBuilder(builderSlug: string) {
  const b = getBuilder(builderSlug);
  return b ? b.plans : [];
}

export function getPlan(builderSlug: string, planSlug: string) {
  const b = getBuilder(builderSlug);
  if (!b) return null;
  return b.plans.find((p) => p.slug === planSlug) ?? null;
}