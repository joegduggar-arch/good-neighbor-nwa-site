"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const metadata = {
  title: "Milagro Designs | Good Neighbor Realty",
  description:
    "Spec homes by Milagro Designs—bright spaces, clean detailing, and functional layouts across Northwest Arkansas.",
};

type Status = "sold" | "building" | "soon";

type Plan = {
  slug: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  status: Status;
  image: string;
  caption?: string;
};

const PLANS: Plan[] = [
  {
    slug: "mil-1900",
    title: "Plan 1900",
    beds: 3,
    baths: 2,
    sqft: 1900,
    status: "building",
    image: "/images/placeholders/interior-kitchen-2.jpg",
    caption: "Streamlined kitchen with oversized island.",
  },
  {
    slug: "mil-2050",
    title: "Plan 2050",
    beds: 3,
    baths: 2,
    sqft: 2050,
    status: "soon",
    image: "/images/placeholders/interior-living-2.jpg",
    caption: "Light-filled great room and deck connection.",
  },
  {
    slug: "mil-2200",
    title: "Plan 2200",
    beds: 4,
    baths: 2,
    sqft: 2200,
    status: "sold",
    image: "/images/placeholders/foyer.jpg",
    caption: "Welcoming entry with glass door package.",
  },
];

export default function MilagroDesignsPage() {
  const [tab, setTab] = useState<Status>("building");
  const filtered = PLANS.filter((p) => p.status === tab);

  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative h-[45vh] w-full overflow-hidden bg-neutral-900">
        <Image
          src="/images/placeholders/nwa-interior.jpg"
          alt="Milagro Designs"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10 text-white">
            <h1 className="text-4xl font-extrabold">Milagro Designs</h1>
            <p className="mt-2 max-w-3xl text-neutral-200">
              Bright spaces, clean detailing, and functional layouts for
              everyday life around NWA.
            </p>
          </div>
        </div>
      </section>

      {/* Intro + features */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-neutral-800">
              Milagro Designs homes focus on space, light, and flow. Expect
              kitchens that work as a hub, living areas that feel open yet
              defined, and selections that read crisp and timeless.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-neutral-900">
              Buyer-loved details
            </h2>
            <ul className="mt-4 grid gap-3 text-neutral-800 sm:grid-cols-2">
              <li>• Efficient kitchens with pantry solutions</li>
              <li>• Large windows and simplified trim packages</li>
              <li>• Connected indoor/outdoor living where lots allow</li>
              <li>• Balanced bedroom sizes and storage</li>
            </ul>
          </article>

          <aside className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="text-lg font-semibold text-neutral-900">
              Want to walk a Milagro Designs home?
            </h3>
            <p className="mt-2 text-neutral-700">
              Ask about active builds, coming-soon lots, or recent solds.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/idx"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 font-semibold text-neutral-900 transition hover:bg-yellow-400"
              >
                Browse IDX Listings
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 font-semibold text-neutral-800 hover:bg-neutral-100"
              >
                Talk with an Agent
              </Link>
            </div>
          </aside>
        </div>

        {/* Status filter */}
        <div className="mt-12">
          <div className="flex flex-wrap gap-2">
            {[
              { key: "building", label: "Under Construction" },
              { key: "soon", label: "Coming Soon" },
              { key: "sold", label: "Sold" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as Status)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  tab === t.key
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div
                key={p.slug}
                className="group overflow-hidden rounded-2xl border border-neutral-200"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {p.beds} bd • {p.baths} ba • {p.sqft.toLocaleString()} sf
                  </p>
                  {p.caption && (
                    <p className="mt-2 text-sm text-neutral-700">{p.caption}</p>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        p.status === "building"
                          ? "bg-blue-100 text-blue-800"
                          : p.status === "soon"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-neutral-200 text-neutral-800"
                      }`}
                    >
                      {p.status === "building"
                        ? "Under Construction"
                        : p.status === "soon"
                        ? "Coming Soon"
                        : "Sold"}
                    </span>
                    <Link
                      href={`/plans/${p.slug}`}
                      className="text-sm font-semibold text-neutral-900 hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full rounded-xl border border-dashed border-neutral-300 p-8 text-center text-neutral-600">
                Nothing in this status yet—check another filter or{" "}
                <Link href="/contact" className="underline">
                  contact us
                </Link>
                .
              </div>
            )}
          </div>
        </div>

        {/* Builder’s Note / Disclaimer */}
        <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <h4 className="text-base font-semibold text-neutral-900">
            Builder’s Note
          </h4>
          <p className="mt-2 text-sm leading-6 text-neutral-700">
            Every home design represents the builder’s craftsmanship and
            attention to detail. While each floor plan follows a consistent
            vision, slight variations in color schemes, finishes, or materials
            may occur from one build to the next. These changes are part of the
            builder’s process to adapt to material availability, updated codes,
            and design improvements—always with quality and buyer satisfaction
            in mind.
          </p>
        </section>
      </section>
    </main>
  );
}
