// src/components/PlanCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Plan } from "@/lib/floorplans";

export default function PlanCard({ plan }: { plan: Plan }) {
  const specs = [
    plan.beds != null ? `${plan.beds} Bed` : null,
    plan.baths != null ? `${plan.baths} Bath` : null,
    plan.sqft ? plan.sqft : null,
  ]
    .filter(Boolean)
    .join(" • ");

  const firstImage =
    plan.images && plan.images.length > 0 ? plan.images[0] : "/images/hero-placeholder.jpg";

  return (
    <Link
      href={`/floorplans/${plan.builder}/${plan.slug}`}
      className="group block overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-700"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={firstImage}
          alt={plan.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
          {plan.status && (
            <span className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300">
              {plan.status}
            </span>
          )}
        </div>
        {specs && <p className="mt-1 text-sm text-neutral-400">{specs}</p>}
      </div>
    </Link>
  );
}
