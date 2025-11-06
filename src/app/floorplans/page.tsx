// src/app/floorplans/page.tsx
import Image from "next/image";
import Link from "next/link";
import { BUILDERS, getPlansByBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "New Construction Floorplans | Good Neighbor Realty",
  description:
    "Explore new-construction floorplans from Swanson Properties (DreamBuilt) and Timeless Home (Milagro Designs).",
};

export default function FloorplansIndexPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-3xl md:text-4xl font-semibold">New Construction • Floorplans</h1>
        <p className="mt-3 text-neutral-300">
          Browse by builder, then open any plan for photos, specs, and details. Listings are updated as homes progress.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {Object.values(BUILDERS).map((b) => {
            const plans = getPlansByBuilder(b.key);
            return (
              <div key={b.key} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
                <div className="flex items-center gap-4">
                  <Image src={b.logo} alt={b.name} width={64} height={64} className="h-14 w-14 object-contain" />
                  <div>
                    <h2 className="text-xl font-medium">{b.name}</h2>
                    <p className="text-sm text-neutral-400">{b.blurb}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {plans.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/floorplans/${b.key}/${p.slug}`}
                      className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-700"
                    >
                      {p.name} <span className="text-neutral-400">({p.sqft})</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={`/floorplans/${b.key}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                  >
                    View all {b.name} plans
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
