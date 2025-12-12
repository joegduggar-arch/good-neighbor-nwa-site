// src/lib/floorplans.ts

export type Plan = {
  slug: string;                 // URL slug: /floorplans/timeless-homes/havensworth
  name: string;                 // Display name: "The Havensworth"
  sqftText: string;             // "1,950 sq ft (approx.)" etc
  beds: number;
  baths: number;
  summary: string;              // Short paragraph
  disclaimer?: string;
  // Images are PUBLIC paths starting with "/"
  // Example: "/floorplans/timeless-homes/havens-01.jpg"
  images: string[];
};

export type Builder = {
  slug: string;                 // "timeless-homes"
  name: string;                 // "Timeless Homes"
  logoSrc?: string;             // "/logos/timeless-homes.png" (or .webp)
  intro: string;                // Builder intro paragraph
  plans: Plan[];
};

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

/**
 * Creates an array of public image paths:
 *   /floorplans/{builder}/{prefix}-{01..count}.{ext}
 *
 * This does NOT check if files exist — the UI uses <img onError> to hide missing files.
 */
export function buildNumberedImages(opts: {
  builderSlug: string;
  prefix: string;     // "havens" or "brecknock"
  count: number;      // up to 50
  ext?: "jpg" | "jpeg" | "png" | "webp";
}): string[] {
  const ext = opts.ext ?? "jpg";
  return Array.from({ length: opts.count }, (_, i) => {
    const num = pad2(i + 1);
    return `/floorplans/${opts.builderSlug}/${opts.prefix}-${num}.${ext}`;
  });
}

/**
 * Use this for mixed extensions / “holes” in numbering.
 * Provide the exact filenames you have.
 */
export function exactImages(builderSlug: string, filenames: string[]): string[] {
  return filenames.map((f) => `/floorplans/${builderSlug}/${f}`);
}

const builders: Builder[] = [
  {
    slug: "timeless-homes",
    name: "Timeless Homes",
    logoSrc: "/logos/timeless-homes.png", // <-- make sure this exists in /public/logos/
    intro:
      "Quality new-construction homes with thoughtful layouts and attention to detail. For current availability, reach out to Good Neighbor Realty and we’ll walk you through options, pricing, and timelines.",
    plans: [
      {
        slug: "havensworth",
        name: "The Havensworth",
        sqftText: "1,950 sq ft (approx.)",
        beds: 3,
        baths: 2,
        summary:
          "A comfortably sized 3-bed, 2-bath plan in the 1,950–2,050 sq ft range with an open main living area and generous kitchen. Bedrooms are positioned for privacy while keeping the home feeling bright and efficient.",
        disclaimer:
          "Renderings and specifications are for illustration only and may vary slightly from the final build.",
        // You said your files are named havens-01.jpg, havens-02.jpg, etc.
        // If you have mixed .jpg/.jpeg like your screenshot shows, use exactImages.
        images: exactImages("timeless-homes", [
          "havens-01.jpg",
          "havens-02.jpg",
          "havens-03.jpg",
          "havens-04.jpg",
          // if you do NOT have havens-05, skip it
          "havens-06.jpeg",
          "havens-07.jpeg",
          "havens-08.jpeg",
          "havens-09.jpeg",
          // add up to 50 here if you want
        ]),
      },
      {
        slug: "brecknock",
        name: "The Brecknock",
        sqftText: "2,050 sq ft (approx.)",
        beds: 3,
        baths: 2,
        summary:
          "A thoughtfully designed 3-bed, 2-bath plan around 2,050 sq ft with a welcoming entry and a layout that flows well for everyday living and entertaining. Balanced room sizes and practical storage throughout.",
        disclaimer:
          "Renderings and specifications are for illustration only and may vary slightly from the final build.",
        // If your Brecknock photos are brecknock-01.jpg ... and some are .jpeg,
        // list them exactly (best), OR rename them all to .jpg.
        images: exactImages("timeless-homes", [
          // Put your REAL filenames here. Example based on your screenshot:
          "brecknock-19.jpg",
          "brecknock-20.jpg",
          "brecknock-21.jpg",
          "brecknock-22.jpg",
          "brecknock-23.jpg",
          "brecknock-24.jpg",
          "brecknock-25.jpg",
          "brecknock-26.jpg",
          "brecknock-27.jpeg",
          // add the earlier ones too (brecknock-01.jpg...) if they exist
        ]),
      },
    ],
  },
];

export function getBuilders(): Builder[] {
  return builders;
}

export function getBuilder(builderSlug: string): Builder | undefined {
  return builders.find((b) => b.slug === builderSlug);
}

export function getPlansByBuilder(builderSlug: string): Plan[] {
  return getBuilder(builderSlug)?.plans ?? [];
}

export function getPlan(builderSlug: string, planSlug: string): Plan | undefined {
  return getBuilder(builderSlug)?.plans.find((p) => p.slug === planSlug);
}