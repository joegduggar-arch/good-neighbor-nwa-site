import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Interiors & Craftsmanship | Good Neighbor Realty",
  description:
    "Warm finishes, bright kitchens, and inviting living spaces across NWA homes.",
};

export default function InteriorsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative h-[45vh] w-full overflow-hidden bg-neutral-900">
        <Image
          src="/images/placeholders/interior-living-2.jpg"
          alt="Home interiors across NWA"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10 text-white">
            <h1 className="text-4xl font-extrabold">Interiors & Craftsmanship</h1>
            <p className="mt-2 max-w-3xl text-neutral-200">
              Clean lines, natural light, and finishes that feel at home—from
              spacious kitchens to cozy living rooms built for gathering.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-neutral-800">
              Our area’s homes balance practical layouts with thoughtful
              details—pantries and storage where you need them, inviting
              fireplaces, and covered outdoor spaces that extend your living
              area. Many new builds feature quartz counters, durable flooring,
              and modern fixtures for low-maintenance living.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-neutral-900">
              Look for
            </h2>
            <ul className="mt-4 space-y-3 text-neutral-800">
              <li>• Bright kitchens with large islands and ample storage</li>
              <li>• Primary suites with double vanities and walk-in closets</li>
              <li>• Energy-efficient windows and practical materials</li>
              <li>• Covered decks and patios for year-round use</li>
              <li>• Neutral palettes with warm wood tones</li>
            </ul>
          </article>

          <aside className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900">
              Want a closer look?
            </h3>
            <p className="mt-2 text-neutral-700">
              Tour current listings or ask about upcoming new construction in
              Bella Vista.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/idx"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 font-semibold text-neutral-900 transition hover:bg-yellow-400"
              >
                See What’s Available
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 font-semibold text-neutral-800 hover:bg-neutral-50"
              >
                Connect with Us
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
