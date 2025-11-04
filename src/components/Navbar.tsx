"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  return (
    <header className="border-b border-brand-gold/30 bg-brand-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-3 md:p-4">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Good Neighbor Realty - Home"
        >
          <Image
            src="/logo.png"
            alt="Good Neighbor Realty logo"
            width={120}
            height={120}
            priority
          />
          <span className="hidden md:inline text-lg font-semibold tracking-wide">
            <span className="pr-1">Good Neighbor Realty</span>
            <span className="text-brand-gold">• NWA</span>
          </span>
        </Link>

        {/* Nav items */}
        <nav className="flex gap-2 text-sm">
          {/* IMPORTANT: these use your actual routes */}
          <NavLink href="/search">IDX Search</NavLink>
          <NavLink href="/portal">Client Portal</NavLink>
          <NavLink href="/agents">Agents</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "rounded px-3 py-1 transition",
        "hover:bg-white/10 hover:text-brand-gold"
      )}
    >
      {children}
    </Link>
  );
}
