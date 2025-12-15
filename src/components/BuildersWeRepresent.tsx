"use client";

import Link from "next/link";
import Image from "next/image";

type Builder = {
  name: string;
  slug: string;
  logoSrc: string;
};

const builders: Builder[] = [
  {
    name: "Timeless Homes",
    slug: "timeless-homes",
    logoSrc: "/builders/timeless-homes-logo.png",
  },
  {
    name: "Swanson Properties",
    slug: "swanson-properties",
    logoSrc: "/builders/swanson-properties-logo.png",
  },
];

export default function BuildersWeRepresent() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-black/75 text-white shadow-2xl backdrop-blur-md border border-white/10">
      {/* GET STARTED */}
      <div className="border-b border-white/10 px-5 py-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
          Get Started
        </h3>
        <Link
          href="/search"
          className="mt-3 block rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition"
        >
          <div className="text-sm font-medium">Search Properties</div>
          <div className="text-xs text-gray-300">
            City, address, MLS # — start your search.
          </div>
        </Link>
      </div>

      {/* BUILDERS WE REPRESENT */}
      <div className="px-5 py-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300 mb-3">
          Builders We Represent
        </h3>

        <div className="space-y-2">
          {builders.map((builder) => (
            <Link
              key={builder.slug}
              href={`/builders/${builder.slug}`}
              className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
                  <Image
                    src={builder.logoSrc}
                    alt={`${builder.name} logo`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium">{builder.name}</span>
              </div>
              <span className="text-xs text-gray-300">View homes</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
