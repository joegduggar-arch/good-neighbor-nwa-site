import NavbarClient, { Brand, IdxLink } from "@/components/NavbarClient";

const PHONE = "(479) 713-9565";

const BRAND: Brand = {
  name: "Good Neighbor Realty · NWA",
  logo: "/images/logo.svg", // adjust if yours is different
  href: "/",
};

const IDX_LINKS: IdxLink[] = [
  { label: "Property Search", href: "/property-search" },
  { label: "Agents", href: "/agents" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return <NavbarClient phone={PHONE} brand={BRAND} idxLinks={IDX_LINKS} />;
}