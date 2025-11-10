// src/app/builders/milagro-designs/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  getBuilderBySlug,
  getPlansByBuilder,
  groupByStatus,
  type Plan,
} from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description:
    "Floorplans by Timeless Homes (Milagro Designs) — thoughtfully built homes in Northwest Arkansas.",
};

function PlansRow({ title, items }: { title: string; items: Plan[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/floorplans/timeless/${p.slug}`}
            className="rounded-lg border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition overflow-hidden"
          >
            <div className="relative w-full aspect-[16/9] bg-neutral-800">
              {p.images?.[0] ? (
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="p-4">
              <div className="font-medium">{p.name}</div>
              {p.sqft ? (
                <div className="text-sm text-neutral-400">{p.sqft}</div>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function TimelessBuilderPage() {
  const builder = getBuilderBySlug("timeless");
  const plans = getPlansByBuilder("timeless");
  const groups = groupByStatus(plans);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-6">
          <h1 className="text-4xl font-bold">
            {builder?.name ?? "Timeless Homes"}
          </h1>
          <p className="text-neutral-400 mt-2">
            Explore current and past floorplans from Timeless Homes. (Square
            footage, finishes, and colors may vary at the builder’s discretion.)
          </p>
        </div>

        <PlansRow title="Available" items={groups["available"]} />
        <PlansRow
          title="Under Construction"
          items={groups["under-construction"]}
        />
        <PlansRow title="Sold" items={groups["sold"]} />
      </div>
    </main>
  );
}
