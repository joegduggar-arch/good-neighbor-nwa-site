"use client";

import Link from "next/link";
import Image from "next/image";
import { BUILDERS_MENU } from "@/lib/floorplans";

const IDX_SEARCH_URL = "https://example.com/idx/search"; // ← change to your real IDX search URL

export default function NavbarClient() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Good Neighbor Realty"
            width={40}
            height={40}
            className="h-9 w-9 rounded-full object-contain"
          />
          <span className="text-sm font-semibold tracking-wide">
            Good Neighbor Realty • NWA
          </span>
        </Link>

        {/* Right: Main nav */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Property search mega menu */}
          <div className="relative hidden md:block">
            <div className="group inline-flex">
              <button
                type="button"
                className="rounded-full px-3 py-1 text-sm font-medium text-neutral-200 hover:bg-neutral-800"
              >
                Property search
              </button>

              {/* Panel */}
              <div
                className="
                  pointer-events-none absolute left-1/2 top-full z-40 mt-3 hidden
                  w-[760px] -translate-x-1/2 rounded-2xl border border-neutral-800
                  bg-neutral-900/95 p-5 text-sm shadow-2xl
                  group-hover:pointer-events-auto group-hover:block
                "
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Left column – Get started */}
                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                      Get started
                    </p>
                    <div className="mt-3 space-y-3">
                      {/* Search homes */}
                      <Link
                        href={IDX_SEARCH_URL}
                        target="_blank"
                        className="block rounded-xl bg-neutral-800/90 px-4 py-3 hover:bg-neutral-700"
                      >
                        <div className="text-sm font-semibold text-neutral-50">
                          Search homes
                        </div>
                        <p className="mt-1 text-xs text-neutral-300">
                          City, address, MLS # — find your next place fast.
                        </p>
                      </Link>

                      {/* New construction */}
                      <Link
                        href="/new-construction"
                        className="block rounded-xl bg-neutral-800/90 px-4 py-3 hover:bg-neutral-700"
                      >
                        <div className="text-sm font-semibold text-neutral-50">
                          New construction
                        </div>
                        <p className="mt-1 text-xs text-neutral-300">
                          Explore upcoming communities and floorplans.
                        </p>
                      </Link>
                    </div>
                  </section>

                  {/* Right column – Builders we represent */}
                  <section>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                      Builders we represent
                    </p>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {BUILDERS_MENU.map((b) => (
                        <Link
                          key={b.slug}
                          href={`/builders/${b.slug}`}
                          className="flex items-center gap-3 rounded-xl bg-neutral-800/90 px-4 py-3 hover:bg-neutral-700"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950">
                            <Image
                              src={b.logo}
                              alt={b.name}
                              width={28}
                              height={28}
                              className="h-7 w-7 object-contain"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-semibold text-neutral-50">
                              {b.name}
                            </span>
                            <span className="text-[11px] text-neutral-300">
                              Floorplans & current builds.
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Footer line */}
                <p className="mt-4 text-[11px] text-neutral-400">
                  Looking for something specific?{" "}
                  <Link
                    href="/contact"
                    className="underline underline-offset-2 hover:text-neutral-200"
                  >
                    Tell us what you need.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Simple desktop links */}
          <Link href="/agents" className="hidden text-sm text-neutral-200 md:inline-block hover:text-white">
            Agents
          </Link>
          <Link href="/contact" className="hidden text-sm text-neutral-200 md:inline-block hover:text-white">
            Contact
          </Link>

          {/* Phone button */}
          <a
            href="tel:+14797139565"
            className="hidden rounded-full border border-neutral-700 px-4 py-1 text-sm font-medium text-neutral-100 hover:border-neutral-500 md:inline-block"
          >
            (479) 713-9565
          </a>

          {/* Mobile: simple links, no mega menu for now */}
          <Link
            href="/property-search"
            className="text-sm text-neutral-200 md:hidden"
          >
            Search
          </Link>
        </div>
      </nav>
    </header>
  );
}
