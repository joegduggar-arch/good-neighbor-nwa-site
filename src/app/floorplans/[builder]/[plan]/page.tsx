// src/app/floorplans/[builder]/[plan]/page.tsx

import { notFound } from "next/navigation";
import PlanGallery from "@/components/PlanGallery";
import { getPlan } from "@/lib/floorplans";

type PageProps = {
  params: {
    builder: string;
    plan: string;
  };
};

export default function PlanDetailPage({ params }: PageProps) {
  const { builder, plan } = params;

  // Look up the plan using the helper from lib/floorplans
  const data = getPlan(builder, plan);

  if (!data) {
    // If the builder/plan combo isn't in our registry, show 404
    notFound();
  }

  const {
    name,
    builderName,
    sqft,
    beds,
    baths,
    notes,
    disclaimer,
    images,
  } = data;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        {/* Header */}
        <header className="mb-8">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            {builderName}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {name}
          </h1>
          <p className="mt-3 text-sm text-neutral-300 md:text-base">
            {sqft && <span>{sqft.toLocaleString()} sq ft</span>}
            {beds && <> • {beds} Bed</>}
            {baths && <> • {baths} Bath</>}
          </p>
          {notes && (
            <p className="mt-3 max-w-2xl text-sm text-neutral-300">{notes}</p>
          )}
        </header>

        {/* Image gallery */}
        {images && images.length > 0 && (
          <div className="mt-4">
            <PlanGallery images={images} />
          </div>
        )}

        {/* Disclaimer / fine print */}
        {disclaimer && (
          <p className="mt-8 text-xs leading-relaxed text-neutral-500">
            {disclaimer}
          </p>
        )}
      </section>
    </main>
  );
}