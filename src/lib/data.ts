// Minimal seed. Add more rows from your map as you go.
// Sources: Swanson House Project Map + Houseplan booklet. 
// (Plans: Ironside, Donington, Brittany, etc.)

export type Home = {
  slug: string;
  title: string;        // e.g., "6 Burghead Pl"
  location: string;     // "Bella Vista, AR"
  plan: string;         // "IRONSIDE" | "DONINGTON" | ...
  beds: string;         // e.g., "3 BR + Office"
  status?: "building" | "listed" | "soon" | "sold" | "under-contract";
  hero: string;
  gallery: string[];
  summary?: string;
  features?: string[];
};

export const homes: Home[] = [
  {
    slug: "6-burghead-pl",
    title: "6 Burghead Pl",
    location: "Bella Vista, AR",
    plan: "IRONSIDE (approx. 2150 sqft)",
    beds: "3 BR + Office",
    status: "sold",
    hero: "/images/placeholders/home-exterior-2.jpg",
    gallery: [
      "/images/placeholders/home-exterior-2.jpg",
      "/images/placeholders/interior-living-2.jpg",
      "/images/placeholders/interior-kitchen-2.jpg",
      "/images/placeholders/interior-fireplace-2.jpg",
    ],
    summary:
      "Thoughtful new construction in the Highlands area of Bella Vista with open living, generous pantry, and covered patio.",
    features: [
      "Open kitchen with island",
      "Owner’s suite with freestanding tub",
      "Covered back deck/patio",
      "Vinyl/tile in wet areas; hardwood in living",
    ],
  },
  {
    slug: "12-ventnor-dr",
    title: "12 Ventnor Dr",
    location: "Bella Vista, AR",
    plan: "IRONSIDE",
    beds: "2 BR + Office + Flex",
    status: "soon",
    hero: "/images/placeholders/featured-1.jpg",
    gallery: [
      "/images/placeholders/featured-1.jpg",
      "/images/placeholders/interior-kitchen-2.jpg",
    ],
  },
  {
    slug: "16-clackmannan-ln",
    title: "16 Clackmannan Ln",
    location: "Bella Vista, AR",
    plan: "DONINGTON",
    beds: "3 BR + Office + Flex",
    status: "building",
    hero: "/images/placeholders/featured-2.jpg",
    gallery: [
      "/images/placeholders/featured-2.jpg",
      "/images/placeholders/interior-living-2.jpg",
    ],
  },
];
// Notes: addresses/plans/status pulled from your current project map; plan specs follow your booklet (Ironside, Donington, Brittany, etc.).
