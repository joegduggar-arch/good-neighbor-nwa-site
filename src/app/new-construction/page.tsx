// src/app/new-construction/page.tsx
import Image from "next/image";
import Link from "next/link";
import { BUILDERS } from "@/lib/floorplans";

export const metadata = {
  title: "New Construction | Good Neighbor Realty",
  description:
    "Explore new-construction homes built exclusively in Bella Vista, Arkansas — crafted by Swanson Properties and Timeless Home (Milagro Designs).",
};

export default function NewConstructionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="relative h-[50vh] w-full">
          <Image
            src="/images/placeholders/home-exterior-2.jpg"
            alt="New construction home exterior"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
              New Construction Homes
            </h1>
            <p className="max-w-2xl text-neutral-300 text-lg">
              Experience thoughtfully designed homes built <strong>exclusively in Bella Vista</strong>, Arkansas.
              Each property is crafted with care by our trusted builders — Swanson Properties (DreamBuilt Custom Homes)
              and Timeless Home (Milagro Designs).
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            Our new-construction homes are located <strong>exclusively within Bella Vista</strong> — a community
            known for its scenic landscapes, golf courses, and peaceful wooded surroundings.
          </p>

          <p className="text-neutral-300 leading-relaxed text-lg">
            Each floor plan is carefully curated for comfort and functionality, while maintaining a timeless
            aesthetic. Whether you’re looking for a single-level retreat or a spacious family home, our builders
            offer a variety of layouts that complement the beauty of Northwest Arkansas living.
          </p>

          <div className="mt-10 border-t border-neutral-800 pt-10">
            <h2 className="text-2xl font-semibold mb-6">Meet Our Builders</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {Object.values(BUILDERS).map((b) => (
                <Link
                  key={b.key}
                  href={`/floorplans/${b.key}`}
                  className="group flex flex-col items-center rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 text-center transition hover:border-neutral-600 hover:bg-neutral-800"
                >
                  <div className="relative h-20 w-20 mb-4">
                    <Image
                      src={b.logo}
                      alt={b.name}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-100 group-hover:text-white">
                    {b.name}
                  </h3>
                  <p className="mt-2 text-neutral-400 text-sm max-w-xs">{b.blurb}</p>
                  <p className="mt-4 text-amber-300 text-sm font-semibold">
                    View Floorplans →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
