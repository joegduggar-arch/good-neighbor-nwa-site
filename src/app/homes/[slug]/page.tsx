import Image from "next/image";
import type { Metadata } from "next";
import { homes } from "@/lib/data";

export async function generateStaticParams() {
  return homes.map((h) => ({ slug: h.slug }));
}

export function generateMetadata({
  params,
}: { params: { slug: string } }): Metadata {
  const home = homes.find((h) => h.slug === params.slug);
  return {
    title: home ? `${home.title} · Good Neighbor Realty` : "Home",
    description: home?.summary,
  };
}

export default function HomeDetail({ params }: { params: { slug: string } }) {
  const home = homes.find((h) => h.slug === params.slug);
  if (!home) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-neutral-600">Home not found.</p>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <div className="relative h-[44vh] overflow-hidden">
        {/* use <img> for speed (these are public assets) */}
        <img
          src={home.hero}
          alt={home.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-5 left-5 text-white">
          <h1 className="text-3xl font-semibold">{home.title}</h1>
          <p className="text-sm opacity-90">
            {home.location} · {home.plan} · {home.beds}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-10">
        {home.summary && (
          <p className="max-w-3xl text-lg text-neutral-700">{home.summary}</p>
        )}

        {home.features && home.features.length > 0 && (
          <ul className="mt-6 grid list-disc gap-2 pl-6 text-neutral-700 sm:grid-cols-2">
            {home.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}

        {/* Gallery */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {home.gallery.map((src, i) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src={src} alt={`${home.title} photo ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
