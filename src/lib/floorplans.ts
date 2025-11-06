// src/lib/floorplans.ts
import type { Metadata } from "next";

export type BuilderKey = "swanson" | "timeless";
export type PlanStatus = "under-construction" | "coming-soon" | "sold";
export type PlanKey =
  | "donington" | "brittany" | "hambleton" | "castlebay" | "ironside"
  | "windsor" | "york" | "ravenglass"
  | "brecknock" | "havensworth";

export interface Plan {
  builder: BuilderKey;
  slug: PlanKey;
  name: string;
  sqft: string;
  status: PlanStatus;
  beds?: number;
  baths?: number;
  garage?: string;
  hero: string;
  gallery: string[];
  summary: string;
}

export interface BuilderInfo {
  key: BuilderKey;
  name: string;
  logo: string;
  blurb: string;
  plans: PlanKey[];
  metadata: Metadata;
}

export const BUILDERS: Record<BuilderKey, BuilderInfo> = {
  swanson: {
    key: "swanson",
    name: "Swanson Properties (DreamBuilt Custom Homes)",
    logo: "/images/logos/swanson.png",
    blurb:
      "Thoughtful new-construction homes across Bella Vista and NWA with smart livability and enduring materials.",
    plans: [
      "donington", "brittany", "hambleton", "castlebay",
      "ironside", "windsor", "york", "ravenglass",
    ],
    metadata: {
      title: "Swanson Properties Floorplans | Good Neighbor Realty",
      description:
        "Explore Swanson Properties (DreamBuilt) floorplans—quality new construction homes across Bella Vista.",
    },
  },
  timeless: {
    key: "timeless",
    name: "Timeless Home (Milagro Designs)",
    logo: "/images/logos/timeless.png",
    blurb:
      "Practical layouts and clean detailing—Timeless Home by Milagro Designs builds move-in-ready new homes in NWA.",
    plans: ["brecknock", "havensworth"],
    metadata: {
      title: "Timeless Home (Milagro Designs) Floorplans | Good Neighbor Realty",
      description:
        "Browse Timeless Home (Milagro Designs) floorplans for new construction across Northwest Arkansas.",
    },
  },
};

// path helpers
const hero = (b: BuilderKey, s: string) => `/images/floorplans/${b}/${s}/hero.jpg`;
const img  = (b: BuilderKey, s: string, n: number) => `/images/floorplans/${b}/${s}/${n}.jpg`;
const gen = (b: BuilderKey, s: string, count: number) =>
  Array.from({ length: count }, (_, i) => img(b, s, i + 1));

// ---------- Plans ----------
export const PLANS: Record<PlanKey, Plan> = {
  // Swanson / DreamBuilt
  donington: {
    builder: "swanson",
    slug: "donington",
    name: "Donington",
    sqft: "2,460 sq ft",
    status: "under-construction",
    beds: 4, baths: 3, garage: "2-car",
    hero: hero("swanson", "donington"),
    gallery: gen("swanson", "donington", 25),
    summary:
      "A well-balanced two-story with a generous great room, covered outdoor living, and a convenient main-level suite.",
  },
  brittany: {
    builder: "swanson",
    slug: "brittany",
    name: "Brittany",
    sqft: "2,300 sq ft",
    status: "coming-soon",
    beds: 4, baths: 3, garage: "2-car",
    hero: hero("swanson", "brittany"),
    gallery: gen("swanson", "brittany", 20),
    summary:
      "Bright gathering spaces, practical storage, and a cook-forward kitchen centered around an island workspace.",
  },
  hambleton: {
    builder: "swanson",
    slug: "hambleton",
    name: "Hambleton",
    sqft: "2,316 sq ft",
    status: "under-construction",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "hambleton"),
    gallery: gen("swanson", "hambleton", 18),
    summary:
      "Open main living with a defined dining nook, split bedrooms, and a flexible front room for office or guest.",
  },
  castlebay: {
    builder: "swanson",
    slug: "castlebay",
    name: "Castlebay",
    sqft: "2,060 sq ft",
    status: "coming-soon",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "castlebay"),
    gallery: gen("swanson", "castlebay", 15),
    summary:
      "Comfortable single-level living—easy flow from kitchen to great room to covered patio for everyday life.",
  },
  ironside: {
    builder: "swanson",
    slug: "ironside",
    name: "Ironside",
    sqft: "2,150 sq ft",
    status: "sold",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "ironside"),
    gallery: gen("swanson", "ironside", 22),
    summary:
      "A proven favorite with an airy great room, fireplace focal point, and a private primary suite retreat.",
  },
  windsor: {
    builder: "swanson",
    slug: "windsor",
    name: "Windsor",
    sqft: "2,340 sq ft",
    status: "sold",
    beds: 4, baths: 3, garage: "2-car",
    hero: hero("swanson", "windsor"),
    gallery: gen("swanson", "windsor", 16),
    summary:
      "Classic curb appeal, comfortable upstairs secondary bedrooms, and a main-level layout that just works.",
  },
  york: {
    builder: "swanson",
    slug: "york",
    name: "York",
    sqft: "2,000 sq ft",
    status: "coming-soon",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "york"),
    gallery: gen("swanson", "york", 14),
    summary:
      "Efficient footprint with big-feeling living spaces—ideal for a first home or right-sized living.",
  },
  ravenglass: {
    builder: "swanson",
    slug: "ravenglass",
    name: "Ravenglass",
    sqft: "2,100–2,300 sq ft",
    status: "under-construction",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "ravenglass"),
    gallery: gen("swanson", "ravenglass", 19),
    summary:
      "Flexible plan range with optional bonus and a covered back deck that frames Bella Vista’s wooded views.",
  },

  // Timeless / Milagro
  brecknock: {
    builder: "timeless",
    slug: "brecknock",
    name: "Brecknock",
    sqft: "≈2,000 sq ft",
    status: "coming-soon",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("timeless", "brecknock"),
    gallery: gen("timeless", "brecknock", 12),
    summary:
      "Clear, functional layout with a central kitchen, bright dining, and an inviting great room.",
  },
  havensworth: {
    builder: "timeless",
    slug: "havensworth",
    name: "Havensworth",
    sqft: "≈2,000 sq ft",
    status: "coming-soon",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("timeless", "havensworth"),
    gallery: gen("timeless", "havensworth", 10),
    summary:
      "Comfortable single-level living and a calm, cohesive finish palette designed for everyday ease.",
  },
};

// getters
export const getBuilder = (key: BuilderKey) => BUILDERS[key];
export const getPlan = (slug: PlanKey) => PLANS[slug];
export const getPlansByBuilder = (key: BuilderKey) =>
  Object.values(PLANS).filter(p => p.builder === key);
export const byStatus = (status: PlanStatus) =>
  Object.values(PLANS).filter(p => p.status === status);
export function groupedByBuilder() {
  return {
    swanson: getPlansByBuilder("swanson"),
    timeless: getPlansByBuilder("timeless"),
  };
}
