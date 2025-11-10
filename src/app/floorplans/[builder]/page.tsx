// src/app/floorplans/[builder]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBuilderBySlug,
  getPlansByBuilder,
  type BuilderKey,
} from "@/lib/floorplans";

type Props = { params: { builder: BuilderKey } };

export const metadata = {
  title: "Builder Floorplans | Good Neighbor Realty",
};

export default function BuilderPlansPage({ params }: Props) {
  const builder = getBuilderBySlug(params.builder);
  if (!builder) return notFound();

  const plans = getPlansByBuilder(builder.key);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-semibold">{builder.name}</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
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
                <div className="text-lg font-medium">{p.title}</div>
                {p.approxSqft && (
                  <div className="mt-1 text-sm text-neutral-400">
                    {p.approxSqft}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}