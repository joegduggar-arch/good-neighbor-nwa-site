import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Lifestyle | Good Neighbor Realty",
  description:
    "Dining, events, and small-town charm across Northwest Arkansas.",
};

export default function LifestylePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative h-[45vh] w-full overflow-hidden bg-neutral-900">
        <Image
          src="/images/placeholders/nwa-homes.jpg"
          alt="Lifestyle across NWA"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10 text-white">
            <h1 className="text-4xl font-extrabold">Lifestyle</h1>
            <p className="mt-2 max-w-3xl text-neutral-200">
              Coffee shops, events, live music, and a tight-knit community
              feel—NWA offers plenty to do without losing that relaxed pace.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-neutral-800">
              From Saturday farmers markets to bike races and seasonal festivals,
              there’s always something on the calendar. Dining ranges from BBQ
              and food trucks to chef-driven spots, with new options arriving
              all the time. Families appreciate strong schools and plenty of
              parks, while remote workers love the balance of nature and
              convenience.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-neutral-900">
              A few favorites
            </h2>
            <ul className="mt-4 space-y-3 text-neutral-800">
              <li>• Weekly markets and community events</li>
              <li>• Local coffee, bakeries, and family-friendly dining</li>
              <li>• Year-round races, rides, and outdoor festivals</li>
              <li>• Arts, museums, and live music across the region</li>
              <li>• Easy access to lakes, trails, and parks</li>
            </ul>
          </article>

          <aside className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900">
              Considering a move?
            </h3>
            <p className="mt-2 text-neutral-700">
              We’ll help you zero in on an area that fits your day-to-day life.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/idx"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 font-semibold text-neutral-900 transition hover:bg-yellow-400"
              >
                Explore Homes (IDX)
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 font-semibold text-neutral-800 hover:bg-neutral-50"
              >
                Ask Us Anything
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
