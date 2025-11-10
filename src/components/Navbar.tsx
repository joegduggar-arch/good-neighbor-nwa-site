// src/components/Navbar.tsx
import NavbarClient from "./NavbarClient";
import { BUILDERS_MENU } from "@/lib/floorplans";

export default function Navbar() {
  const brand = {
    name: "Good Neighbor Realty • NWA",
    logo: "/logo.png",
    href: "/",
  };

  const phone = "(479) 713-9565";

  const links = [
    { label: "Agents", href: "/agents" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <NavbarClient
      phone={phone}
      builders={BUILDERS_MENU}
      brand={brand}
      links={links}
    />
  );
}