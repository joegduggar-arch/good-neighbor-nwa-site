// src/app/floorplans/[builder]/[plan]/page.tsx

import { notFound } from "next/navigation";
import { getBuilder, getPlan, toGalleryImages } from "@/lib/floorplans";
import PlanGallery from "@/components/PlanGallery";

export default function FloorplanPage({
  params,
}: {
  params: { builder: string; plan: string };
}) {
  const builder = getBuilder(params.builder);
  if (!builder) return notFound();

  const plan = getPlan(params.builder, params.plan);
  if (!plan) return notFound();

  const images = toGalleryImages(plan.name, plan.images);

  return (
    <main className="bg-black text-white px-6 py-16 max-w-7xl mx-auto">
      <div className="text-xs tracking-widest text-white/60 uppercase">
        {builder.name} • Floorplan
      </div>

      <h1 className="mt-2 text-4xl font-bold">{plan.name}</h1>

      <div className="mt-2 text-white/75">
        {plan.sqft.toLocaleString()} sq ft (approx.) • {plan.beds} Bed • {plan.baths} Bath
      </div>

      {plan.summary ? <p className="mt-6 text-white/80 max-w-3xl">{plan.summary}</p> : null}
      {plan.disclaimer ? (
        <p className="mt-4 text-xs text-white/50 max-w-3xl">{plan.disclaimer}</p>
      ) : null}

      <div className="mt-10">
        <PlanGallery images={images} />
      </div>
    </main>
  );
}