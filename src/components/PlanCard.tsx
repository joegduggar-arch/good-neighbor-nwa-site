// src/components/PlanCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Plan } from "@/lib/floorplans";

export default function PlanCard({ plan }: { plan: Plan }) {
  const href = `/floorplans/${plan.builderSlug}/${plan.planSlug}`;
  const cover = plan.images?.[0];

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      <div className="relative aspect-[16/9] w-full bg-black/30">
        {cover ? (
          <Image
            src={cover}
            alt={`${plan.name} cover`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm">
            No cover image
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="text-lg font-semibold text-white">{plan.name}</div>
        <div className="mt-1 text-sm text-white/75">
          {plan.sqft.toLocaleString()} sq ft • {plan.beds} Bed • {plan.baths} Bath
        </div>
      </div>
    </Link>
  );
}