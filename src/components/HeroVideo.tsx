"use client";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
};

export default function HeroVideo({ src, poster, className, overlay = true }: Props) {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(m.matches);
    const handler = () => setPrefersReduced(m.matches);
    m.addEventListener?.("change", handler);
    return () => m.removeEventListener?.("change", handler);
  }, []);

  return (
    <div className={`relative h-[60vh] md:h-[72vh] overflow-hidden ${className || ""}`}>
      {!prefersReduced ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-loop.webm" type="video/webm" />
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        poster && <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}

      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      )}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-10">
        {/* Put your headline/CTA here */}
      </div>
    </div>
  );
}
