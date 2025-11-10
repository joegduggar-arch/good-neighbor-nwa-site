// src/app/floorplans/[builder]/[plan]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPlan, BUILDERS, type BuilderKey, type PlanKey } from "@/lib/floorplans";

type Params = { builder: BuilderKey; plan: PlanKey };

export async function generateStaticParams(): Promise<Params[]> {
  // If you want SSG, enumerate the two plans:
  return [
    { builder: "timeless-homes", plan: "brecknock" },
    { builder: "timeless-homes", plan: "havensworth" },
  ];
}

export default function PlanPage({ params }: { params: Params }) {
  const plan = getPlan(params.builder, params.plan);
  if (!plan) return notFound();

  const builder = BUILDERS[plan.builder];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">{plan.name}</h1>
            <p className="mt-1 text-sm text-neutral-300">
              {builder?.name} • {plan.sqft}
            </p>
          </div>
          {builder?.logo && (
            <Image
              src={builder.logo}
              alt={builder.name}
              width={140}
              height={60}
              className="h-10 w-auto object-contain"
            />
          )}
        </div>

        {/* Hero */}
        <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-800">
          <Image
            src={plan.hero}
            alt={`${plan.name} hero`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="mb-8 max-w-3xl text-neutral-300">{plan.blurb}</p>

        {/* Gallery (supports 50+ images) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plan.gallery.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-800">
              <Image src={src} alt={`${plan.name} photo ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-sm text-neutral-400">
          * Floorplan, features, selections, and dimensions may vary by homesite and build and are
          subject to the builder’s discretion.
        </p>
      </section>
    </main>
  );
}
