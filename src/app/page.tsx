import Image from "next/image";
import Link from "next/link";

import SearchPropertiesSection from "@/components/SearchPropertiesSection";
import { BUILDERS_MENU } from "@/lib/floorplans";

export default function HomePage() {
  const builders = BUILDERS_MENU;

  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-moving.jpg"
            alt="Northwest Arkansas landscape"
            fill
            priority
            className="hero-zoom object-cover"
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90" />
        </div>

        {/* Hero content */}
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20 pt-32 md:flex-row md:items-end md:px-6 md:pb-28 md:pt-40">
          {/* Left: tagline + buttons */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Welcome to
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Good Neighbor Realty
            </h1>
            <p className="mt-4 text-sm text-neutral-200 md:text-base">
              Your trusted real estate professionals serving all of Northwest
              Arkansas — from new construction to forever homes, with a special
              focus on Bella Vista new construction.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/new-construction"
                className="rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-300"
              >
                Explore New Construction
              </Link>
              <Link
                href="/search"
                className="rounded-full border border-neutral-500 px-6 py-2 text-sm font-semibold text-neutral-100 hover:border-yellow-300 hover:text-yellow-300"
              >
                Search All Properties
              </Link>
            </div>
          </div>

          {/* Right: builders card (pulls from BUILDERS_MENU) */}
          <div className="flex-1 rounded-2xl bg-black/60 p-5 ring-1 ring-white/10 backdrop-blur">
            <h2 className="text-sm font-semibold text-neutral-100">
              Builders We Represent
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {builders.map((b) => (
                <Link
                  key={b.slug}
                  href={`/builders/${b.slug}`}
                  className="flex items-center gap-4 rounded-xl bg-neutral-900/70 px-4 py-3 text-sm text-neutral-100 hover:bg-neutral-800"
                >
                  <Image
                    src={b.logo}
                    alt={b.name}
                    width={96}
                    height={48}
                    className="h-12 w-auto rounded object-contain"
                  />
                  <span className="text-sm font-medium">{b.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== IDX TABBED SEARCH SECTION (HOME) ============== */}
      <div className="-mt-16 md:-mt-20">
        <SearchPropertiesSection />
      </div>

      {/* ============== SIMPLE ABOUT BAND ============== */}
      <section className="border-t border-neutral-900 bg-neutral-950 py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold">Serving Northwest Arkansas</h2>
          <p className="mt-4 max-w-3xl text-sm text-neutral-300 md:text-base">
            Good Neighbor Realty is a locally owned brokerage focused on
            communities like Bella Vista, Bentonville, Rogers, Springdale,
            Fayetteville, Prairie Grove, and the surrounding areas. Whether
            you&apos;re building new, buying, or selling, our team is here to
            walk with you through every step of the process.
          </p>
        </div>
      </section>
    </main>
  );
}