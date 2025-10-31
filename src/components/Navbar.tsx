"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Good Neighbor Realty Logo"
              className="h-10 w-auto"
            />
            <span className="font-semibold text-lg tracking-wide">
              Good Neighbor Realty • NWA
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/idx"
            className="hover:text-brand-gold transition text-sm font-medium"
          >
            IDX Search
          </Link>
          <Link
            href="/client-portal"
            className="hover:text-brand-gold transition text-sm font-medium"
          >
            Client Portal
          </Link>
          <Link
            href="/agents"
            className="hover:text-brand-gold transition text-sm font-medium"
          >
            Agents
          </Link>
          <Link
            href="/contact"
            className="hover:text-brand-gold transition text-sm font-medium"
          >
            Contact
          </Link>

          {/* Office Phone (Prominent on Desktop) */}
          <Link
            href="tel:4797139565"
            className="text-brand-gold font-semibold text-lg hover:text-white transition"
          >
            📞 (479) 713-9565
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-black border-t border-zinc-700 text-center pb-4">
          <Link
            href="/idx"
            className="block py-3 text-sm hover:text-brand-gold transition"
            onClick={() => setMenuOpen(false)}
          >
            IDX Search
          </Link>
          <Link
            href="/client-portal"
            className="block py-3 text-sm hover:text-brand-gold transition"
            onClick={() => setMenuOpen(false)}
          >
            Client Portal
          </Link>
          <Link
            href="/agents"
            className="block py-3 text-sm hover:text-brand-gold transition"
            onClick={() => setMenuOpen(false)}
          >
            Agents
          </Link>
          <Link
            href="/contact"
            className="block py-3 text-sm hover:text-brand-gold transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Phone Number */}
          <div className="mt-3 border-t border-zinc-700 pt-3">
            <Link
              href="tel:4797139565"
              className="block text-brand-gold font-medium text-lg hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              📞 (479) 713-9565
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
