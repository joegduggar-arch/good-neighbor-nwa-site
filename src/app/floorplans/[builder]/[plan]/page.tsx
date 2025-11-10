// src/app/floorplans/[builder]/[plan]/page.tsx
import { notFound } from "next/navigation";
import {
  getPlan,
  getBuilderBySlug,
  type BuilderKey,
  type PlanKey,
} from "@/lib/floorplans";
import PlanGallery from "@/components/PlanGallery";

type Props = { params: { builder: BuilderKey; plan: PlanKey } };

export function generateMetadata({ params }: Props) {
  const builder = getBuilderBySlug(params.builder);
  const plan = getPlan(params.builder, params.plan);
  const title = plan?.title ?? "Floorplan";
  return {
    title: `${title} | ${builder?.name ?? "Builder"} | Good Neighbor Realty`,
  };
}

export default function PlanDetailPage({ params }: Props) {
  const builder = getBuilderBySlug(params.builder);
  const plan = getPlan(params.builder, params.plan);

  if (!builder || !plan) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">{plan.title}</h1>
        <p className="mt-1 text-neutral-400">
          {builder.name}
          {plan.approxSqft ? ` • ${plan.approxSqft}` : ""}
        </p>

        {plan.summary && (
          <p className="mt-6 max-w-3xl text-neutral-300">{plan.summary}</p>
        )}

        <div className="mt-8">
          <PlanGallery images={plan.images} />
        </div>

        {plan.disclaimer && (
          <p className="mt-8 text-sm text-neutral-400">{plan.disclaimer}</p>
        )}
      </div>
    </main>
  );
}