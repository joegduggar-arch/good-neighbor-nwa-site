// src/app/builders/timeless-homes/page.tsx

import Image from "next/image";
import PlanCard from "@/components/PlanCard";
import { getPlansByBuilder, getBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description:
    "View Timeless Homes floorplans and current new-construction offerings represented by Good Neighbor Realty.",
};

const BUILDER_SLUG = "timeless-homes";

export default function TimelessHomesPage() {
  const plans = getPlansByBuilder(BUILDER_SLUG);
  const builder = getBuilder(BUILDER_SLUG);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            {builder?.logo && (
              <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full bg-black/80 ring-1 ring-neutral-700">
                <Image
                  src={builder.logo}
                  alt={builder.name}
                  fill
                  className="object-contain p-1"
                  sizes="80px"
                />
              </div>
            )}

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Builder we represent
              </p>
              <h1 className="mt-1 text-3xl font-semibold md:text-4xl">
                Timeless Homes
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-neutral-300 md:text-base">
                Quality new-construction homes with thoughtful layouts and
                attention to detail. For current availability, reach out to
                Good Neighbor Realty and we&apos;ll walk you through options,
                pricing, and timelines.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-300 max-w-sm">
            Have questions about a plan or a current build?{" "}
            <a
              href="/contact"
              className="font-medium text-yellow-400 hover:text-yellow-300"
            >
              Contact us directly
            </a>
            .
          </div>
        </header>

        {/* Plans grid */}
        <div className="mt-10 border-t border-neutral-800 pt-8">
          <h2 className="mb-4 text-lg font-semibold">Available floorplans</h2>

          {plans.length === 0 ? (
            <p className="text-sm text-neutral-400">
              We&apos;re currently curating Timeless Homes floorplans for this
              page. In the meantime, please reach out and we&apos;ll send you
              the latest options.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {plans.map((plan) => (
                <PlanCard key={plan.slug} plan={plan} builder={BUILDER_SLUG} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}