"use client";

import Link from "next/link";
import Image from "next/image";

// Tiny inline SVG so we don't depend on lucide-react
function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.69.63 2.48a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.6-1.2a2 2 0 0 1 2.11-.45c.79.3 1.62.51 2.48.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="bg-black text-white border-b border-brand-gold/40 sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo + wordmark */}
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/search" className="hover:text-brand-gold transition-colors">
            IDX Search
          </Link>
          <Link href="/portal" className="hover:text-brand-gold transition-colors">
            Client Portal
          </Link>
          <Link href="/agents" className="hover:text-brand-gold transition-colors">
            Agents
          </Link>
          <Link href="/contact" className="hover:text-brand-gold transition-colors">
            Contact
          </Link>

          {/* Phone icon button */}
          <a
            href="tel:4797139565"
            title="(479) 713-9565"
            className="flex items-center justify-center rounded-md bg-brand-gold p-2 text-black hover:bg-yellow-400 transition"
            aria-label="Call Good Neighbor Realty"
          >
            <PhoneIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
