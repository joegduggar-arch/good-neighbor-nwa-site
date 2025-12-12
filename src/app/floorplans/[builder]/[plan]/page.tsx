import { notFound } from "next/navigation";
import Image from "next/image";
import { FLOORPLANS } from "@/lib/floorplans";

type Props = {
  params: {
    builder: string;
    plan: string;
  };
};

export default function FloorplanPage({ params }: Props) {
  const builderData = FLOORPLANS[params.builder as keyof typeof FLOORPLANS];
  const planData = builderData?.[params.plan as keyof typeof builderData];

  if (!planData) return notFound();

  const {
    name,
    sqft,
    beds,
    baths,
    description,
    disclaimer,
    images,
  } = planData;

  return (
    <main className="bg-black text-white px-6 py-16 max-w-7xl mx-auto">
      <header className="mb-10">
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
          Timeless Homes · Milagro Designs
        </p>

        <h1 className="text-4xl font-semibold mb-2">{name}</h1>

        <p className="text-gray-300 mb-4">
          {sqft} sq ft (approx.) · {beds} Bed · {baths} Bath
        </p>

        <p className="max-w-3xl text-gray-200 leading-relaxed">
          {description}
        </p>
      </header>

      {/* IMAGE GALLERY */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={src}
            className="relative aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt={`${name} – image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
      </section>

      {disclaimer && (
        <p className="mt-10 text-xs text-gray-500 max-w-3xl">
          {disclaimer}
        </p>
      )}
    </main>
  );
}