// src/app/floorplans/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import PlanGallery from "@/components/PlanGallery";
import { BUILDERS, getPlan } from "@/lib/floorplans";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }) {
  const plan = getPlan(params.slug);
  return {
    title: plan ? `${plan.name} Floorplan | Good Neighbor Realty` : "Floorplan | Good Neighbor Realty",
    description: plan?.short ?? "Floorplan details and photo gallery.",
  };
}

export default function PlanDetailPage({ params }: { params: Params }) {
  const plan = getPlan(params.slug);
  if (!plan) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-neutral-100">Plan not found</h1>
        <p className="mt-2 text-neutral-300">This floorplan isn’t available right now.</p>
      </main>
    );
  }

  const builder = BUILDERS[plan.builder];
  const specs = [
    { k: "Bedrooms", v: plan.beds },
    { k: "Bathrooms", v: plan.baths },
    { k: "Square Feet", v: plan.sqft.toLocaleString() },
    { k: "Stories", v: plan.stories ?? "—" },
    { k: "Garage", v: plan.garage ?? "—" },
    { k: "Status", v: plan.status.replace("-", " ") },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-bold text-neutral-100">{plan.name}</h1>
          <p className="mt-2 max-w-2xl text-neutral-300">{plan.short}</p>
        </div>
        <Link
          href={builder.href}
          className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-800"
        >
          {builder.name}
        </Link>
      </div>

      {/* Hero */}
      <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
        <Image src={plan.hero} alt={`${plan.name} hero`} fill sizes="100vw" className="object-cover" priority />
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Left: Gallery */}
        <div className="md:col-span-2">
          <PlanGallery images={plan.images} />
        </div>

        {/* Right: Specs & description */}
        <aside className="space-y-6">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <h2 className="text-lg font-semibold text-neutral-100">Plan Details</h2>
            <dl className="mt-3 grid grid-cols-1 gap-2 text-sm text-neutral-300">
              {specs.map((s) => (
                <div key={s.k} className="flex justify-between gap-3 border-b border-neutral-800 py-2 last:border-none">
                  <dt className="text-neutral-400">{s.k}</dt>
                  <dd className="font-medium text-neutral-100">{s.v as any}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="text-base font-semibold text-neutral-100">About this plan</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">{plan.description}</p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <h4 className="text-sm font-semibold text-neutral-200">Builder’s Note</h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">
              Floorplan and features shown are representative. Dimensions, finishes, and materials may vary by homesite and over time at the builder’s discretion. Square footage is approximate. Equal Housing Opportunity.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
