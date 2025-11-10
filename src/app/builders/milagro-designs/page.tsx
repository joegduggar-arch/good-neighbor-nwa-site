// src/app/builders/timeless/page.tsx
import Link from "next/link";
import { byStatus, getBuilderBySlug, getPlansByBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description:
    "Explore Timeless Homes in Bella Vista: available, under construction, and recently sold plans.",
};

export default function TimelessBuilderPage() {
  const builder = getBuilderBySlug("timeless");
  const groups = byStatus("timeless");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {builder?.name ?? "Timeless Homes"}
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          New construction in Bella Vista, designed for everyday comfort with
          bright, functional layouts. Browse available plans or explore homes
          currently underway.
        </p>

        <div className="mt-10 grid gap-10">
          {/* Available */}
          {groups.available.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Available</h2>
              <ul className="space-y-3">
                {groups.available.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/floorplans/timeless?plan=${p.id}`}
                      className="text-amber-400 hover:text-amber-300"
                    >
                      {p.name} {p.sqftLabel ? `• ${p.sqftLabel}` : ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Under Construction */}
          {groups.underConstruction.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Under Construction</h2>
              <ul className="space-y-3">
                {groups.underConstruction.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/floorplans/timeless?plan=${p.id}`}
                      className="text-amber-400 hover:text-amber-300"
                    >
                      {p.name} {p.sqftLabel ? `• ${p.sqftLabel}` : ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sold */}
          {groups.sold.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Recently Sold</h2>
              <ul className="space-y-3">
                {groups.sold.map((p) => (
                  <li key={p.id} className="text-neutral-400">
                    {p.name} {p.sqftLabel ? `• ${p.sqftLabel}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            Ask About Timeless Homes
          </Link>
        </div>
      </section>
    </main>
  );
}
