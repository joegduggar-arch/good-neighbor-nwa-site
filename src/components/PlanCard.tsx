// src/components/PlanCard.tsx
import Link from "next/link";
<<<<<<< HEAD
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
=======
import { type Plan } from "@/lib/floorplans";

type Props = {
  plan: Plan;
  builder: string; // needed to build the URL
};

export default function PlanCard({ plan, builder }: Props) {
  const { name, sqft, beds, baths } = plan;

  // A nice readable specs line
  const specs =
    [
      sqft ? `${sqft.toLocaleString()} sq ft` : null,
      beds ? `${beds} Bed` : null,
      baths ? `${baths} Bath` : null,
    ]
      .filter(Boolean)
      .join(" • ");

  return (
    <Link
      href={`/floorplans/${builder}/${plan.slug}`}
      className="card block overflow-hidden hover:ring-yellow-600 hover:ring-2 transition rounded-lg bg-neutral-900 p-4"
    >
      <div className="p-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        {specs && (
          <p className="text-sm text-neutral-400 mt-1">{specs}</p>
        )}
>>>>>>> parent of b6b5635 (builder pages)
      </div>
    </Link>
  );
}