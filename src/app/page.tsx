"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-brand-black text-white">
      {/* Hero Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="Northwest Arkansas Real Estate"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-brand-black/90" />
      </div>

      {/* Hero Content */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-32 text-center md:py-40">
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Your trusted real estate professionals serving all of{" "}
          <span className="text-brand-gold">Northwest Arkansas</span> — from new
          construction to forever homes.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-zinc-300">
          Locally owned and dedicated to making your next move simple, informed,
          and stress-free.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/search"
            className="rounded-md bg-brand-gold px-6 py-3 text-black font-medium hover:bg-yellow-400 transition"
          >
            Search Listings
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-brand-gold px-6 py-3 font-medium text-brand-gold hover:bg-brand-gold hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* History Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-brand-gold mb-6">
          Our Legacy in Northwest Arkansas Real Estate
        </h2>
        <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
          <p>
            For our family, real estate isn’t just a business — it’s a legacy.
            Generations of Duggars have helped people across Northwest Arkansas
            find their place to call home. From the early days of Duggar Realty,
            founded by our relatives decades ago, to my grandma Mary Duggar,
            who owned and led Good Neighbor Realty with integrity and heart,
            this work has always been about more than property — it’s about
            people.
          </p>

          <p>
            Mary taught me that guiding a client through buying or selling a
            home means walking with them through one of life’s biggest moments.
            After her passing, I stepped in to continue the work she loved and
            to carry forward the same values she built her reputation on —
            honesty, hard work, and genuine care for every client.
          </p>

          <p>
            Today, Good Neighbor Realty remains rooted in that heritage —
            dedicated to helping homebuyers and sellers alike navigate each step
            with confidence, trust, and a true neighbor’s heart.
          </p>
        </div>
      </section>

      {/* Footer Attribution */}
      <div className="absolute bottom-6 w-full text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Good Neighbor Realty — All rights reserved.
      </div>
    </main>
  );
}
