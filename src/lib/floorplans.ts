import Image from "next/image";
import Link from "next/link";
import { FLOORPLANS } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description:
    "Explore available floorplans from Timeless Homes, featuring quality new construction with thoughtful layouts and attention to detail.",
};

export default function TimelessHomesPage() {
  const builder = FLOORPLANS["timeless-homes"];

  if (!builder) return null;

  const plans = Object.values(builder);

  return (
    <main className="bg-black text-white px-6 py-16 max-w-7xl mx-auto">
      {/* HEADER */}
      <header className="flex flex-col md:flex-row md:items-center md:gap-10 mb-16">
        <Image
          src="/logos/timeless-homes.png"
          alt="Timeless Homes Logo"
          width={160}
          height={160}
          className="mb-6 md:mb-0"
        />

        <div>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
            Builder We Represent
          </p>
          <h1 className="text-4xl font-semibold mb-4">Timeless Homes</h1>
          <p className="max-w-2xl text-gray-300 leading-relaxed">
            Quality new-construction homes with thoughtful layouts and attention
            to detail. For current availability, reach out to Good Neighbor
            Realty and we’ll walk you through options, pricing, and timelines.
          </p>
        </div>
      </header>

      {/* FLOORPLANS */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">
          Available Floorplans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {plans.map((plan) => (
            <Link
              key={plan.slug}
              href={`/floorplans/timeless-homes/${plan.slug}`}
              className="group border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition"
            >
              <div className="relative aspect-[4/3] bg-zinc-900">
                <Image
                  src={plan.images[0]}
                  alt={plan.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {plan.sqft} sq ft · {plan.beds} Bed · {plan.baths} Bath
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}