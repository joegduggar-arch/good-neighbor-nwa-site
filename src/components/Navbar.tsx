// src/components/Navbar.tsx
import NavbarClient from "./NavbarClient";
import { BUILDERS_MENU } from "@/lib/floorplans";

/**
 * Types used by NavbarClient
 */
export type BuilderMenuItem = {
  name: string;
  slug: string;
  logo: string;
  href: string;
};

export type Brand = {
  name: string;
  logo: string;
  href: string;
};

export type TopLink = {
  label: string;
  href: string;
};

export default function Navbar() {
  const brand: Brand = {
    name: "Good Neighbor Realty • NWA",
    logo: "/logo.png",
    href: "/",
  };

  const phone = "(479) 713-9565";

  const links: TopLink[] = [
    { label: "Agents", href: "/agents" },
    { label: "Contact", href: "/contact" },
  ];

  // IMPORTANT: normalize to include 'href' (we do NOT read b.href)
  const builders: BuilderMenuItem[] = BUILDERS_MENU.map((b) => ({
    name: b.name,
    slug: b.slug,
    logo: b.logo,
    href: `/builders/${b.slug}`,
  }));

  return (
    <NavbarClient
      phone={phone}
      builders={builders}
      brand={brand}
      links={links}
    />
  );
}