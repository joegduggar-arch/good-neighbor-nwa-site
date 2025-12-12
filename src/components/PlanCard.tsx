// src/components/PlanCard.tsx

import Link from "next/link";
import Image from "next/image";
import type { Plan } from "@/lib/floorplans";

export default function PlanCard({
  builderSlug,
  plan,
}: {
  builderSlug: string;
  plan: Plan;
}) {
  const firstImage = plan.images?.[0] ?? "/floorplans/placeholder.jpg";

  return (
    <Link
      href={`/floorplans/${builderSlug}/${plan.slug}`}
      className="group block rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      <div className="relative aspect-[16/10] w-full bg-black/30">
        <Image
          src={firstImage}
          alt={`${plan.name} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-[1.02] transition"
        />
      </div>

      <div className="p-5">
        <div className="text-lg font-semibold text-white">{plan.name}</div>
        <div className="mt-1 text-sm text-white/75">
          {plan.sqft.toLocaleString()} sq ft • {plan.beds} Bed • {plan.baths} Bath
        </div>

        {plan.summary ? (
          <p className="mt-3 text-sm text-white/70 line-clamp-2">{plan.summary}</p>
        ) : null}
      </div>
    </Link>
  );
}