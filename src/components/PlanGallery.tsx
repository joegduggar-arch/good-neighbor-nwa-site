// src/components/PlanGallery.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  images: string[];          // any length (0..50+)
  initialVisible?: number;   // how many thumbs before "View more"
};

export default function PlanGallery({ images, initialVisible = 12 }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const shown = useMemo(
    () => (expanded ? images : images.slice(0, initialVisible)),
    [images, expanded, initialVisible]
  );

  // Lightbox keyboard controls + body scroll lock
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + images.length) % images.length);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, images.length]);

  const openAt = (i: number) => {
    setIdx(i);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-3" ref={containerRef}>
      {/* Thumbs grid */}
      {shown.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {shown.map((src, i) => (
            <button
              key={src + i}
              onClick={() => openAt(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900"
              aria-label={`Open image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </button>
          ))}
          {!expanded && images.length > shown.length && (
            <button
              onClick={() => setExpanded(true)}
              className="relative flex aspect-[4/3] items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-sm font-semibold text-neutral-200 hover:bg-neutral-800"
              aria-label="Show more photos"
            >
              +{images.length - shown.length} more
            </button>
          )}
        </div>
      ) : (
        <p className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-neutral-400">
          No photos yet.
        </p>
      )}

      {images.length > initialVisible && (
        <div className="pt-1">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="rounded-lg border border-neutral-700 px-3 py-1.5 text-sm text-neutral-100 hover:bg-neutral-800"
          >
            {expanded ? "Show fewer photos" : "View more photos"}
          </button>
        </div>
      )}

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative h-[70vh] w-full overflow-hidden rounded-xl">
              <Image
                key={images[idx]}
                src={images[idx]}
                alt={`Photo ${idx + 1} of ${images.length}`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              aria-label="Close"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-2 top-2 rounded-md bg-black/60 p-2 text-white hover:bg-black/80"
            >
              ✕
            </button>
            {images.length > 1 && (
              <>
                <button
                  aria-label="Previous"
                  onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md bg-black/60 p-2 text-white hover:bg-black/80"
                >
                  ‹
                </button>
                <button
                  aria-label="Next"
                  onClick={() => setIdx((i) => (i + 1) % images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-black/60 p-2 text-white hover:bg-black/80"
                >
                  ›
                </button>
              </>
            )}
            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              {idx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
