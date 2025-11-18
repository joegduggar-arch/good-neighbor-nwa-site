"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroMovingImage() {
  return (
    <>
      {/* HERO – moving background image / video */}
      <section className="relative min-h-[70vh] overflow-hidden bg-black">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* These must exist in /public/videos */}
          <source src="/videos/hero-loop.webm" type="video/webm" />
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Text overlay */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col justify-center px-6 py-24 md:min-h-[70vh]">
          <p className="text-sm font-medium text-yellow-300 tracking-[0.2em] uppercase">
            Welcome to
          </p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            Good Neighbor Realty
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-neutral-200 md:text-xl">
            Your trusted real estate professionals serving all of Northwest
            Arkansas — from new construction to forever homes.
          </p>

          <p className="mt-2 max-w-2xl text-sm text-neutral-300 md:text-base">
            Serving Northwest Arkansas — with a special focus on Bella Vista new
            construction.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/new-construction"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition"
            >
              Explore New Construction
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-full border border-neutral-500 px-6 py-2 text-sm font-semibold text-neutral-100 hover:border-yellow-400 hover:text-yellow-200 transition"
            >
              Search All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM BAR – Our Partner Builders + Contact */}
      <section className="border-t border-neutral-800 bg-neutral-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
          {/* Left: Heading / description */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold md:text-3xl">Our Partner Builders</h2>
            <p className="mt-3 text-sm text-neutral-300 md:text-base">
              Milagro Designs and Dream Built Custom Homes bring thoughtful new
              construction options to Bella Vista and greater Northwest Arkansas.
            </p>
          </div>

          {/* Middle: Builder cards */}
          <div className="flex flex-1 flex-col gap-4 md:flex-row md:justify-center">
            <Link
              href="/builders/milagro-designs"
              className="group flex flex-1 items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/70 p-3 hover:border-yellow-400 hover:bg-neutral-900 transition"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-md bg-neutral-800">
                <Image
                  src="/builders/timeless-homes-logo.png" // make sure this file exists
                  alt="Milagro Designs - Timeless Homes"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="font-semibold">Timeless Homes</div>
                <div className="text-xs text-neutral-300">
                  Milagro Designs, LLC – thoughtful Bella Vista homes.
                </div>
              </div>
            </Link>

            <Link
              href="/builders/dream-built-homes"
              className="group flex flex-1 items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/70 p-3 hover:border-yellow-400 hover:bg-neutral-900 transition"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-md bg-neutral-800">
                <Image
                  src="/builders/dream-built-logo.png" // make sure this file exists
                  alt="Dream Built Custom Homes"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="font-semibold">Dream Built Custom Homes</div>
                <div className="text-xs text-neutral-300">
                  Durable, well-planned builds across Bella Vista and NWA.
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Contact link */}
          <div className="md:w-1/4">
            <p className="mb-3 text-sm text-neutral-300">
              Ready to talk through a build or purchase? Reach out and let’s see
              what fits your family best.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-300 hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}