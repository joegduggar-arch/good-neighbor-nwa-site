// src/components/NavbarClient.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Builder = { name: string; slug: string; href: string; logo?: string };

type Props = {
  phone: string;
  builders: Builder[];
  brand: { name: string; logo: string; href: string };
  links: {
    propertiesLanding: string;
    search: string;
    agents: string;
    contact: string;
  };
};

export default function NavbarClient({ phone, builders, brand, links }: Props) {
  const [open, setOpen] = useState<"properties" | null>(null);
  const [mobile, setMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  // Click outside / Esc key to close desktop dropdown
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="sticky top-0 z-50 w-full bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/75 border-b border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href={brand.href} className="flex items-center gap-3">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                <Image
                  src={brand.logo}
                  alt="Good Neighbor Realty"
                  fill
                  sizes="48px"
                  className="rounded-full object-cover ring-1 ring-neutral-700"
                  priority
                />
              </div>
              <span className="text-white font-semibold text-lg sm:text-xl">
                {brand.name}
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Properties mega dropdown */}
            <button
              onClick={() => setOpen((v) => (v === "properties" ? null : "properties"))}
              className="text-sm font-medium text-neutral-200 hover:text-white focus:outline-none"
              aria-haspopup="true"
              aria-expanded={open === "properties"}
            >
              Properties
            </button>

            <Link href={links.agents} className="text-sm font-medium text-neutral-200 hover:text-white">
              Agents
            </Link>

            <Link href={links.contact} className="text-sm font-medium text-neutral-200 hover:text-white">
              Contact
            </Link>

            {/* Phone */}
            <a
              href={`tel:${phone.replace(/[^\d]/g, "")}`}
              className="ml-2 rounded-full border border-neutral-700 px-3 py-1.5 text-sm font-semibold text-neutral-100 hover:bg-neutral-800"
            >
              {phone}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-neutral-800 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobile((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              {mobile ? (
                <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop mega menu (persistent until click elsewhere) */}
        {open === "properties" && (
          <div
            role="menu"
            aria-label="Properties menu"
            className="hidden md:block border-t border-neutral-800"
          >
            <div className="grid grid-cols-12 gap-8 py-6">
              {/* Column 1 — Quick actions */}
              <div className="col-span-12 md:col-span-4">
                <h3 className="mb-3 text-sm font-semibold text-neutral-300">Get Started</h3>
                <div className="space-y-2">
                  <Link
                    href={links.search}
                    className="block rounded-lg bg-neutral-800 px-4 py-3 text-neutral-100 hover:bg-neutral-700"
                  >
                    Search Homes
                    <p className="mt-1 text-xs text-neutral-300">City, address, MLS # — find your next place fast.</p>
                  </Link>

                  <Link
                    href={links.propertiesLanding}
                    className="block rounded-lg bg-neutral-800 px-4 py-3 text-neutral-100 hover:bg-neutral-700"
                  >
                    New Construction
                    <p className="mt-1 text-xs text-neutral-300">Explore upcoming communities and floorplans.</p>
                  </Link>
                </div>
              </div>

              {/* Column 2 — Builders */}
              <div className="col-span-12 md:col-span-8">
                <h3 className="mb-3 text-sm font-semibold text-neutral-300">Builders We Represent</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {builders.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={b.href}
                        className="group flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-3 hover:border-neutral-600"
                      >
                        <LogoOrInitials name={b.name} logo={b.logo} />
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-neutral-100 group-hover:text-white">
                            {b.name}
                          </div>
                          <div className="text-xs text-neutral-400">Floorplans, specs, and current builds</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs text-neutral-400">
                  Looking for something specific?{" "}
                  <Link href={links.contact} className="underline hover:text-neutral-200">
                    Tell us what you need
                  </Link>{" "}
                  and we’ll match you to active or upcoming homes.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile sheet */}
        {mobile && (
          <div className="md:hidden border-t border-neutral-800">
            <div className="space-y-6 py-6">
              <div>
                <div className="px-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">Properties</div>
                <div className="mt-2 space-y-2 px-2">
                  <Link
                    href={links.search}
                    className="block rounded-lg bg-neutral-800 px-4 py-3 text-neutral-100"
                  >
                    Search Homes
                  </Link>
                  <Link
                    href={links.propertiesLanding}
                    className="block rounded-lg bg-neutral-800 px-4 py-3 text-neutral-100"
                  >
                    New Construction
                  </Link>
                  <div className="rounded-lg border border-neutral-800">
                    <div className="px-4 pt-3 text-xs font-medium text-neutral-400">Builders We Represent</div>
                    <ul className="mt-2 divide-y divide-neutral-800">
                      {builders.map((b) => (
                        <li key={b.slug}>
                          <Link href={b.href} className="flex items-center gap-3 px-4 py-3">
                            <LogoOrInitials name={b.name} logo={b.logo} />
                            <span className="text-sm text-neutral-100">{b.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-2 space-y-2">
                <Link href={links.agents} className="block rounded-lg bg-neutral-800 px-4 py-3 text-neutral-100">
                  Agents
                </Link>
                <Link href={links.contact} className="block rounded-lg bg-neutral-800 px-4 py-3 text-neutral-100">
                  Contact
                </Link>
                <a
                  href={`tel:${phone.replace(/[^\d]/g, "")}`}
                  className="block rounded-lg border border-neutral-700 px-4 py-3 text-center font-semibold text-neutral-100"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

function LogoOrInitials({ name, logo }: { name: string; logo?: string }) {
  if (logo) {
    return (
      <span className="relative h-9 w-9 flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-9 w-9 rounded-md object-cover ring-1 ring-neutral-700"
        />
      </span>
    );
  }
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-800 text-xs font-bold text-neutral-200 ring-1 ring-neutral-700">
      {initials}
    </span>
  );
}
