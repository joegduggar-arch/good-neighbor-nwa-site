import Image from "next/image";
import Link from "next/link";
import { getPlan, getBuilder } from "@/lib/floorplans";

export default function FloorplanPage({
  params,
}: {
  params: { builder: string; plan: string };
}) {
  const plan = getPlan(params.builder, params.plan);
  const builder = getBuilder(params.builder);

  if (!plan || !builder) {
    return (
      <main className="bg-black text-white px-6 py-16">
        <p>Floorplan not found.</p>
        <Link
          href={`/builders/${params.builder}`}
          className="text-yellow-400 underline"
        >
          Back to builder
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-black text-white px-6 py-16 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold">{plan.name}</h1>
        <p className="text-white/70 mt-2">
          {plan.sqft} sq ft · {plan.beds} Bed · {plan.baths} Bath
        </p>
        <p className="max-w-3xl mt-4 text-white/80">{plan.summary}</p>
      </header>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plan.images.map((src, i) => (
          <div key={i} className="relative aspect-[4/3]">
            <Image
              src={src}
              alt={`${plan.name} image ${i + 1}`}
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </section>

      {plan.disclaimer && (
        <p className="text-xs text-white/50 mt-12 max-w-3xl">
          {plan.disclaimer}
        </p>
      )}
    </main>
  );
}