// src/app/floorplans/[builder]/[plan]/page.tsx

import Link from "next/link";
import { getPlan } from "@/lib/floorplans";

type Props = {
  params: { builder: string; plan: string };
};

export default function FloorplanPage({ params }: Props) {
  const data = getPlan(params.builder, params.plan);

  if (!data) {
    return (
      <main className="bg-black text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/80">Floorplan not found.</p>
          <Link className="text-yellow-300 hover:underline" href="/builders/timeless-homes">
            Back to Timeless Homes
          </Link>
        </div>
      </main>
    );
  }

  const { name, sqft, beds, baths, summary, disclaimer, images = [] } = data;

  return (
    <main className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs tracking-[0.2em] text-white/60 uppercase">
          {params.builder.replaceAll("-", " ")} • Milagro Designs
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold mt-2">{name}</h1>

        <div className="mt-3 text-white/75">
          {sqft} • {beds} Bed • {baths} Bath
        </div>

        <p className="mt-5 text-white/80 max-w-3xl leading-relaxed">{summary}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="rounded-lg border border-white/10 bg-white/5 overflow-hidden"
            >
              <img
                src={src}
                alt={`${name} image ${i + 1}`}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  // hide broken 404 images so you don't see the "?"
                  (e.currentTarget.parentElement as HTMLElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>

        {disclaimer ? (
          <p className="mt-10 text-sm text-white/55">{disclaimer}</p>
        ) : null}

        <div className="mt-8">
          <Link href="/builders/timeless-homes" className="text-yellow-300 hover:underline">
            ← Back to Timeless Homes
          </Link>
        </div>
      </div>
    </main>
  );
}