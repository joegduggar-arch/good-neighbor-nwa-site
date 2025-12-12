// src/app/builders/timeless-homes/page.tsx

import Link from "next/link";
import Image from "next/image";
import { getBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
};

export default function TimelessHomesPage() {
  const builder = getBuilder("timeless-homes");

  if (!builder) {
    return (
      <main className="bg-black text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">Builder not found.</div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header row w/ logo */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-start gap-4">
            {builder.logoSrc ? (
              <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
                <Image
                  src={builder.logoSrc}
                  alt={`${builder.name} logo`}
                  fill
                  sizes="80px"
                  className="object-contain"
                  priority
                />
              </div>
            ) : null}

            <div>
              <div className="text-xs tracking-[0.25em] text-white/60">
                BUILDER WE REPRESENT
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold mt-2">
                {builder.name}
              </h1>
              <p className="text-white/80 mt-4 max-w-2xl">{builder.intro}</p>
            </div>
          </div>

          <div className="text-white/70 text-sm">
            Have questions about a plan or a current build?{" "}
            <Link href="/contact" className="text-yellow-400 hover:underline">
              Contact us directly.
            </Link>
          </div>
        </header>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Available floorplans</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {builder.plans.map((plan) => {
              const firstImg = plan.images?.[0];

              return (
                <Link
                  key={plan.slug}
                  href={`/floorplans/${builder.slug}/${plan.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
                >
                  {/* Preview image */}
                  <div className="relative w-full h-56 bg-black/40">
                    {firstImg ? (
                      // Using plain <img> so missing files don’t show the broken Next/Image UI
                      <img
                        src={firstImg}
                        alt={`${plan.name} preview`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display =
                            "none";
                        }}
                      />
                    ) : null}
                  </div>

                  <div className="p-5">
                    <div className="text-lg font-semibold group-hover:text-yellow-200 transition">
                      {plan.name}
                    </div>
                    <div className="text-white/70 text-sm mt-1">
                      {plan.sqftText} • {plan.beds} Bed • {plan.baths} Bath
                    </div>
                    <p className="text-white/75 text-sm mt-3 line-clamp-3">
                      {plan.summary}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}