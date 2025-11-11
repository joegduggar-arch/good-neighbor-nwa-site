// src/components/PlanCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Plan } from "@/lib/floorplans";

export default function PlanCard({ plan }: { plan: Plan }) {
  const specs = `${plan.beds ?? "—"} Bed • ${plan.baths ?? "—"} Bath • ${
    plan.sqft ?? "—"
  } sq ft`;

  return (
    <Link
      href={`/floorplans/${plan.builder}/${plan.slug}`}
      className="group block rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-neutral-700"
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={plan.hero ?? plan.images[0]}
          alt={plan.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-4">
        <div className="font-semibold">{plan.name}</div>
        <div className="text-sm text-neutral-400">{specs}</div>
      </div>
    </Link>
  );
}
