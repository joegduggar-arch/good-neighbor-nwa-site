"use client";

import Image from "next/image";

export default function HeroMovingImage() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden bg-black">
      {/* Moving background image */}
      <Image
        src="/hero-nwa-fall.jpg"
        alt="Northwest Arkansas in the fall"
        fill
        priority
        className="object-cover hero-zoom"
      />

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Centered hero text */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center">
        <p className="text-xs md:text-sm font-semibold tracking-[0.35em] text-neutral-200 uppercase">
          GOOD NEIGHBOR REALTY • NWA
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
          Welcome to Good Neighbor Realty
        </h1>

        <p className="mt-6 max-w-4xl text-2xl md:text-3xl font-semibold leading-tight text-white">
          Your trusted real estate professionals serving all of{" "}
          <span className="text-[#ffc933]">Northwest Arkansas</span> — from new
          construction to forever homes.
        </p>

        <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-200">
          Locally owned and dedicated to making your next move simple, informed,
          and stress-free.
        </p>
      </div>
    </section>
  );
}