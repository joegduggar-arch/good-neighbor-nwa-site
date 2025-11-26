// src/lib/idx.ts

export type IdxLink = {
  label: string;
  href: string;
};

// Links used by the Property Search dropdown in the navbar
export const IDX_LINKS: IdxLink[] = [
  {
    label: "Search Properties",
    href: "/search", // our internal search page
  },
];