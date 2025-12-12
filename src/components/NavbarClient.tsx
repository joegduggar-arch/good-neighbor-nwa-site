// src/components/NavbarClient.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { BUILDERS_MENU } from "@/lib/floorplans";

export default function NavbarClient() {
  return (
    <nav className="w-full bg-black/70 backdrop-blur text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-semibold tracking-wide">Good Neighbor Realty • NWA</span>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/search" className="hover:opacity-80">
            Property Search
          </Link>
          <Link href="/agents" className="hover:opacity-80">
            Agents
          </Link>
          <Link href="/contact" className="hover:opacity-80">
            Contact
          </Link>
          <a href="tel:+14797139565" className="hover:opacity-80">
            (479) 713-9565
          </a>
        </div>
      </div>

      {/* Builders strip (optional, but matches your builder links use-case) */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center gap-4 overflow-x-auto">
          <span className="text-xs text-white/70 whitespace-nowrap">Builders We Represent</span>

          {BUILDERS_MENU.map((b) => (
            <Link
              key={b.slug}
              href={`/builders/${b.slug}`}
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10 whitespace-nowrap"
            >
              {b.logo ? (
                <Image
                  src={b.logo}
                  alt={b.name}
                  width={72}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              ) : null}
              <span className="text-sm">{b.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}