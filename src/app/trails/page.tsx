import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Trails & Nature | Good Neighbor Realty",
  description:
    "Miles of greenways, rolling hills, and four-season scenery across Northwest Arkansas.",
};

export default function TrailsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative h-[45vh] w-full overflow-hidden bg-neutral-900">
        <Image
          src="/images/placeholders/nwa-outdoors.jpg"
          alt="Northwest Arkansas trails and nature"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10 text-white">
            <h1 className="text-4xl font-extrabold">Trails & Nature</h1>
            <p className="mt-2 max-w-3xl text-neutral-200">
              Greenways, wooded hills, lakes, and four-season views—NWA is built
              for getting outside.
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
              Northwest Arkansas offers hundreds of miles of trails—from paved
              greenways perfect for strollers to rugged singletrack winding
              through the Ozarks. Lakes and parks are tucked into nearly every
              neighborhood, making it easy to fish, paddle, or picnic close to
              home.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-neutral-900">
              Highlights you’ll love
            </h2>
            <ul className="mt-4 space-y-3 text-neutral-800">
              <li>• Razorback Greenway connections across the region</li>
              <li>• Bella Vista’s extensive trail network and lakes</li>
              <li>• Year-round hiking, biking, and scenic overlooks</li>
              <li>• Family-friendly parks, playgrounds, and dog areas</li>
              <li>• Quick access from most neighborhoods</li>
            </ul>

            <p className="mt-8 text-lg leading-relaxed text-neutral-800">
              Whether you’re training for your next ride or just looking for a
              quiet walk under the trees, you’ll find it here. Ask us which
              neighborhoods back up to trails or offer easy access to your
              favorite outdoor spots.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <h3 className="text-lg font-semibold text-neutral-900">
              Explore homes near trails
            </h3>
            <p className="mt-2 text-neutral-700">
              Filter for trail access and outdoor amenities.
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
                We know the trailheads and the neighborhoods. Tell us how you
                like to get outside and we’ll match you with the right area.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
