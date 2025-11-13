"use client";

import Image from "next/image";

export default function HeroMovingImage() {
  return (
    <section className="relative h-[55vh] min-h-[320px] w-full overflow-hidden bg-neutral-900">
      {/* Moving background image */}
      <div className="absolute inset-0">
        <div className="hero-slow-pan h-full w-full">
          <Image
            src="/images/river-hero.jpg"
            alt="Northwest Arkansas hills and river in the fall"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark gradient to keep text readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950/80" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex h-full max-w-5xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-3 text-neutral-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300/80">
            GOOD NEIGHBOR REALTY • NWA
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Local expertise,{" "}
            <span className="text-yellow-300">neighborly service.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-200/80">
            Helping buyers and sellers navigate Northwest Arkansas—neighborhoods,
            new construction, and everything in between.
          </p>
        </div>
      </div>
    </section>
  );
}