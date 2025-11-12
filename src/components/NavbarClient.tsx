"use client";
import Image from "next/image";
import Link from "next/link";

type BuilderItem = { name: string; slug: string; logo: string; href: string };
type Brand = { name: string; logo: string; href: string };
type NavLink = { label: string; href: string };

export default function NavbarClient({
  phone, brand, builders, links
}: { phone: string; brand: Brand; builders: BuilderItem[]; links: NavLink[] }) {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <nav className="container flex items-center justify-between py-3">
        <Link href={brand.href} className="flex items-center gap-3">
          <Image src={brand.logo} alt={brand.name} width={40} height={40} />
          <span className="font-semibold">{brand.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="group relative">
            <button className="font-medium">Properties</button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition
                            absolute right-0 mt-4 w-80 rounded-lg bg-neutral-900 text-neutral-100 p-3 ring-1 ring-neutral-800 shadow-xl">
              <div className="px-3 py-2 text-sm uppercase tracking-wide text-neutral-400">Builders</div>
              <ul className="divide-y divide-neutral-800">
                {builders.map((b) => (
                  <li key={b.slug}>
                    <Link href={b.href} className="flex items-center gap-3 px-3 py-2 hover:bg-neutral-800 rounded-md">
                      <Image src={b.logo} alt={b.name} width={28} height={28} />
                      <span>{b.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-medium">{l.label}</Link>
          ))}

          <span className="text-sm text-neutral-400">{phone}</span>
        </div>
      </nav>
    </header>
  );
}
