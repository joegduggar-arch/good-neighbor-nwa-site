// src/app/floorplans/[builder]/[plan]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { getBuilder, getPlan } from "@/lib/floorplans";

type Props = {
  params: { builder: string; plan: string };
};

export default function FloorplanPage({ params }: Props) {
  const builder = getBuilder(params.builder);
  const plan = getPlan(params.builder, params.plan);

  if (!builder || !plan) return notFound();

  return (
    <main className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs tracking-[0.25em] text-white/60">
          {builder.name.toUpperCase()} • MILAGRO DESIGNS
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold mt-2">{plan.name}</h1>

        <div className="text-white/70 mt-3">
          {plan.sqftText} • {plan.beds} Bed • {plan.baths} Bath
        </div>

        <p className="text-white/80 mt-6 max-w-3xl">{plan.summary}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plan.images.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="w-full aspect-[4/3] bg-black/40">
                <img
                  src={src}
                  alt={`${plan.name} image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Hide missing images so you don’t see broken “?” tiles
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {plan.disclaimer ? (
          <p className="text-white/50 text-xs mt-10">{plan.disclaimer}</p>
        ) : null}

        <div className="mt-10">
          <Link href={`/builders/${builder.slug}`} className="text-yellow-400 hover:underline">
            ← Back to {builder.name}
          </Link>
        </div>
      </div>
    </main>
  );
}