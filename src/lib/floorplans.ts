// src/lib/floorplans.ts

// Slugs we use in URLs for each builder.
export type BuilderSlug = "milagro-designs" | "dream-built";

// Shape of a builder item in the navbar menu.
export type BuilderMenuItem = {
  name: string;
  slug: BuilderSlug;
  href: string;
};

// These are the builders that show up under “Property Search” in the navbar.
// You can tweak the text here any time.
export const BUILDERS_MENU: BuilderMenuItem[] = [
  {
    name: "Timeless Homes (Milagro Designs, LLC)",
    slug: "milagro-designs",
    href: "/builders/milagro-designs",
  },
  {
    name: "Dream Built Custom Homes",
    slug: "dream-built",
    href: "/builders/dream-built",
  },
];

// If you want a simple list of builders elsewhere in the app, you can reuse this.
export const BUILDERS = BUILDERS_MENU;

// Default export (optional, but can be handy)
export default BUILDERS_MENU;
