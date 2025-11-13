"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BUILDERS_MENU } from "@/lib/floorplans";

type Brand = {
  name: string;
  logo: string;
  href: string;
};

type IdxLink = {
  label: string;
  href: string;
};

type BuilderMenuItem = {
  name: string;
  slug: string;
  logo: string;
};

type Props = {
  phone: string;
  brand: Brand;
  idxLinks: IdxLink[];
};

export default function NavbarClient({ phone, brand, idxLinks }: Props) {
  const [open, setOpen] = useState(false);

  const builders: BuilderMenuItem[] = BUILDERS_MENU;

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
          <span className="text-sm font-semibold text-neutral-50">
            {brand.name}
          </span>
        </Link>

        {/* Right: Main nav (desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Property Search dropdown (click-to-toggle) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="text-sm font-medium text-neutral-100 hover:text-yellow-300"
            >
              Property Search
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-[480px] rounded-2xl border border-neutral-800 bg-neutral-900/95 p-4 shadow-xl">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Get Started
                </div>

                <div className="grid gap-3">
                  {/* IDX search card(s) */}
                  {idxLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl bg-neutral-800 px-4 py-3 text-sm text-neutral-100 hover:bg-neutral-700"
                    >
                      <div className="font-medium">{link.label}</div>
                      <div className="text-xs text-neutral-400">
                        City, address, MLS # — start your search.
                      </div>
                    </Link>
                  ))}

                  {/* Builders section */}
                  <div className="mt-1 border-t border-neutral-800 pt-3">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Builders We Represent
                    </div>
                    <div className="grid gap-2">
                      {builders.map((b) => (
                        <Link
                          key={b.slug}
                          href={`/builders/${b.slug}`}
                          className="flex items-center gap-3 rounded-xl bg-neutral-800 px-3 py-2 text-sm text-neutral-100 hover:bg-neutral-700"
                        >
                          <Image
                            src={b.logo}
                            alt={b.name}
                            width={28}
                            height={28}
                            className="rounded"
                          />
                          <span>{b.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Other top-level links */}
          <Link
            href="/agents"
            className="text-sm font-medium text-neutral-100 hover:text-yellow-300"
          >
            Agents
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-neutral-100 hover:text-yellow-300"
          >
            Contact
          </Link>

          {/* Phone pill */}
          <a
            href={`tel:${phone.replace(/[^\d]/g, "")}`}
            className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold text-neutral-100 hover:border-yellow-400 hover:text-yellow-300"
          >
            {phone}
          </a>
        </div>
      </nav>
    </header>
  );
}