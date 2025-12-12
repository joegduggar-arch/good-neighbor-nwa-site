// src/app/builders/timeless-homes/page.tsx

import Link from "next/link";
import PlanCard from "@/components/PlanCard";
import { getBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
};

export default function TimelessHomesPage() {
  const builder = getBuilder("timeless-homes");

  if (!builder) {
    return (
      <main className="bg-black text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">Builder not found.</div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4">
          {builder.logo ? (
            <img
              src={builder.logo}
              alt={`${builder.name} logo`}
              className="h-16 w-auto opacity-95"
            />
          ) : null}

          <div className="flex-1">
            <div className="text-xs tracking-[0.2em] text-yellow-300/80 uppercase">
              Builder we represent
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mt-2">{builder.name}</h1>
            <p className="mt-4 text-white/75 max-w-2xl">{builder.blurb}</p>

            <p className="mt-3 text-sm text-white/70">
              Have questions about a plan or a current build?{" "}
              <Link href="/contact" className="text-yellow-300 hover:underline">
                Contact us directly.
              </Link>
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-xl font-semibold">Available floorplans</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {builder.plans.map((p) => (
            <PlanCard
              key={p.slug}
              builderSlug={builder.slug}
              planSlug={p.slug}
              title={p.name}
              subtitle={`${p.sqft} • ${p.beds} Bed • ${p.baths} Bath`}
              imageCandidates={p.images}
            />
          ))}
        </div>
      </div>
    </main>
  );
}