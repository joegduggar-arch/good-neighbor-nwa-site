// src/components/PlanGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = string | { src: string; alt?: string };

export default function PlanGallery({ images }: { images: GalleryImage[] }) {
  const normalized = images.map((img) =>
    typeof img === "string" ? { src: img, alt: "" } : img
  );

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {normalized.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-black/10"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={img.src}
              alt={img.alt || `Photo ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute inset-0 mx-auto flex max-w-6xl items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full">
              <Image
                src={normalized[index].src}
                alt={normalized[index].alt || `Photo ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full rounded-lg object-contain"
                priority
              />

              <div className="mt-3 flex items-center justify-between text-neutral-200">
                <button
                  className="rounded bg-neutral-800 px-3 py-1 text-sm"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>

                <div className="space-x-2">
                  <button
                    className="rounded bg-neutral-800 px-3 py-1 text-sm"
                    onClick={() => setIndex((i) => (i - 1 + normalized.length) % normalized.length)}
                  >
                    Prev
                  </button>
                  <button
                    className="rounded bg-neutral-800 px-3 py-1 text-sm"
                    onClick={() => setIndex((i) => (i + 1) % normalized.length)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
