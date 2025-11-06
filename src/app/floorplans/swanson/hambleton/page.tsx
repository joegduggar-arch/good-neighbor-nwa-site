// src/app/floorplans/page.tsx
import PlanCard from "@/components/PlanCard";
import { BUILDERS, groupedByBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Floorplans | Good Neighbor Realty",
  description: "Browse floorplans and photo galleries from builders we represent.",
};

export default function FloorplansIndexPage() {
  const grouped = groupedByBuilder();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-100">Floorplans</h1>
        <p className="mt-2 max-w-2xl text-neutral-300">
          Explore plans from our builder partners. Click any plan to see specs and photos.
        </p>
      </header>

      {Object.entries(grouped).map(([builderSlug, plans]) => (
        <section key={builderSlug} className="py-8 first:pt-0">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-100">
              {BUILDERS[builderSlug as keyof typeof BUILDERS].name}
            </h2>
          </div>
          {plans.length ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {plans.map((p) => (
                <PlanCard key={p.slug} plan={p} />
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-neutral-400">
              No plans posted yet.
            </p>
          )}
        </section>
      ))}
    </main>
  );
}
