import { notFound } from "next/navigation";
import { getPlan, type BuilderKey, type PlanKey } from "@/lib/floorplans";
import PlanGallery from "@/components/PlanGallery";

type Params = { builder: BuilderKey; plan: PlanKey };

export default function PlanPage({ params }: { params: Params }) {
  const plan = getPlan(params.builder, params.plan);
  if (!plan) return notFound();
  return (
    <main className="section">
      <h1 className="text-3xl font-semibold">{plan.name}</h1>
      {plan.sqft && <p className="mt-2 text-neutral-400">{plan.sqft}</p>}
      <div className="mt-6">
        <PlanGallery images={plan.images} />
      </div>
      {plan.disclaimer && (
        <p className="mt-6 text-sm text-neutral-400">{plan.disclaimer}</p>
      )}
    </main>
  );
}
