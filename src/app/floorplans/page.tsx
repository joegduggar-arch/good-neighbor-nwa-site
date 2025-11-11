// src/app/floorplans/page.tsx
import { getPlans } from "@/lib/floorplans";
import PlanCard from "@/components/PlanCard";

export const metadata = {
  title: "Floorplans | Good Neighbor Realty",
};

export default function FloorplansIndexPage() {
  const plans = getPlans();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <h1 className="mb-6 text-2xl font-semibold text-white">Floorplans</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <PlanCard key={`${p.builder}-${p.slug}`} plan={p} />
        ))}
      </div>
    </main>
  );
}
