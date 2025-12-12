// src/components/PlanGallery.tsx

import Image from "next/image";
import type { GalleryImage } from "@/lib/floorplans";

export default function PlanGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img) => (
        <a
          key={img.src}
          href={img.src}
          target="_blank"
          rel="noreferrer"
          className="group block rounded-lg overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
          title="Open full size"
        >
          <div className="relative aspect-[4/3] w-full bg-black/30">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-[1.02] transition"
            />
          </div>
        </a>
      ))}
    </div>
  );
}