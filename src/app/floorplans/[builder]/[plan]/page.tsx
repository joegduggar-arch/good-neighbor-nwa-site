import Image from "next/image";
import { notFound } from "next/navigation";
import { getPlan, type BuilderKey, type PlanKey } from "@/lib/floorplans";

type Params = { builder: string; plan: string };

export function generateStaticParams(): Params[] {
  // Keep static generation simple for now. If you add more builders/plans,
  // you can enumerate them here.
  return [
    { builder: "milagro-designs", plan: "brecknock" },
    { builder: "milagro-designs", plan: "havensworth" },
  ];
}

export default function PlanPage({ params }: { params: Params }) {
  const builderMap: Record<string, BuilderKey> = {
    "milagro-designs": "timeless",
  };
  const b = builderMap[params.builder];
  if (!b) return notFound();

  const k = params.plan as PlanKey;
  const plan = getPlan(b, k);
  if (!plan) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-neutral-900">
            <Image src={plan.hero} alt={plan.name} fill className="object-cover" />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">{plan.name}</h1>
            <div className="text-neutral-400 mt-1">{plan.sqft}</div>
            <p className="mt-4">{plan.blurb}</p>
            <p className="text-xs text-neutral-400 mt-6">
              Note: Floorplan, finishes, and specifications may vary per home
              at the builder’s discretion.
            </p>
          </div>
        </div>

        {/* Gallery */}
        {plan.gallery.length > 1 && (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {plan.gallery.map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noreferrer"
                 className="block aspect-[4/3] relative rounded overflow-hidden bg-neutral-900">
                <Image src={src} alt={`${plan.name} ${i+1}`} fill className="object-cover" />
              </a>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}