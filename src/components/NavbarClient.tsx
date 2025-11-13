"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type BuilderItem = { name: string; slug: string; logo: string; href: string };
type Brand = { name: string; logo: string; href: string };
type NavLink = { label: string; href: string };
type IdxLink = { label: string; href: string; external?: boolean };

type Props = {
  phone: string;
  brand: Brand;
  builders: BuilderItem[];
  idxLinks: IdxLink[]; // goes in “Property Search” dropdown
  links?: NavLink[];   // any extra top-level links (Agents, Contact, etc)
};

export default function NavbarClient({ phone, brand, builders, idxLinks, links = [] }: Props) {
  // Keep dropdown open while pointer is over the button or panel
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // Small delay to allow moving from button → panel without flicker
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <nav className="container flex items-center justify-between py-3">
        {/* Brand */}
        <Link href={brand.href} className="flex items-center gap-3">
          <Image src={brand.logo} alt={brand.name} width={44} height={44} />
          <span className="font-semibold tracking-tight">{brand.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Property Search (sticky-open dropdown) */}
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open}
              className="font-medium"
            >
              Property Search
            </button>

            {/* Panel */}
            {open && (
              <div
                className="absolute right-0 mt-4 w-[680px] rounded-xl bg-neutral-900 text-neutral-100 p-4 ring-1 ring-neutral-800 shadow-xl"
                role="menu"
                aria-label="Property Search"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* IDX column */}
                  <section className="rounded-lg bg-neutral-900/60 ring-1 ring-neutral-800 p-3">
                    <div className="px-1 pb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      IDX Search
                    </div>
                    <ul className="space-y-1">
                      {idxLinks.map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            className="block rounded-md px-2 py-2 hover:bg-neutral-800"
                            target={l.external ? "_blank" : undefined}
                            rel={l.external ? "noreferrer noopener" : undefined}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Builders column */}
                  <section className="rounded-lg bg-neutral-900/60 ring-1 ring-neutral-800 p-3">
                    <div className="px-1 pb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Builders
                    </div>
                    <ul className="divide-y divide-neutral-800">
                      {builders.map((b) => (
                        <li key={b.slug}>
                          <Link
                            href={b.href}
                            className="flex items-center gap-3 px-2 py-2 hover:bg-neutral-800 rounded-md"
                          >
                            <Image src={b.logo} alt={b.name} width={28} height={28} />
                            <span>{b.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            )}
          </div>

          {/* Any extra top-level links you still want (Agents, Contact, etc.) */}
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-medium">
              {l.label}
            </Link>
          ))}

          {/* Phone */}
          <a href="tel:+14797139565" className="text-sm text-neutral-400 hover:text-neutral-200 transition">
            {phone}
          </a>
        </div>
      </nav>
    </header>
  );
}
