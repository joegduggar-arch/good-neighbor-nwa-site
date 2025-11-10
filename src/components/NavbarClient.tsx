// src/components/NavbarClient.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

type BuilderMenuItem = {
  name: string;
  slug: string;
  href: string;
  logo: string;
};

type Brand = {
  name: string;
  logo: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

type Props = {
  phone: string;
  builders: BuilderMenuItem[];
  brand: Brand;
  links: NavLink[];
};

export default function NavbarClient({ phone, builders, brand, links }: Props) {
  return (
    <nav className="flex items-center justify-between py-4">
      {/* Brand */}
      <Link href={brand.href} className="flex items-center gap-3">
        <Image
          src={brand.logo}
          alt={brand.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-semibold">{brand.name}</span>
      </Link>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-8">
        {/* Properties / Builders dropdown */}
        <div className="group relative">
          <button className="font-medium">Properties</button>
          <div
            className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition
                       absolute right-0 mt-4 w-80 rounded-lg bg-neutral-900 text-neutral-100 p-3 shadow-xl"
          >
            <div className="px-3 py-2 text-sm uppercase tracking-wide text-neutral-400">
              Builders
            </div>
            <ul className="divide-y divide-neutral-800">
              {builders.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={b.href}
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

        {/* Static links */}
        {links.map((l) =>
          l.external ? (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium"
            >
              {l.label}
            </a>
          ) : (
            <Link key={l.label} href={l.href} className="font-medium">
              {l.label}
            </Link>
          )
        )}

        {/* Phone */}
        <a href={`tel:${phone.replace(/[^\d]/g, "")}`} className="font-semibold">
          {phone}
        </a>
      </div>
    </nav>
  );
}