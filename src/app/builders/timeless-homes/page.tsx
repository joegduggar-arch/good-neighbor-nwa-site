import Image from "next/image";
import Link from "next/link";
import { getBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
};

export default function TimelessHomesPage() {
  const builder = getBuilder("timeless-homes");

  if (!builder) return null;

  return (
    <main className="bg-black text-white px-6 py-16 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <Image
          src={builder.logo}
          alt={builder.name}
          width={220}
          height={80}
          priority
        />
        <div>
          <h1 className="text-4xl font-semibold">{builder.name}</h1>
          <p className="text-white/80 mt-3 max-w-xl">
            Quality new-construction homes with thoughtful layouts and attention
            to detail. Contact Good Neighbor Realty for availability, pricing,
            and timelines.
          </p>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-8">Available Floorplans</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.values(builder.plans).map((plan) => (
            <Link
              key={plan.slug}
              href={`/floorplans/${builder.slug}/${plan.slug}`}
              className="group border border-white/10 rounded-lg overflow-hidden hover:border-yellow-400 transition"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={plan.images[0]}
                  alt={plan.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-white/70 text-sm mt-1">
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