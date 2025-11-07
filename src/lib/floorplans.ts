// src/lib/floorplans.ts

import type { StaticImageData } from "next/image";

/** ---------------------------------------------------------
 *  Types
 *  --------------------------------------------------------*/
export type BuilderSlug = "timeless"; // floorplans are only for Timeless now

export type Status = "available" | "under-construction" | "sold";

export interface Builder {
  name: string;
  slug: BuilderSlug;
  logo?: string;
}

export interface MenuBuilder {
  /** shown in the Navbar “Properties ▸ Builders” menu */
  name: string;
  slug: string; // can include non-floorplan builders (e.g., "swanson")
  logo?: string;
}

export interface Floorplan {
  id: string;
  builder: BuilderSlug;
  name: string;
  sqftLabel?: string; // e.g. "±2000 sq ft"
  bedrooms?: number;
  bathrooms?: number;
  garage?: string;
  description?: string;
  status: Status;
  cover?: string | StaticImageData;
  images: (string | StaticImageData)[];
}

/** ---------------------------------------------------------
 *  Builders (for FLOORPLANS) — Timeless only
 *  --------------------------------------------------------*/
export const BUILDERS: Builder[] = [
  {
    name: "Timeless Homes",
    slug: "timeless",
    logo: "/images/logos/timeless.png", // put your file here if you have one
  },
];

/** ---------------------------------------------------------
 *  Builders menu (Navbar) — includes Swanson for “contact us”
 *  --------------------------------------------------------*/
export const BUILDERS_MENU: MenuBuilder[] = [
  {
    name: "Timeless Homes",
    slug: "timeless",
    logo: "/images/logos/timeless.png",
  },
  {
    // we still show Swanson in the menu, but there are no plans listed
    name: "Swanson Properties",
    slug: "swanson",
    logo: "/images/logos/swanson.png",
  },
];

/** ---------------------------------------------------------
 *  Floorplans — ONLY Timeless Homes here
 *  (add as many images as you'd like; the gallery supports many)
 *  --------------------------------------------------------*/
export const FLOORPLANS: Floorplan[] = [
  {
    id: "brecknock",
    builder: "timeless",
    name: "Brecknock",
    sqftLabel: "±2000 sq ft",
    status: "available",
    description:
      "A thoughtful single-level layout with open living, generous kitchen island, and a bright owner’s suite.",
    cover: "/images/floorplans/timeless/brecknock/cover.jpg",
    images: [
      "/images/floorplans/timeless/brecknock/1.jpg",
      "/images/floorplans/timeless/brecknock/2.jpg",
      "/images/floorplans/timeless/brecknock/3.jpg",
      // add up to 50+ files here — gallery will handle it
    ],
  },
  {
    id: "havensworth",
    builder: "timeless",
    name: "Havensworth",
    sqftLabel: "±2000 sq ft",
    status: "under-construction",
    description:
      "Easy entertaining with an open great room, dining, and kitchen — plus a covered back porch.",
    cover: "/images/floorplans/timeless/havensworth/cover.jpg",
    images: [
      "/images/floorplans/timeless/havensworth/1.jpg",
      "/images/floorplans/timeless/havensworth/2.jpg",
      "/images/floorplans/timeless/havensworth/3.jpg",
    ],
  },
];

/** ---------------------------------------------------------
 *  Helpers
 *  --------------------------------------------------------*/
export function getBuilderBySlug(slug: BuilderSlug) {
  return BUILDERS.find((b) => b.slug === slug) || null;
}

export function getPlansByBuilder(slug: BuilderSlug): Floorplan[] {
  return FLOORPLANS.filter((p) => p.builder === slug);
}

export function getPlanById(id: string): Floorplan | null {
  return FLOORPLANS.find((p) => p.id === id) || null;
}

export function getAllPlans(): Floorplan[] {
  return FLOORPLANS;
}

export function byStatus(slug: BuilderSlug) {
  const plans = getPlansByBuilder(slug);
  return {
    available: plans.filter((p) => p.status === "available"),
    underConstruction: plans.filter((p) => p.status === "under-construction"),
    sold: plans.filter((p) => p.status === "sold"),
  };
}
