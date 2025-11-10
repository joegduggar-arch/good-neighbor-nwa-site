// src/lib/floorplans.ts

/**
 * Canonical floorplan/builders data + helpers.
 * Only Timeless Homes (Milagro Designs) is exposed per current requirements.
 */

export type Status = "available" | "sold" | "soon";

export type BuilderKey = "timeless"; // add more keys here if/when we re-enable others

export type PlanKey =
  | "brecknock"
  | "havensworth"; // extend as new Timeless plans are added

export interface Plan {
  key: PlanKey;
  name: string;
  approxSqft: string; // keep as string so we can show "+/- 2000" etc
  description: string;
  status: Status;
  hero: string;       // main image path in /public
  gallery: string[];  // additional images in /public
}

export interface Builder {
  key: BuilderKey;
  slug: string; // used in routes
  name: string;
  companyLine?: string;
  logo?: string; // /public path to transparent PNG/SVG
  blurb: string; // short paragraph for the builder landing page
  plans: Plan[];
  // Optional disclaimer shown on every plan page
  disclaimer?: string;
}

/* --------------------
   TIMLESS HOMES (MILAGRO DESIGNS)
   -------------------- */

const TIMELESS: Builder = {
  key: "timeless",
  slug: "milagro-designs",
  name: "Timeless Homes",
  companyLine: "Milagro Designs, LLC",
  logo: "/images/timeless-logo.png", // put your transparent logo here
  blurb:
    "Timeless Homes (Milagro Designs, LLC) builds thoughtful, quality homes across Northwest Arkansas. Contact Good Neighbor Realty to learn more about current and upcoming builds.",
  disclaimer:
    "Floorplans, materials, colors, and specifications are subject to change at the builder’s discretion. Images may include options or examples from prior builds.",
  plans: [
    {
      key: "brecknock",
      name: "Brecknock",
      approxSqft: "+/- 2000 sq ft",
      description:
        "A smart, efficient layout with inviting living spaces and practical storage—ideal for everyday living.",
      status: "available",
      hero: "/images/placeholder/brecknock-hero.jpg",
      gallery: [
        "/images/placeholder/brecknock-1.jpg",
        "/images/placeholder/brecknock-2.jpg",
        "/images/placeholder/brecknock-3.jpg",
      ],
    },
    {
      key: "havensworth",
      name: "Havensworth",
      approxSqft: "+/- 2000 sq ft",
      description:
        "Open-concept living with a balanced bedroom split and a flexible dining/office option.",
      status: "soon",
      hero: "/images/placeholder/havensworth-hero.jpg",
      gallery: [
        "/images/placeholder/havensworth-1.jpg",
        "/images/placeholder/havensworth-2.jpg",
        "/images/placeholder/havensworth-3.jpg",
      ],
    },
  ],
};

/* --------------------
   PUBLIC API
   -------------------- */

// 1) Master list of builders your site exposes
export const BUILDERS: Builder[] = [TIMELESS];

// 2) Compact menu data for the navbar “Properties ▸ Builders”
export const BUILDERS_MENU = BUILDERS.map((b) => ({
  slug: b.slug,
  name: b.name,
  logo: b.logo ?? null,
}));

// 3) Lookup a builder by its slug (URL segment)
export function getBuilderBySlug(slug: string): Builder | undefined {
  return BUILDERS.find((b) => b.slug === slug);
}

// 4) Lookup a plan by builder slug + plan key
export function getPlan(
  builderSlug: string,
  planKey: string
): { builder: Builder; plan: Plan } | undefined {
  const builder = getBuilderBySlug(builderSlug);
  if (!builder) return undefined;
  const plan = builder.plans.find((p) => p.key === (planKey as PlanKey));
  if (!plan) return undefined;
  return { builder, plan };
}

// 5) Group helper: for a given builder, return plans partitioned by status
export function byStatus(
  builderSlug: string
): { available: Plan[]; soon: Plan[]; sold: Plan[] } {
  const builder = getBuilderBySlug(builderSlug);
  const groups: { available: Plan[]; soon: Plan[]; sold: Plan[] } = {
    available: [],
    soon: [],
    sold: [],
  };
  if (!builder) return groups;
  for (const p of builder.plans) {
    groups[p.status].push(p);
  }
  return groups;
}