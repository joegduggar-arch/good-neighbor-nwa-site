// src/app/floorplans/[builder]/[plan]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { BUILDERS, PLANS, type BuilderKey, type PlanKey } from "@/lib/floorplans";
import { notFound } from "next/navigation";

type Props = { params: { builder: BuilderKey; plan: PlanKey } };

export async function generateMetadata({ params }: Props) {
  const plan = PLANS[params.plan];
  const builder = BUILDERS[params.builder];
  if (!plan || !builder) return {};
  return {
    title: `${plan.name} — ${builder.name} | Good Neighbor Realty`,
    description: `${plan.name} (${plan.sqft}) by ${builder.name}. View photos, specs, and details.`,
  };
}

export default function PlanDetailPage({ params }: Props) {
  const plan = PLANS[params.plan];
  const builder = BUILDERS[params.builder];
  if (!plan || !builder || plan.builder !== builder.key) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Image src={builder.logo} alt={builder.name} width={56} height={56} className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">{plan.name}</h1>
            <p className="text-neutral-300">{builder.name} • {plan.sqft}</p>
          </div>
        </div>

        {/* Hero */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-800">
          <div className="relative h-[44vh] w-full">
            <Image
              src={plan.hero || "/images/placeholders/home-exterior-2.jpg"}
              alt={plan.name}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          {/* Main */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-medium">Overview</h2>
            <p className="mt-2 text-neutral-300">{plan.summary}</p>

            {/* Gallery */}
            {plan.gallery?.length ? (
              <>
                <h3 className="mt-8 text-lg font-medium">Gallery</h3>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {plan.gallery.map((src, i) => (
                    <div key={i} className="relative h-40 overflow-hidden rounded-xl border border-neutral-800">
                      <Image
                        src={src || "/images/placeholders/interior-living-2.jpg"}
                        alt={`${plan.name} image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : null}

            {/* Disclaimer */}
            <div className="mt-10 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 text-sm text-neutral-300">
              <strong>Disclaimer:</strong> Home renderings, floor plans, dimensions, and features are for illustrative
              purposes and may be modified at the builder’s discretion. Each home may vary in design details, finishes,
              or measurements.
            </div>
          </div>

          {/* Specs */}
          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <h3 className="text-lg font-medium">Specs</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <Spec label="Square Footage" value={plan.sqft} />
                {plan.beds ? <Spec label="Bedrooms" value={`${plan.beds}`} /> : null}
                {plan.baths ? <Spec label="Bathrooms" value={`${plan.baths}`} /> : null}
                {plan.garage ? <Spec label="Garage" value={plan.garage} /> : null}
                <Spec label="Builder" value={builder.name} />
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={`/floorplans/${builder.key}`}
                  className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20"
                >
                  ← Back to {builder.name}
                </Link>
                <Link
                  href="/floorplans"
                  className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20"
                >
                  All Floorplans
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-neutral-800/70 pb-2">
      <dt className="text-neutral-400">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
