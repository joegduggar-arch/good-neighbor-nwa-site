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

  const data = getPlan(builder, plan);

  if (!data) {
    notFound();
  }

  const { name, sqft, beds, baths, disclaimer, images = [], summary } = data;

  const galleryImages =
    images?.map((src, index) => ({
      src,
      alt: `${name} – image ${index + 1}`,
    })) ?? [];

  const builderLabel =
    builder === "timeless-homes"
      ? "Timeless Homes • Milagro Designs"
      : builder === "swanson-properties"
      ? "Swanson Properties • Dream Built Homes"
      : builder;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        {/* Header */}
        <header className="mb-8">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            {builderLabel}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {name}
          </h1>

          <p className="mt-3 text-sm text-neutral-300 md:text-base">
            {sqft && <span>{sqft.toLocaleString()} sq ft (approx.)</span>}
            {beds && <> • {beds} Bed</>}
            {baths && <> • {baths} Bath</>}
          </p>

          {summary && (
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-200 md:text-base">
              {summary}
            </p>
          )}
        </header>

        {/* Image gallery */}
        {galleryImages.length > 0 ? (
          <div className="mt-4">
            <PlanGallery images={galleryImages} />
          </div>
        ) : (
          <div className="mt-4 rounded-lg border border-neutral-800 p-6 text-neutral-400">
            Photos coming soon.
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