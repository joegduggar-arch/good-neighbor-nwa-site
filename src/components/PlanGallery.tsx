"use client";
import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/lib/floorplans";

export default function PlanGallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-800 p-6 text-neutral-400">
        Photos coming soon.
      </div>
    );
  }
  function openAt(i:number){ setIdx(i); setOpen(true); }
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button key={i} onClick={() => openAt(i)} className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-neutral-800">
            <Image src={img.src} alt={img.alt ?? `Image ${i+1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={()=>setOpen(false)}>
          <div className="relative w-full max-w-5xl" onClick={(e)=>e.stopPropagation()}>
            <Image src={images[idx].src} alt={images[idx].alt ?? 'image'} width={1600} height={900} className="w-full h-auto rounded-lg" />
            <div className="mt-3 flex items-center justify-between text-neutral-300">
              <button onClick={()=>setIdx((idx-1+images.length)%images.length)} className="px-3 py-2 bg-neutral-800 rounded">Prev</button>
              <span>{idx+1} / {images.length}</span>
              <button onClick={()=>setIdx((idx+1)%images.length)} className="px-3 py-2 bg-neutral-800 rounded">Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
