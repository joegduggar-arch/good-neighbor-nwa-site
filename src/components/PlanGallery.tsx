// src/components/PlanGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function PlanGallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => openAt(i)}
            className="relative aspect-square overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900"
          >
            <Image src={src} alt={`Photo ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full aspect-[16/9]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[idx]}
              alt={`Preview ${idx + 1}`}
              fill
              className="object-contain"
              priority
            />
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 hover:bg-white/20"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 hover:bg-white/20"
            >
              ›
            </button>
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
