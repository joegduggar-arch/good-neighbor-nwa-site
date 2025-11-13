// src/app/builders/timeless-homes/page.tsx

import PlanCard from "@/components/PlanCard";
import { getPlansByBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description:
    "Explore floorplans and new construction options from Timeless Homes, represented by Good Neighbor Realty.",
};

export default function TimelessHomesPage() {
  const plans = getPlansByBuilder("timeless-homes");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-neutral-400">
              Builders We Represent
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Timeless Homes
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-neutral-300 md:text-base">
              Timeless Homes offers thoughtfully designed floorplans with a
              focus on craftsmanship, comfort, and everyday livability. Browse a
              sampling of their plans below, then reach out to Good Neighbor
              Realty to talk through options, availability, and next steps.
            </p>
          </div>
        </header>

        {/* Plans */}
        <div className="mt-10 border-t border-neutral-800 pt-8">
          {plans.length === 0 ? (
            <p className="text-neutral-300">
              There are no plans published online yet. Please contact Joe at{" "}
              <a
                href="tel:14797139565"
                className="font-medium text-neutral-50 underline underline-offset-4"
              >
                (479) 713-9565
              </a>{" "}
              to discuss current and upcoming Timeless Homes builds.
            </p>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-neutral-50">
                Available Floorplans
              </h2>
              <p className="mb-4 mt-1 text-sm text-neutral-400">
                Plan details and availability can vary by lot and community.
                Contact us for the most up-to-date information.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {plans.map((plan) => (
                  <PlanCard key={plan.slug} plan={plan} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Contact blurb */}
        <div className="mt-10 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 text-sm text-neutral-200 md:p-6">
          <p className="font-medium text-neutral-50">
            Want to talk through Timeless Homes options?
          </p>
          <p className="mt-1">
            Reach out directly and we’ll walk you through current builds,
            customization possibilities, and the next steps for getting into a
            Timeless Homes property.
          </p>
        </div>
      </section>
    </main>
  );
}