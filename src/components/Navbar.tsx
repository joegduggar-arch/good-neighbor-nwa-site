// src/components/Navbar.tsx
import NavbarClient from "./NavbarClient";

const BUILDERS = [
  {
    name: "Swanson Properties (DreamBuilt Custom Homes)",
    slug: "swanson",
    href: "/floorplans/swanson",
    logo: "/images/logos/swanson.png",
  },
  {
    name: "Timeless Home (Milagro Designs)",
    slug: "timeless",
    href: "/floorplans/timeless",
    logo: "/images/logos/timeless.png",
  },
];

export default function Navbar() {
  return (
    <NavbarClient
      phone="(479) 713-9565"
      builders={BUILDERS}
      brand={{ name: "Good Neighbor Realty • NWA", logo: "/logo.png", href: "/" }}
      links={{
        propertiesLanding: "/new-construction",
        search: "/search",
        agents: "/agents",
        contact: "/contact",
      }}
    />
  );
}
