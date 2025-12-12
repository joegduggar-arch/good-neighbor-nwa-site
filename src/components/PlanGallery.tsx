"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/lib/floorplans";

type Props = {
  images: GalleryImage[];
};

export default function PlanGallery({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<GalleryImage | null>(null);

  if (!images?.length) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(img);
              setOpen(true);
            }}
            className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-black"
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              className="object-cover hover:scale-105 transition"
            />
          </button>
        ))}
      </div>

      {open && active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-6xl w-full aspect-[16/9]">
            <Image
              src={active.src}
              alt={active.alt ?? ""}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}