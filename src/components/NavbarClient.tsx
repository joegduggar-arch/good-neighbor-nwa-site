// src/components/NavbarClient.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BUILDERS_MENU } from "@/lib/floorplans";

export default function NavbarClient() {
  const pathname = usePathname();
  const [open, setOpen] = useState<null | "properties" | "about">(null);

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Good Neighbor Realty"
            className="h-9 w-9 rounded-full"
          />
          <span className="text-base font-semibold text-white">
            Good Neighbor Realty • <span className="text-amber-400">NWA</span>
          </span>
        </Link>

        {/* Right side */}
        <nav className="hidden items-center gap-6 md:flex">
          {/* Properties dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen("properties")}
            onMouseLeave={() => setOpen(null)}
          >
            <button
              className={`text-sm ${
                isActive("/floorplans") || isActive("/builders")
                  ? "text-amber-400"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              Properties
            </button>

            {open === "properties" && (
              <div className="absolute right-0 mt-3 w-[360px] rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-xl">
                <div className="mb-3 text-xs uppercase tracking-wide text-neutral-400">
                  Search & Browse
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/floorplans"
                    className="rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900"
                  >
                    New Construction
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900"
                  >
                    Contact an Agent
                  </Link>
                </div>

                <div className="mt-4 h-px bg-neutral-800" />

                <div className="mt-4 text-xs uppercase tracking-wide text-neutral-400">
                  Builders
                </div>
                <ul className="mt-2 space-y-2">
                  {BUILDERS_MENU.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/builders/${b.slug}`}
                        className="group flex items-center gap-3 rounded-md p-2 text-sm text-neutral-200 hover:bg-neutral-800"
                      >
                        {b.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={b.logo}
                            alt={b.name}
                            className="h-6 w-6 rounded bg-neutral-100 object-contain"
                          />
                        ) : (
                          <div className="h-6 w-6 rounded bg-neutral-800" />
                        )}
                        <span className="group-hover:text-white">{b.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/agents"
            className={`text-sm ${
              isActive("/agents")
                ? "text-amber-400"
                : "text-neutral-300 hover:text-white"
            }`}
          >
            Agents
          </Link>

          <Link
            href="/contact"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-amber-400"
          >
            (479) 713-9565
          </Link>
        </nav>
      </div>
    </header>
  );
}
