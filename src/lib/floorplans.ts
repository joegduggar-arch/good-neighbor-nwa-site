// src/lib/floorplans.ts
export type Status = "available" | "under-construction" | "sold";

export type Plan = {
  slug: string;
  name: string;
  builder: "timeless" | "swanson"; // add other slugs if you have them
  sqft?: string;
  status: Status;
  images?: string[];
  blurb?: string;
};

export type Builder = {
  slug: "timeless" | "swanson"; // add other slugs if you keep them
  name: string;
  logo?: string;
  description?: string;
};

// EXISTING arrays:
// export const BUILDERS: Builder[] = [...];
// export const PLANS: Plan[] = [...];

export function getBuilderBySlug(slug: string): Builder | undefined {
  return BUILDERS.find(b => b.slug === slug);
}

/** Get all plans for a given builder slug */
export function getPlansByBuilder(slug: string): Plan[] {
  return PLANS.filter(p => p.builder === slug);
}

/** Group any set of plans by sale/build status */
export function groupByStatus(plans: Plan[]): Record<Status, Plan[]> {
  return {
    "available": plans.filter(p => p.status === "available"),
    "under-construction": plans.filter(p => p.status === "under-construction"),
    "sold": plans.filter(p => p.status === "sold"),
  };
}
