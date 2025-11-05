// src/components/HeroVideo.tsx
"use client";

import React from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
}

export default function HeroVideo({ src, poster }: HeroVideoProps) {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden bg-neutral-950">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Text Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          Your trusted real estate professionals serving all of{" "}
          <span className="text-yellow-500">Northwest Arkansas</span> — from new
          construction to forever homes.
        </h1>
        <p className="mt-5 text-sm text-neutral-300 sm:text-base">
          Locally owned and dedicated to making your next move simple, informed,
          and stress-free.
        </p>
      </div>
    </section>
  );
}
