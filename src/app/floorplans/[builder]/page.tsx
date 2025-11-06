import Image from "next/image";
import Link from "next/link";
import { BUILDERS, getPlansByBuilder, type BuilderKey } from "@/lib/floorplans";
import { notFound } from "next/navigation";

type Props = { params: { builder: BuilderKey } };

// Prebuild /floorplans/swanson and /floorplans/timeless
export function generateStaticParams() {
  return Object.keys(BUILDERS).map((key) => ({ builder: key as BuilderKey }));
}

export function generateMetadata({ params }: Props) {
  const b = BUILDERS[params.builder];
  if (!b) return {};
  return b.metadata;
}

export default function BuilderPage({ params }: Props) {
  const builder = BUILDERS[params.builder];
  if (!builder) return notFound();

  const plans = getPlansByBuilder(builder.key);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-center gap-4">
          <Image src={builder.logo} alt={builder.name} width={64} height={64} className="h-14 w-14 object-contain" />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">{builder.name}</h1>
            <p className="text-neutral-300">{builder.blurb}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <Link
              key={p.slug}
              href={`/floorplans/${builder.key}/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={p.hero || "/images/placeholders/home-exterior-2.jpg"}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="text-lg font-medium">{p.name}</div>
                <div className="text-sm text-neutral-400">{p.sqft}</div>
                <div className="mt-2 text-sm text-neutral-300 line-clamp-2">{p.summary}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/floorplans" className="text-sm text-neutral-300 hover:underline">
            ← Back to all floorplans
          </Link>
        </div>
      </section>
    </main>
  );
}
