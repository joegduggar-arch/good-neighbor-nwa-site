// src/components/NWAOverview.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const AREAS = [
  {
    title: "Trails & Nature",
    description: "Miles of greenways, rolling hills, and four-season scenery.",
    image: "/images/placeholders/nwa-outdoors.jpg",
    href: "/trails",
  },
  {
    title: "Homes & Neighborhoods",
    description: "Thoughtful new construction and established neighborhoods.",
    image: "/images/placeholders/interior-bath.jpg",
    href: "/homes",
  },
  {
    title: "Lifestyle",
    description: "Dining, events, and small-town charm across NWA.",
    image: "/images/placeholders/nwa-homes.jpg",
    href: "/lifestyle",
  },
  {
    title: "Interiors & Craftsmanship",
    description: "Warm finishes, bright kitchens, and inviting living spaces.",
    image: "/images/placeholders/interior-living-2.jpg",
    href: "/interiors",
  },
];

const TAGS = [
  "Bike-friendly",
  "Family-oriented",
  "Active arts",
  "Year-round events",
  "Lakes & parks",
  "Growing jobs",
];

export default function NWAOverview() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl font-bold text-neutral-900">
          Northwest Arkansas at a glance
        </h2>

        {/* Grid of clickable cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-neutral-900 group-hover:text-yellow-600">
                  {area.title}
                </h3>
                <p className="text-sm text-neutral-600">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Tags underneath */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-300 bg-white px-4 py-1 text-sm text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
