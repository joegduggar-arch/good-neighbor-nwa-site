// src/app/builders/milagro-designs/page.tsx
import Link from "next/link";
import Image from "next/image";
import { byStatus, getBuilderBySlug } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description:
    "Floorplans and updates for Timeless Homes (Milagro Designs, LLC) in Bella Vista.",
};

export default function TimelessBuilderPage() {
  const builder = getBuilderBySlug("milagro-designs")!;
  const groups = byStatus("timeless");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center gap-4">
          <Image src={builder.logo} alt={builder.name} width={56} height={56} />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">{builder.name}</h1>
            <p className="text-neutral-400 mt-1">{builder.summary}</p>
          </div>
        </div>

        {(["under-construction","coming-soon","sold"] as const).map(section => {
          const plans = groups[section];
          if (!plans.length) return null;
          const title =
            section === "under-construction" ? "Under Construction"
            : section === "coming-soon" ? "Coming Soon" : "Recently Sold";
          return (
            <div key={section} className="mt-10">
              <h2 className="text-xl font-semibold mb-4">{title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map(p => (
                  <Link
                    key={p.key}
                    href={`/floorplans/${builder.slug}/${p.key}`}
                    className="rounded-lg overflow-hidden bg-neutral-900 hover:bg-neutral-800 transition"
                  >
                    <div className="aspect-[4/3] relative">
                      <Image src={p.hero} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm text-neutral-400">{p.sqft}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <p className="text-xs text-neutral-400 mt-10">{builder.disclaimer}</p>
      </section>
    </main>
  );
}