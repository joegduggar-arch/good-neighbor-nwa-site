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

  // 🧩 Normalize builders to include href
  const builders = BUILDERS_MENU.map((b) => ({
    ...b,
    href: b.href || `/builders/${b.slug}`,
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