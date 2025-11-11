// src/app/floorplans/[builder]/page.tsx
import { notFound } from "next/navigation";
import { getPlansByBuilder, type BuilderKey } from "@/lib/floorplans";
import PlanCard from "@/components/PlanCard";

type Params = { builder: BuilderKey };

export default function BuilderPlansPage({ params }: { params: Params }) {
  const { builder } = params;
  const plans = getPlansByBuilder(builder);
  if (!plans.length) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <h1 className="mb-6 text-2xl font-semibold text-white">
        {builder === "timeless-homes" ? "Timeless Homes" : builder}
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <PlanCard key={p.slug} plan={p} />
        ))}
      </div>
    </main>
  );
}
