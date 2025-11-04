"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react"; // For phone icon — if you don’t want lucide, I can swap it for emoji

export default function Navbar() {
  return (
    <header className="bg-black text-white border-b border-brand-gold/40 sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3"
          aria-label="Good Neighbor Realty Home"
        >
          <Image
            src="/logo.png"
            alt="Good Neighbor Realty logo"
            width={70}
            height={70}
            className="h-14 w-auto md:h-16 md:w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg leading-tight">
              Good Neighbor Realty
            </span>
            <span className="text-brand-gold text-sm">• NWA</span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link
            href="/search"
            className="hover:text-brand-gold transition-colors"
          >
            IDX Search
          </Link>
          <Link
            href="/portal"
            className="hover:text-brand-gold transition-colors"
          >
            Client Portal
          </Link>
          <Link
            href="/agents"
            className="hover:text-brand-gold transition-colors"
          >
            Agents
          </Link>
          <Link
            href="/contact"
            className="hover:text-brand-gold transition-colors"
          >
            Contact
          </Link>

          {/* Phone icon */}
          <a
            href="tel:4797139565"
            className="flex items-center justify-center rounded-md bg-brand-gold p-2 text-black hover:bg-yellow-400 transition"
            aria-label="Call Good Neighbor Realty"
          >
            <Phone size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
