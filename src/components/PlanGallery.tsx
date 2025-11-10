// src/components/PlanGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Props = {
  images: GalleryImage[];
};

export default function PlanGallery({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };

  return (
    <>
      {/* Thumb grid (handles dozens of images) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openAt(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-md ring-1 ring-neutral-800 hover:ring-neutral-600"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt ?? `Photo ${i + 1}`}
              fill
              sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
              className="object-cover"
              priority={i < 4}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 rounded bg-black/60 px-3 py-2 text-white"
            aria-label="Close"
          >
            ×
          </button>

          {/* Image container */}
          <div
            className="relative w-[92vw] max-w-5xl aspect-[16/10] md:aspect-[16/9]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={idx}
              src={images[idx].src}
              alt={images[idx].alt ?? `Photo ${idx + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded bg-black/60 px-3 py-2 text-white"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-black/60 px-3 py-2 text-white"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded bg-black/60 px-2 py-1 text-xs text-white">
              {idx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}