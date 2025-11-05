// src/components/NavbarClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "./Navbar";

export default function NavbarClient({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/15 bg-neutral-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        {/* Left: Logo + lockup */}
        <Link
          href="/"
          className="group flex items-center gap-3 md:gap-4"
          aria-label="Good Neighbor Realty home"
        >
          {/* Bigger logo */}
          <div className="relative h-12 w-12 md:h-16 md:w-16">
            {/* Make sure /public/logo.png exists (you already have it) */}
            <Image
              src="/logo.png"
              alt="Good Neighbor Realty"
              fill
              sizes="64px"
              className="rounded-full object-contain"
              priority
            />
          </div>

          {/* Text lockup */}
          <div className="leading-tight">
            <div className="text-base font-semibold text-white md:text-lg">
              Good Neighbor Realty{" "}
              <span className="text-yellow-500">•</span>{" "}
              <span className="text-yellow-500">NWA</span>
            </div>
          </div>
        </Link>

        {/* Right: desktop links + phone CTA */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-200 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}

          {/* Phone (kept as-is) */}
          <a
            href="tel:+14797139565"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1.5 text-sm font-semibold text-yellow-400 transition hover:border-yellow-500/50 hover:bg-yellow-500/15 hover:text-yellow-300"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.5 15.5 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            <span>(479) 713-9565</span>
          </a>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+14797139565"
            className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 p-2 text-yellow-400 transition hover:border-yellow-500/50 hover:bg-yellow-500/15 hover:text-yellow-300"
            aria-label="Call Good Neighbor Realty"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M6.62 10.79a15.5 15.5 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-200 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {!open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`md:hidden ${open ? "block" : "hidden"}`}>
        <div className="space-y-1 border-t border-white/10 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-200 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
