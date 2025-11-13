import NavbarClient from "./NavbarClient";

const BUILDERS = [
  {
    name: "Timeless Homes",
    slug: "timeless-homes",
    logo: "/logos/timeless.svg",
    href: "/builders/timeless-homes",
  },
  {
    name: "Dream Built Homes",
    slug: "dream-built-homes",
    logo: "/logos/dreambuilt.svg",
    href: "/builders/dream-built-homes",
  },
];

// EDIT THESE to your real IDX endpoints.
// If your vendor gives you full URLs, paste them and set external: true.
const IDX_LINKS = [
  { label: "All Residential", href: "/idx/search/residential" },
  { label: "New Construction", href: "/idx/search/new-construction" },
  { label: "Lots & Land", href: "/idx/search/land" },
  { label: "Open Houses", href: "/idx/search/open-houses" },
  // Example of an external IDX portal URL:
  // { label: "Advanced Search", href: "https://your-idx-vendor.com/your-site/advanced", external: true },
];

const BRAND = {
  name: "Good Neighbor Realty • NWA",
  logo: "/logo.svg",
  href: "/",
};

// New Construction removed from top-level links per your request
const TOP_LINKS = [
  { label: "Agents", href: "/agents" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <NavbarClient
      phone="(479) 713-9565"
      brand={BRAND}
      builders={BUILDERS}
      idxLinks={IDX_LINKS}
      links={TOP_LINKS}
    />
  );
}
