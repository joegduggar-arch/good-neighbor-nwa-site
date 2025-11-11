// src/app/floorplans/[builder]/[plan]/page.tsx
import { notFound } from "next/navigation";
import { getPlan, type BuilderKey } from "@/lib/floorplans";
import PlanGallery from "@/components/PlanGallery";

type Params = { builder: BuilderKey; plan: string };

export default function PlanDetailPage({ params }: { params: Params }) {
  const { builder, plan } = params;
  const p = getPlan(builder, plan);
  if (!p) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-white">{p.name}</h1>
        {p.sqft && <p className="mt-1 text-neutral-400">{p.sqft}</p>}
      </header>

      <section className="mb-8">
        <PlanGallery images={p.images} />
      </section>

      {p.disclaimer && (
        <p className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-300">
          {p.disclaimer}
        </p>
      )}
    </main>
  );
}
