// src/app/builders/timeless-homes/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import PlanCard from "@/components/PlanCard";
import { getBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
};

export default function TimelessHomesPage() {
  const builder = getBuilder("timeless-homes");
  if (!builder) return notFound();

  return (
    <main className="bg-black text-white px-6 py-16 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
        <div className="shrink-0">
          <Image
            src={builder.logo}
            alt={`${builder.name} logo`}
            width={260}
            height={96}
            className="h-auto w-[220px] md:w-[260px]"
            priority
          />
        </div>

        <div>
          <div className="text-xs tracking-widest text-white/60 uppercase">
            Builder we represent
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">{builder.name}</h1>

          {builder.description ? (
            <p className="mt-4 text-white/80 max-w-2xl">{builder.description}</p>
          ) : null}
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-6">Available floorplans</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {builder.plans.map((plan) => (
            <PlanCard key={plan.slug} builderSlug={builder.slug} plan={plan} />
          ))}
        </div>
      </section>
    </main>
  );
}