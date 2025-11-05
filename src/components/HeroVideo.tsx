"use client";

type Props = {
  src: string;           // mp4 source
  poster?: string;
  className?: string;
  overlay?: boolean;
};

export default function HeroVideo({ src, poster, className, overlay = true }: Props) {
  return (
    <div className={`relative h-[60vh] md:h-[72vh] overflow-hidden ${className || ""}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* Prefer modern webm, fall back to mp4 */}
        <source src="/videos/hero-loop.webm" type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      )}
      {/* Slot for headline/CTA if you want later */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-10" />
    </div>
  );
}
