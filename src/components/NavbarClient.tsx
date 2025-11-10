// src/components/NavbarClient.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type BuilderMenuItem = {
  name: string;
  slug: string;   // we'll build the href from this
  logo: string;   // public path, e.g. "/logos/timeless-homes.png"
};

type NavLink = { label: string; href: string };

type Brand = {
  name: string;
  logo: string;   // public path, e.g. "/logo.png"
  href: string;   // usually "/"
};

type Props = {
  phone?: string;
  brand: Brand;
  builders: BuilderMenuItem[];
  links: NavLink[];
};

export default function NavbarClient({ phone, brand, builders, links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <Link href={brand.href} className="flex items-center gap-3">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={40}
            height={40}
            priority
          />
          <span className="font-semibold text-neutral-100">
            {brand.name}
          </span>
        </Link>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          {/* Properties / Builders menu */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="text-neutral-200 hover:text-white font-medium"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              Properties
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-3 w-80 rounded-lg bg-neutral-900 text-neutral-100 shadow-xl ring-1 ring-black/10 overflow-hidden"
              >
                <div className="px-4 py-2 text-sm uppercase tracking-wide text-neutral-400">
                  Builders
                </div>
                <ul className="divide-y divide-neutral-800">
                  {builders.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/builders/${b.slug}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-800 transition"
                      >
                        <Image
                          src={b.logo}
                          alt={b.name}
                          width={28}
                          height={28}
                        />
                        <span>{b.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {links.length > 0 && (
                  <>
                    <div className="px-4 py-2 text-sm uppercase tracking-wide text-neutral-400">
                      Quick Links
                    </div>
                    <ul className="pb-2">
                      {links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className="block px-4 py-2 hover:bg-neutral-800 transition"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Extra nav links (non-dropdown) */}
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-neutral-200 hover:text-white font-medium"
            >
              {l.label}
            </Link>
          ))}

          {/* Phone */}
          {phone && (
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-md bg-amber-500/90 hover:bg-amber-500 text-black font-semibold px-3 py-1.5"
            >
              {phone}
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}