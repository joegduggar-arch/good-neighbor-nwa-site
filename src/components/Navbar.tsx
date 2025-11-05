// src/components/Navbar.tsx
import NavbarClient from "./NavbarClient";

// You can move this list to lib/data.ts later if you prefer.
// `logo` can be left undefined — the client will render initials.
const BUILDERS = [
  {
    name: "Dream Built Custom Homes",
    slug: "dream-built",
    logo: "/images/builders/dream-built.png",
    href: "/builders/dream-built",
  },
  {
    name: "Milagro Designs",
    slug: "milagro-designs",
    logo: "/images/builders/milagro-designs.png",
    href: "/builders/milagro-designs",
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
