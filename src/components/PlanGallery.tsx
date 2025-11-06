// src/components/PlanGallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function PlanGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
        <Image
          src={images[active]}
          alt={`Photo ${active + 1}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/3] overflow-hidden rounded-lg border ${
              i === active ? "border-amber-400" : "border-neutral-800"
            }`}
            aria-label={`Show image ${i + 1}`}
          >
            <Image src={src} alt={`Thumb ${i + 1}`} fill sizes="10vw" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
