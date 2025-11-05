"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./Container";

export default function HeroVideo() {
  const [y, setY] = useState(0);
  const motionOK = typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!motionOK) return;
    const onScroll = () => setY(window.scrollY * 0.15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [motionOK]);

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background media */}
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: motionOK ? `translate3d(0, ${y}px, 0)` : undefined, transition: "transform 100ms linear" }}
        aria-hidden
      >
        <video
          className="h-[80svh] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Reduced motion fallback image */}
      <noscript />
      <div className="pointer-events-none absolute inset-0 -z-10 hidden motion-reduce:block">
        <Image src="/hero-poster.jpg" alt="" fill priority className="object-cover" />
      </div>

      {/* Content */}
      <div className="h-[80svh] flex items-center">
        <Container>
          <div className="max-w-2xl text-white drop-shadow-md">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Good Neighbor Realty</h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">
              Northwest Arkansas homes—presented with care, clarity, and craftsmanship.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#search" className="rounded bg-amber-500 px-5 py-3 font-medium text-black hover:bg-amber-400 transition">
                Start Your Search
              </a>
              <a href="#story" className="rounded border border-white/70 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition">
                Our Story
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
