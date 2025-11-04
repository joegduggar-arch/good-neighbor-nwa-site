"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`transition text-sm font-medium ${
        pathname === href ? "text-brand-gold" : "text-white hover:text-brand-gold"
      }`}
      onClick={() => setMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Good Neighbor Realty Logo" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <span className="font-semibold text-lg">Good Neighbor Realty</span>
            <span className="text-brand-gold text-sm block">• NWA</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/idx">IDX Search</NavLink>
          <NavLink href="/client-portal">Client Portal</NavLink>
          <NavLink href="/agents">Agents</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          {/* Office phone */}
          <a
            href="tel:4797139565"
            className="ml-4 rounded-md bg-brand-gold px-3 py-1 text-black font-semibold hover:bg-yellow-400 transition"
          >
            (479) 713-9565
          </a>
        </div>

        {/* Mobile menu button (text icons so no dependency) */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="text-2xl leading-none select-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800 py-3 px-4 space-y-3">
          <NavLink href="/idx">IDX Search</NavLink>
          <NavLink href="/client-portal">Client Portal</NavLink>
          <NavLink href="/agents">Agents</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <a
            href="tel:4797139565"
            className="block text-center rounded-md bg-brand-gold px-3 py-2 text-black font-semibold hover:bg-yellow-400 transition"
          >
            Call (479) 713-9565
          </a>
        </div>
      )}
    </nav>
  );
}
