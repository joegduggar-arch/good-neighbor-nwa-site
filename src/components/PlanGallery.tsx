Joe Duggar:	// src/app/floorplans/[builder]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBuilderBySlug,
  getPlansByBuilder,
  type BuilderKey,
} from "@/lib/floorplans";

type Props = { params: { builder: BuilderKey } };

export const metadata = {
  title: "Builder Floorplans | Good Neighbor Realty",
};

export default function BuilderPlansPage({ params }: Props) {
  const builder = getBuilderBySlug(params.builder);
  if (!builder) return notFound();

  const plans = getPlansByBuilder(builder.key);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-semibold">{builder.name}</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <Link
              key={p.slug}
              href={`/floorplans/${builder.slug}/${p.slug}`}
              className="group overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 hover:border-neutral-700"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.cover}
                alt={p.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="p-4">
                <div className="text-lg font-medium">{p.title}</div>
                {p.approxSqft && (
                  <div className="mt-1 text-sm text-neutral-400">
                    {p.approxSqft}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}Joe Duggar:	// src/components/PlanGallery.tsx
"use client";

import { useState } from "react";

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
      {/* Grid thumbnails (any length) */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src + i}
            src={src}
            alt=""
            className="h-44 w-full cursor-zoom-in rounded-md object-cover"
            onClick={() => openAt(i)}
          />
        ))}
      </div>

      {/* Simple lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded bg-white/10 px-3 py-2 text-white"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[idx]}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded bg-white/10 px-3 py-2 text-white"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>

          <button
            className="absolute right-4 top-4 rounded bg-white/10 px-3 py-2 text-white"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}