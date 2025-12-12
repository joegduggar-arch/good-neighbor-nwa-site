// src/components/PlanGallery.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  images: string[];
  altPrefix?: string;
};

export default function PlanGallery({ images, altPrefix = "Plan image" }: Props) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (safeImages.length === 0) {
    return (
      <div className="rounded-lg border border-white/10 p-6 text-white/80">
        No images found for this plan.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {safeImages.map((src, idx) => (
          <button
            key={`${src}-${idx}`}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 text-left"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={src}
                alt={`${altPrefix} ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="p-3 text-xs text-white/70">
              {altPrefix} — image {idx + 1}
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 p-4 sm:p-8"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center">
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden border border-white/10 bg-black">
              <Image
                src={safeImages[openIndex]}
                alt={`${altPrefix} ${openIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}