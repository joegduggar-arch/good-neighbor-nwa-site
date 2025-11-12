import Link from "next/link";
import type { Plan } from "@/lib/floorplans";
export default function PlanCard({ plan }: { plan: Plan }) {
  const specs = [plan.beds && `${plan.beds} Bed`, plan.baths && `${plan.baths} Bath`, plan.sqft]
    .filter(Boolean).join(" • ");
  return (
    <Link href={`/floorplans/${plan.builder}/${plan.key}`} className="card block overflow-hidden hover:ring-yellow-600 transition">
      <div className="p-5">
        <h3 className="text-lg font-semibold">{plan.name}</h3>
        {specs && <p className="mt-1 text-sm text-neutral-400">{specs}</p>}
      </div>
    </Link>
  );
}
