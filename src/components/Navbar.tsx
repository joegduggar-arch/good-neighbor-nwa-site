import NavbarClient from "./NavbarClient";

const BUILDERS = [
  { name: "Timeless Homes", slug: "timeless-homes", logo: "/logos/timeless.svg", href: "/builders/timeless-homes" },
  { name: "Dream Built Homes", slug: "dream-built-homes", logo: "/logos/dreambuilt.svg", href: "/builders/dream-built-homes" }
];

const BRAND = { name: "Good Neighbor Realty • NWA", logo: "/logo.svg", href: "/" };

const LINKS = [
  { label: "New Construction", href: "/new-construction" },
  { label: "Agents", href: "/agents" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  return (
    <NavbarClient
      phone="(479) 713-9565"
      brand={BRAND}
      builders={BUILDERS}
      links={LINKS}
    />
  );
}
