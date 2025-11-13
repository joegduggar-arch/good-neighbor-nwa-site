// src/components/PlanCard.tsx

import Link from "next/link";
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
      </div>
    </Link>
  );
}