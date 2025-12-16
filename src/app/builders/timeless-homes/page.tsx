// src/app/builders/timeless-homes/page.tsx
<<<<<<< HEAD
import Image from "next/image";
import PlanCard from "@/components/PlanCard";
import { getBuilder, getPlansByBuilder } from "@/lib/floorplans";
=======

import PlanCard from "@/components/PlanCard";
import { getPlansByBuilder } from "@/lib/floorplans";
>>>>>>> parent of b6b5635 (builder pages)

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
};

export default function TimelessHomesPage() {
<<<<<<< HEAD
  const builder = getBuilder("timeless-homes");
  const plans = getPlansByBuilder("timeless-homes");

  if (!builder) {
    return (
      <main className="bg-black text-white px-6 py-16 max-w-7xl mx-auto">
        <p className="text-white/80">Builder not found.</p>
      </main>
    );
  }

  return (
    <main className="bg-black text-white px-6 py-16 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        <div className="relative w-[220px] h-[80px]">
          <Image
            src={builder.logo}
            alt={`${builder.name} logo`}
            fill
            className="object-contain"
            sizes="220px"
            priority
          />
=======
  const plans = getPlansByBuilder(BUILDER_SLUG);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-neutral-400">
              Builder we represent
            </p>
            <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
              Timeless Homes
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-neutral-300 md:text-base">
              Quality new-construction homes with thoughtful layouts and
              attention to detail. For current availability, reach out to
              Good Neighbor Realty and we&apos;ll walk you through options,
              pricing, and timelines.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-300">
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
            <div className="grid gap-5 md:grid-cols-2">
              {plans.map((plan) => (
                <PlanCard
                  key={plan.slug}
                  plan={plan}
                  builder={BUILDER_SLUG}
                />
              ))}
            </div>
          )}
>>>>>>> parent of b6b5635 (builder pages)
        </div>

        <div>
          <div className="text-xs tracking-widest text-white/60 uppercase">Builder we represent</div>
          <h1 className="text-4xl font-bold mt-1">{builder.name}</h1>
          <p className="mt-3 text-white/75 max-w-2xl">
            Quality new-construction homes with thoughtful layouts and attention to detail. For current
            availability, reach out to Good Neighbor Realty and we’ll walk you through options, pricing,
            and timelines.
          </p>
        </div>
      </header>

      <h2 className="text-lg font-semibold mb-4">Available floorplans</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((p) => (
          <PlanCard key={`${p.builderSlug}-${p.planSlug}`} plan={p} />
        ))}
      </div>
    </main>
  );
}