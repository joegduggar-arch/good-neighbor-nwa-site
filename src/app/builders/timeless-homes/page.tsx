// src/app/builders/timeless-homes/page.tsx
import Image from "next/image";
import PlanCard from "@/components/PlanCard";
import { getBuilder, getPlansByBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
};

export default function TimelessHomesPage() {
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