export type BuilderKey = "timeless-homes";
export type PlanKey = "brecknock" | "havensworth";

export type GalleryImage = { src: string; alt?: string };
export type Plan = {
  builder: BuilderKey;
  key: PlanKey;
  name: string;
  sqft?: string;
  beds?: string;
  baths?: string;
  images: GalleryImage[];
  disclaimer?: string;
};

export const PLANS: Plan[] = [
  {
    builder: "timeless-homes",
    key: "brecknock",
    name: "Brecknock",
    sqft: "≈ 2,000 sq ft",
    beds: "3–4",
    baths: "2",
    images: [],
    disclaimer: "Plans, materials, and selections may change at the builder’s discretion."
  },
  {
    builder: "timeless-homes",
    key: "havensworth",
    name: "Havensworth",
    sqft: "≈ 2,000 sq ft",
    beds: "3–4",
    baths: "2–3",
    images: [
  { src: "/images/timeless-homes/brecknock/1.jpg", alt: "Brecknock front elevation" },
  { src: "/images/timeless-homes/brecknock/2.jpg", alt: "Brecknock kitchen" },
  { src: "/images/timeless-homes/brecknock/3.jpg", alt: "Brecknock living room" }
]
,
    disclaimer: "Plans, materials, and selections may change at the builder’s discretion."
  }
];

export function getPlansByBuilder(builder: BuilderKey) {
  return PLANS.filter(p => p.builder === builder);
}
export function getPlan(builder: BuilderKey, plan: PlanKey) {
  return PLANS.find(p => p.builder === builder && p.key === plan);
}
