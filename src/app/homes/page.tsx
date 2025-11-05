import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Homes & Neighborhoods | Good Neighbor Realty",
  description:
    "Thoughtful new construction and established neighborhoods across Northwest Arkansas.",
};

export default function HomesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative h-[45vh] w-full overflow-hidden bg-neutral-900">
        <Image
          src="/images/placeholders/interior-kitchen-2.jpg"
          alt="Homes and neighborhoods across NWA"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10 text-white">
            <h1 className="text-4xl font-extrabold">Homes & Neighborhoods</h1>
            <p className="mt-2 max-w-3xl text-neutral-200">
              From fresh new construction in Bella Vista to tree-lined streets
              and mature lots, there’s a great fit for every stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-neutral-800">
              We represent a range of homes throughout Northwest Arkansas, with
              an emphasis on new construction in Bella Vista. Our builders focus
              on livable floor plans, quality finishes, and practical
              conveniences—think walk-in pantries, generous primary suites, and
              inviting living spaces that work for real life.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-neutral-900">
              What buyers love
            </h2>
            <ul className="mt-4 space-y-3 text-neutral-800">
              <li>• New builds plus established neighborhoods to choose from</li>
              <li>• Open layouts and bright natural light</li>
              <li>• Functional storage, mud rooms, and large pantries</li>
              <li>• Covered decks and wooded lots for privacy</li>
              <li>• Quick access to trails, lakes, and essentials</li>
            </ul>

            <p className="mt-8 text-lg leading-relaxed text-neutral-800">
              Whether you’re drawn to modern builds with clean lines or classic
              cottage-style homes surrounded by trees, Bella Vista offers
              beautiful options at every price point. Our team knows the local
              builders, upcoming projects, and best lots—so you can make a move
              with confidence.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="text-lg font-semibold text-neutral-900">
              Browse current listings
            </h3>
            <p className="mt-2 text-neutral-700">
              Use our IDX search to see what’s available today.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/idx"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 font-semibold text-neutral-900 transition hover:bg-yellow-400"
              >
                Search Homes (IDX)
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 font-semibold text-neutral-800 hover:bg-neutral-100"
              >
                Talk with an Agent
              </Link>
            </div>

            <div className="mt-8 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
              <p>
                Good Neighbor Realty specializes in new construction homes
                across Bella Vista and Northwest Arkansas. From open layouts to
                wooded views, we’ll help match you with the right home for your
                lifestyle.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
