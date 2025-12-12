// src/components/PlanCard.tsx

import Link from "next/link";
import Image from "next/image";
import { type Plan } from "@/lib/floorplans";

type Props = {
  plan: Plan;
  builder: string; // needed to build the URL
};

export default function PlanCard({ plan, builder }: Props) {
  const { name, sqft, beds, baths, images } = plan;

  const specs = [
    sqft ? `${sqft.toLocaleString()} sq ft` : null,
    beds ? `${beds} Bed` : null,
    baths ? `${baths} Bath` : null,
  ]
    .filter(Boolean)
    .join(" • ");

  const thumbnail = images?.[0];

  return (
    <Link
      href={`/floorplans/${builder}/${plan.slug}`}
      className="card block overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-neutral-800 hover:ring-2 hover:ring-yellow-500 transition"
    >
      {/* Thumbnail */}
      {thumbnail && (
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={thumbnail}
            alt={name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      )}

      {/* Text */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        {specs && (
          <p className="mt-1 text-sm text-neutral-400">
            {specs}
          </p>
        )}
        <p className="mt-3 text-xs text-neutral-500">
          View floorplan details & photos
        </p>
      </div>
    </Link>
  );
}