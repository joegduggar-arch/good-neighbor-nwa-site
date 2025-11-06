// src/lib/floorplans.ts
import type { Metadata } from "next";

export type BuilderKey = "swanson" | "timeless";
export type PlanKey =
  | "donington" | "brittany" | "hambleton" | "castlebay" | "ironside"
  | "windsor" | "york" | "ravenglass"
  | "brecknock" | "havensworth";

export interface Plan {
  builder: BuilderKey;
  slug: PlanKey;
  name: string;
  sqft: string;
  beds?: number;
  baths?: number;
  garage?: string;
  hero: string;          // public image path
  gallery: string[];     // more images
  summary: string;
}

export interface BuilderInfo {
  key: BuilderKey;
  name: string;
  logo: string;          // public image path
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

const P = (p: Partial<Plan>) => p as Plan;

// Helper for quick placeholder bundles
const hero = (b: BuilderKey, s: string) => `/images/floorplans/${b}/${s}/hero.jpg`;
const img  = (b: BuilderKey, s: string, n: number) => `/images/floorplans/${b}/${s}/${n}.jpg`;

export const PLANS: Record<PlanKey, Plan> = {
  // --- Swanson ---
  donington: P({
    builder: "swanson",
    slug: "donington",
    name: "Donington",
    sqft: "2,460 sq ft",
    beds: 4, baths: 3, garage: "2-car",
    hero: hero("swanson", "donington"),
    gallery: [img("swanson","donington",1), img("swanson","donington",2), img("swanson","donington",3)],
    summary:
      "A well-balanced two-story with a generous great room, covered outdoor living, and a convenient main-level suite.",
  }),
  brittany: P({
    builder: "swanson",
    slug: "brittany",
    name: "Brittany",
    sqft: "2,300 sq ft",
    beds: 4, baths: 3, garage: "2-car",
    hero: hero("swanson", "brittany"),
    gallery: [img("swanson","brittany",1), img("swanson","brittany",2)],
    summary:
      "Bright gathering spaces, practical storage, and a cooks-forward kitchen centered around an island workspace.",
  }),
  hambleton: P({
    builder: "swanson",
    slug: "hambleton",
    name: "Hambleton",
    sqft: "2,316 sq ft",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "hambleton"),
    gallery: [img("swanson","hambleton",1), img("swanson","hambleton",2)],
    summary:
      "Open main living with a defined dining nook, split bedrooms, and a flexible front room for office or guest.",
  }),
  castlebay: P({
    builder: "swanson",
    slug: "castlebay",
    name: "Castlebay",
    sqft: "2,060 sq ft",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "castlebay"),
    gallery: [img("swanson","castlebay",1), img("swanson","castlebay",2)],
    summary:
      "Comfortable single-level living—easy flow from kitchen to great room to covered patio for everyday life.",
  }),
  ironside: P({
    builder: "swanson",
    slug: "ironside",
    name: "Ironside",
    sqft: "2,150 sq ft",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "ironside"),
    gallery: [img("swanson","ironside",1), img("swanson","ironside",2)],
    summary:
      "A proven favorite with an airy great room, fireplace focal point, and a private primary suite retreat.",
  }),
  windsor: P({
    builder: "swanson",
    slug: "windsor",
    name: "Windsor",
    sqft: "2,340 sq ft",
    beds: 4, baths: 3, garage: "2-car",
    hero: hero("swanson", "windsor"),
    gallery: [img("swanson","windsor",1), img("swanson","windsor",2)],
    summary:
      "Classic curb appeal, comfortable upstairs secondary bedrooms, and a main-level layout that just works.",
  }),
  york: P({
    builder: "swanson",
    slug: "york",
    name: "York",
    sqft: "2,000 sq ft",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "york"),
    gallery: [img("swanson","york",1), img("swanson","york",2)],
    summary:
      "Efficient footprint with big-feeling living spaces—ideal for a first home or right-sized living.",
  }),
  ravenglass: P({
    builder: "swanson",
    slug: "ravenglass",
    name: "Ravenglass",
    sqft: "2,100–2,300 sq ft",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("swanson", "ravenglass"),
    gallery: [img("swanson","ravenglass",1), img("swanson","ravenglass",2)],
    summary:
      "Flexible plan range with optional bonus and a covered back deck that frames Bella Vista’s wooded views.",
  }),

  // --- Timeless / Milagro ---
  brecknock: P({
    builder: "timeless",
    slug: "brecknock",
    name: "Brecknock",
    sqft: "≈2,000 sq ft",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("timeless", "brecknock"),
    gallery: [img("timeless","brecknock",1), img("timeless","brecknock",2)],
    summary:
      "Clear, functional layout with a central kitchen, bright dining, and an inviting great room.",
  }),
  havensworth: P({
    builder: "timeless",
    slug: "havensworth",
    name: "Havensworth",
    sqft: "TBD",
    beds: 3, baths: 2, garage: "2-car",
    hero: hero("timeless", "havensworth"),
    gallery: [img("timeless","havensworth",1), img("timeless","havensworth",2)],
    summary:
      "Comfortable single-level living and a calm, cohesive finish palette designed for everyday ease.",
  }),
};

// Convenience getters
export const getBuilder = (key: BuilderKey) => BUILDERS[key];
export const getPlan = (slug: PlanKey) => PLANS[slug];
export const getPlansByBuilder = (key: BuilderKey) =>
  Object.values(PLANS).filter(p => p.builder === key);
