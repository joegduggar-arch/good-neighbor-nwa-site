// src/app/builders/milagro-designs/page.tsx
import Link from "next/link";
import { getBuilderBySlug, getPlansByBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description:
    "Floorplans and work by Timeless Homes (Milagro Designs, LLC) in Bella Vista.",
};

export default function TimelessBuilderPage() {
  const builder = getBuilderBySlug("timeless");
  const groups = getPlansByBuilder("timeless");

  if (!builder) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-3xl font-semibold">Builder not found</h1>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold">{builder.name}</h1>
          <p className="mt-3 text-neutral-300">{builder.blurb}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((p) => (
            <Link
              key={p.slug}
              href={`/floorplans/${builder.slug}/${p.slug}`}
              className="group overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 hover:border-neutral-700"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.cover}
                alt={p.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{p.title}</h3>
                {p.approxSqft && (
                  <p className="mt-1 text-sm text-neutral-400">{p.approxSqft}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}