"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BUILDERS_MENU } from "@/lib/floorplans";

export default function NavbarClient() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // close on click outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const t = e.target as Node;
      if (!menuRef.current || !buttonRef.current) return;
      if (menuRef.current.contains(t) || buttonRef.current.contains(t)) return;
      setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      {/* Left: logo + brand */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Good Neighbor Realty"
          width={44}
          height={44}
          priority
        />
        <span className="text-white font-semibold">
          Good Neighbor Realty • NWA
        </span>
      </Link>

      {/* Right: desktop nav */}
      <div className="hidden items-center gap-8 md:flex">
        {/* Properties dropdown (click to toggle / persistent) */}
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={open}
            className="font-medium text-white hover:opacity-90"
          >
            Properties
          </button>

          {/* Panel */}
          {open && (
            <div
              ref={menuRef}
              role="menu"
              aria-label="Properties"
              className="absolute right-0 z-40 mt-3 w-80 rounded-lg border border-neutral-800 bg-neutral-900 p-3 text-neutral-100 shadow-xl"
            >
              <div className="px-3 py-2 text-sm uppercase tracking-wide text-neutral-400">
                Builders
              </div>

              {BUILDERS_MENU.length === 0 ? (
                <div className="px-3 py-2 text-neutral-400">
                  No builders yet.
                </div>
              ) : (
                <ul className="divide-y divide-neutral-800" role="none">
                  {BUILDERS_MENU.map((b) => (
                    <li key={b.slug} role="none">
                      <Link
                        role="menuitem"
                        href={`/builders/${b.slug}`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-800"
                        onClick={() => setOpen(false)}
                      >
                        <Image
                          src={b.logo}
                          alt={b.name}
                          width={28}
                          height={28}
                          className="h-[28px] w-[28px] object-contain"
                        />
                        <span>{b.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <Link href="/agents" className="font-medium text-white hover:opacity-90">
          Agents
        </Link>
        <Link
          href="/contact"
          className="font-medium text-white hover:opacity-90"
        >
          Contact
        </Link>

        {/* Phone (kept visible like you wanted) */}
        <a
          href="tel:+14797139565"
          className="rounded-md border border-neutral-700 px-3 py-1.5 text-sm text-white hover:bg-neutral-800"
        >
          (479) 713-9565
        </a>
      </div>
    </nav>
  );
}