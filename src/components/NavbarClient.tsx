"use client";

import Image from "next/image";
import Link from "next/link";

export type IdxLink = {
  label: string;
  href: string;
};

export type Brand = {
  name: string;
  logo: string; // e.g. "/images/logo.svg"
  href: string; // e.g. "/"
};

type NavbarClientProps = {
  phone: string;
  brand: Brand;
  idxLinks: IdxLink[];
};

export default function NavbarClient({ phone, brand, idxLinks }: NavbarClientProps) {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href={brand.href} className="flex items-center gap-3">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={44}
            height={44}
            priority
            className="h-10 w-auto"
          />
          <span className="text-white font-semibold tracking-wide">
            {brand.name}
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {idxLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Phone */}
        <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          className="text-white/90 hover:text-white text-sm font-medium whitespace-nowrap"
        >
          {phone}
        </a>
      </div>
    </header>
  );
}