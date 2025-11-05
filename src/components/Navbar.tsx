// src/components/Navbar.tsx
import NavbarClient from "@/components/NavbarClient";

export type NavLink = { href: string; label: string };

const NAV_LINKS: NavLink[] = [
  { href: "/idx", label: "IDX Search" },
  { href: "/client-portal", label: "Client Portal" },
  { href: "/agents", label: "Agents" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return <NavbarClient links={NAV_LINKS} />;
}
