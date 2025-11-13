import NavbarClient from "./NavbarClient";
import { IDX_LINKS } from "@/lib/idx";

// Centralized configuration for the navbar
const PHONE = "(479) 713-9565";

const BRAND = {
  name: "Good Neighbor Realty • NWA",
  logo: "/logo.png",      // Make sure logo lives in /public/logo.png
  href: "/",
};

export default function Navbar() {
  return (
    <NavbarClient
      phone={PHONE}
      brand={BRAND}
      idxLinks={IDX_LINKS}
    />
  );
}