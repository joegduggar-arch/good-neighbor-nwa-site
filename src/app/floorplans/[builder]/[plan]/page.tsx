// src/app/floorplans/[builder]/[plan]/page.tsx
import Link from "next/link";
import PlanGallery from "@/components/PlanGallery";
import { getBuilder, getPlan } from "@/lib/floorplans";

type Params = {
  builder: string;
  plan: string;
};

export default function PlanPage({ params }: { params: Params }) {
  const builder = getBuilder(params.builder);
  const plan = getPlan(params.builder, params.plan);

  if (!builder || !plan) {
    return (
      <main className="bg-black text-white px-6 py-16 max-w-6xl mx-auto">
        <p className="text-white/80">Floorplan not found.</p>
        <div className="mt-4">
          <Link className="text-yellow-300 hover:underline" href="/builders/timeless-homes">
            Back to Timeless Homes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white px-6 py-16 max-w-6xl mx-auto">
      <div className="text-xs tracking-widest text-white/60 uppercase">
        {builder.name}
      </div>

      <h1 className="text-4xl font-bold mt-2">{plan.name}</h1>

      <div className="mt-2 text-white/75">
        {plan.sqft.toLocaleString()} sq ft (approx.) • {plan.beds} Bed • {plan.baths} Bath
      </div>

      {plan.summary && <p className="mt-6 text-white/80 max-w-3xl">{plan.summary}</p>}

      <div className="mt-10">
        <PlanGallery images={plan.images} altPrefix={plan.name} />
      </div>

      {plan.disclaimer && (
        <p className="mt-8 text-xs text-white/50">{plan.disclaimer}</p>
      )}
    </main>
  );
}