// src/components/HeroMovingImage.tsx
"use client";

import Image from "next/image";

export default function HeroMovingImage() {
  return (
    <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden bg-black">
      {/* Moving background image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/hero-nwa-fall.jpg" // make sure this file is in /public
            alt="Northwest Arkansas in the fall"
            fill
            priority
            className="object-cover hero-zoom"
          />
        </div>
      </div>

      {/* Dark overlay so the image shows but text is readable */}
      <div className="absolute inset-0 bg-black/30 -z-0" />

      {/* CENTERED TEXT ONLY */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 space-y-6">
        {/* Big welcome line */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
          Welcome to Good Neighbor Realty
        </h2>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-5xl leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
          Your trusted real estate professionals serving all of{" "}
          <span className="text-yellow-400">Northwest Arkansas</span> — from
          new construction to forever homes.
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-xl text-neutral-100 max-w-3xl drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
          Locally owned and dedicated to making your next move simple, informed,
          and stress-free.
        </p>
      </div>

      {/* Subtle zoom animation for "movement" */}
      <style jsx global>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.06) translate3d(0, -10px, 0);
          }
          100% {
            transform: scale(1) translate3d(0, 0, 0);
          }
        }

        .hero-zoom {
          animation: heroZoom 18s ease-in-out infinite;
          transform-origin: center center;
        }
      `}</style>
    </section>
  );
}