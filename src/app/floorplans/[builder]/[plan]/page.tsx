// src/app/floorplans/[builder]/[plan]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { getBuilder, getPlan } from "@/lib/floorplans";

export default function FloorplanPage({
  params,
}: {
  params: { builder: string; plan: string };
}) {
  const builder = getBuilder(params.builder);
  const plan = getPlan(params.builder, params.plan);

  if (!builder || !plan) {
    return (
      <main className="bg-black text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold">Floorplan not found</h1>
          <p className="text-white/80 mt-3">
            This plan may have been renamed or removed.
          </p>
          <div className="mt-6">
            <Link
              href={`/builders/${params.builder}`}
              className="text-yellow-300 hover:underline"
            >
              Back to builder page
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs tracking-[0.2em] text-white/60 uppercase">
          {builder.name} • Floorplan
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold">{plan.name}</h1>
            <div className="text-white/80 mt-3">
              {plan.sqft} • {plan.beds} Bed • {plan.baths} Bath
            </div>
          </div>

          <div className="text-sm text-white/80">
            <Link href="/contact" className="text-yellow-300 hover:underline">
              Contact us
            </Link>{" "}
            for availability, pricing, and timelines.
          </div>
        </div>

        <p className="text-white/80 max-w-3xl leading-relaxed mt-6">
          {plan.summary}
        </p>

        {plan.disclaimer ? (
          <p className="text-white/60 text-sm mt-4">{plan.disclaimer}</p>
        ) : null}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plan.images.map((src, idx) => (
            <div
              key={`${plan.slug}-${idx}`}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={`${plan.name} — image ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="px-4 py-3 text-sm text-white/70">
                {plan.name} — image {idx + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={`/builders/${builder.slug}`}
            className="text-yellow-300 hover:underline"
          >
            ← Back to {builder.name}
          </Link>
        </div>
      </div>
    </main>
  );
}