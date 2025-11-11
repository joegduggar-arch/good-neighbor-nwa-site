// src/app/builders/milagro-designs/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getBuilderBySlug, getPlansByBuilder, BUILDERS } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description:
    "Explore Timeless Homes by Milagro Designs—quality construction across Northwest Arkansas.",
};

export default function TimelessBuilderPage() {
  const builder = getBuilderBySlug("milagro-designs") ?? BUILDERS.timeless;
  const plans = getPlansByBuilder("timeless");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={builder.logo}
            alt={builder.name}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-2xl font-semibold">{builder.name}</h1>
            <p className="text-neutral-400">{builder.blurb}</p>
          </div>
        </div>

        <h2 className="text-lg font-medium mb-4">Available Floorplans</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <Link
              key={p.slug}
              href={`/floorplans/${builder.key}/${p.slug}`}
              className="group block rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-neutral-700"
            ***
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={p.hero ?? p.images[0]}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-neutral-400">
                  {p.beds ?? "—"} Bed • {p.baths ?? "—"} Bath • {p.sqft ?? "—"}{" "}
                  sq ft
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
