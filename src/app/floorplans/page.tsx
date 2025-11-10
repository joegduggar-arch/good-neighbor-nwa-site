// src/app/floorplans/page.tsx
import Link from "next/link";
import { getBuilders } from "@/lib/floorplans";

export const metadata = {
  title: "Floorplans | Good Neighbor Realty",
  description: "Explore available floorplans.",
};

export default function FloorplansIndex() {
  const builders = getBuilders();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-8 text-4xl font-semibold">Floorplans</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {builders.map((b) => (
            <Link
              key={b.slug}
              href={`/builders/${b.slug}`}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-700"
            >
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.logo}
                  alt={b.name}
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <div className="font-medium">{b.name}</div>
                  <div className="text-sm text-neutral-400">View plans</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}