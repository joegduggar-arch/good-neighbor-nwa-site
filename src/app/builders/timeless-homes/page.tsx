// src/app/builders/timeless-homes/page.tsx

import Image from "next/image";
import Link from "next/link";
import { getBuilder, getPlansByBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
};

export default function TimelessHomesPage() {
  const builder = getBuilder("timeless-homes");
  const plans = getPlansByBuilder("timeless-homes");

  if (!builder) {
    return (
      <main className="bg-black text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold">Builder not found</h1>
          <p className="text-white/80 mt-3">
            The Timeless Homes builder profile is missing.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            {builder.logo ? (
              <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0">
                <Image
                  src={builder.logo}
                  alt={`${builder.name} logo`}
                  fill
                  className="object-contain"
                  sizes="64px"
                  priority
                />
              </div>
            ) : null}

            <div>
              <div className="text-xs tracking-[0.2em] text-white/60 uppercase">
                Builder we represent
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold mt-1">
                {builder.name}
              </h1>
            </div>
          </div>

          <div className="text-sm text-white/80 md:text-right">
            Have questions about a plan or a current build?{" "}
            <Link href="/contact" className="text-yellow-300 hover:underline">
              Contact us
            </Link>{" "}
            directly.
          </div>
        </header>

        <p className="text-white/80 max-w-3xl leading-relaxed mb-12">
          {builder.description}
        </p>

        <h2 className="text-xl font-semibold mb-6">Available floorplans</h2>

        {/* Plan cards with first-photo thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((p) => {
            const thumb = p.images?.[0]; // first image
            return (
              <Link
                key={p.slug}
                href={`/floorplans/timeless-homes/${p.slug}`}
                className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
                  <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full bg-black/40">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt={`${p.name} photo`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 220px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                        No photo yet
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="text-lg font-semibold group-hover:text-yellow-300 transition">
                      {p.name}
                    </div>
                    <div className="text-sm text-white/70 mt-1">
                      {p.sqft} • {p.beds} Bed • {p.baths} Bath
                    </div>
                    <p className="text-sm text-white/70 mt-3 leading-relaxed">
                      {p.summary}
                    </p>
                    <div className="text-sm text-yellow-300 mt-4">
                      View photos & details →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}