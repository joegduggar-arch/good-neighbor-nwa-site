// src/components/PlanCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Floorplan } from "@/lib/floorplans";

export default function PlanCard({ plan }: { plan: Floorplan }) {
  const specs = `${plan.beds} Bed • ${plan.baths} Bath • ${plan.sqft.toLocaleString()} SF`;
  return (
    <Link
      href={`/floorplans/${plan.slug}`}
      className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-600"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={plan.hero}
          alt={plan.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-neutral-100">{plan.name}</h3>
          <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-300">
            {plan.status.replace("-", " ")}
          </span>
        </div>
        <p className="mt-1 text-sm text-neutral-300">{specs}</p>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-400">{plan.short}</p>
        <p className="mt-3 text-sm font-semibold text-amber-300">View details →</p>
      </div>
    </Link>
  );
}
