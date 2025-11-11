// src/app/floorplans/[builder]/[plan]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  BUILDERS,
  type BuilderKey,
  type PlanKey,
  getPlan,
} from "@/lib/floorplans";
import PlanGallery from "@/components/PlanGallery";

type Params = { builder: BuilderKey; plan: PlanKey };

export async function generateMetadata({ params }: { params: Params }) {
  const plan = getPlan(params.builder, params.plan);
  if (!plan) return {};
  const builderName = BUILDERS[params.builder]?.name ?? "Builder";
  return {
    title: `${plan.name} by ${builderName} | Good Neighbor Realty`,
  };
}

export default function PlanPage({ params }: { params: Params }) {
  const plan = getPlan(params.builder, params.plan);
  if (!plan) return notFound();

  const builder = BUILDERS[params.builder];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Image
              src={builder.logo}
              alt={builder.name}
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <h1 className="text-2xl font-semibold">{plan.name}</h1>
          </div>
          <p className="text-neutral-400 mt-2">
            {plan.beds ?? "—"} Bed • {plan.baths ?? "—"} Bath •{" "}
            {plan.sqft ?? "—"} sq ft
          </p>
        </div>

        <div className="mb-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
            <Image
              src={plan.hero ?? plan.images[0]}
              alt={plan.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <PlanGallery images={plan.images} />

        {plan.disclaimer && (
          <p className="mt-8 text-sm text-neutral-400">{plan.disclaimer}</p>
        )}
      </section>
    </main>
  );
}
