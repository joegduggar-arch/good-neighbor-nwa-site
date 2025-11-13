"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUILDERS_MENU } from "@/lib/floorplans";

type BuilderMenuItem = (typeof BUILDERS_MENU)[number];

type Props = {
  phone: string;
  brand: { name: string; logo: string; href: string };
  builders?: BuilderMenuItem[]; // kept optional so Navbar.tsx props still type-check
  idxLinks: { label: string; href: string }[];
};

export default function NavbarClient({ phone, brand, idxLinks }: Props) {
  const [open, setOpen] = useState(false);

  const searchLink = idxLinks[0] ?? { label: "Search homes", href: "#" };
  const newConstructionHref = "/builders/timeless-homes";

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Left: Brand */}
        <Link href={brand.href} className="flex items-center gap-3">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-sm font-semibold tracking-wide text-neutral-50">
            {brand.name}
          </span>
        </Link>

        {/* Right: Links + phone */}
        <div className="flex items-center gap-6 text-sm text-neutral-100">
          {/* Property Search dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="rounded-full border border-neutral-700 px-4 py-1.5 text-sm font-medium hover:border-neutral-500 hover:bg-neutral-900"
            >
              Property Search
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-[520px] max-w-[90vw] rounded-2xl border border-neutral-800 bg-neutral-900/95 p-4 shadow-xl">
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Left column: search actions */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Get started
                    </p>
                    <div className="mt-3 space-y-3">
                      {/* Search homes */}
                      <Link
                        href={searchLink.href}
                        className="block rounded-xl bg-neutral-800 px-3 py-3 hover:bg-neutral-700"
                      >
                        <div className="text-sm font-semibold">
                          {searchLink.label || "Search homes"}
                        </div>
                        <p className="mt-1 text-xs text-neutral-300">
                          City, address, MLS # — find your next place fast.
                        </p>
                      </Link>

                      {/* New construction */}
                      <Link
                        href={newConstructionHref}
                        className="block rounded-xl bg-neutral-800 px-3 py-3 hover:bg-neutral-700"
                      >
                        <div className="text-sm font-semibold">
                          New construction
                        </div>
                        <p className="mt-1 text-xs text-neutral-300">
                          Explore upcoming communities and floorplans.
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* Right column: builders we represent */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Builders we represent
                    </p>
                    <div className="mt-3 space-y-3">
                      {BUILDERS_MENU.map((b) => (
                        <Link
                          key={b.slug}
                          href={b.href}
                          className="flex items-center gap-3 rounded-xl bg-neutral-800 px-3 py-3 hover:bg-neutral-700"
                        >
                          {b.logo && (
                            <Image
                              src={b.logo}
                              alt={b.name}
                              width={32}
                              height={32}
                              className="rounded-md"
                            />
                          )}
                          <div>
                            <div className="text-sm font-semibold">
                              {b.name}
                            </div>
                            {b.subtitle && (
                              <p className="mt-1 text-xs text-neutral-300">
                                {b.subtitle}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-neutral-400">
                  Looking for something specific?{" "}
                  <Link
                    href="/contact"
                    className="font-medium text-yellow-400 hover:text-yellow-300"
                  >
                    Tell us what you need.
                  </Link>
                </p>
              </div>
            )}
          </div>

          {/* Other top-level links */}
          <Link
            href="/agents"
            className="hidden text-sm hover:text-yellow-300 md:inline-block"
          >
            Agents
          </Link>
          <Link
            href="/contact"
            className="text-sm hover:text-yellow-300"
          >
            Contact
          </Link>

          {/* Phone pill */}
          <a
            href={`tel:${phone.replace(/[^\d]/g, "")}`}
            className="hidden rounded-full border border-neutral-700 px-4 py-1.5 text-sm font-semibold hover:border-yellow-500 hover:bg-yellow-500/10 md:inline-block"
          >
            {phone}
          </a>
        </div>
      </nav>
    </header>
  );
}