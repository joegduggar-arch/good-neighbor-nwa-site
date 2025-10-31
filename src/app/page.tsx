"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-brand-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image or Pattern */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg" // Optional hero image — replace or remove if not needed
          alt="Northwest Arkansas landscape"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Your trusted real estate professionals serving all of{" "}
          <span className="text-brand-gold">Northwest Arkansas</span> — from new
          construction to forever homes.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-zinc-300">
          Locally owned and dedicated to helping you buy, build, or sell with
          confidence.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/search"
            className="rounded-lg bg-brand-gold px-6 py-3 text-black font-semibold transition hover:bg-white hover:text-brand-gold"
          >
            Browse Listings
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-brand-gold px-6 py-3 font-semibold text-brand-gold transition hover:bg-brand-gold hover:text-black"
          >
            Contact Our Team
          </Link>
        </div>
      </section>

      {/* Optional Footer Tagline */}
      <footer className="absolute bottom-6 text-sm text-zinc-400">
        © {new Date().getFullYear()} Good Neighbor Realty — Northwest Arkansas Real Estate
      </footer>
    </main>
  );
}
