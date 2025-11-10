"use client";

import Link from "next/link";
import Image from "next/image";
import { BUILDERS_MENU } from "@/lib/floorplans";

export default function NavbarClient() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.png" alt="Good Neighbor Realty" width={40} height={40} />
        <span className="font-semibold">Good Neighbor Realty • NWA</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <div className="group relative">
          <button className="font-medium">Properties</button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition
                          absolute right-0 mt-4 w-80 rounded-lg bg-neutral-900 text-neutral-100 p-3 shadow-xl">
            <div className="px-3 py-2 text-sm uppercase tracking-wide text-neutral-400">
              Builders
            </div>
            <ul className="divide-y divide-neutral-800">
              {BUILDERS_MENU.map(b => (
                <li key={b.slug}>
                  <Link
                    href={`/builders/${b.slug}`}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-neutral-800 rounded-md"
                  >
                    <Image src={b.logo} alt={b.name} width={28} height={28} />
                    <span>{b.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="/agents" className="font-medium">Agents</Link>
        <Link href="/contact" className="font-medium">Contact</Link>
      </div>
    </nav>
  );
}