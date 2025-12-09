import Link from "next/link";
import Image from "next/image";

type Builder = {
  name: string;
  slug: string;
  logoSrc: string;
};

const builders: Builder[] = [
  {
    name: "Timeless Homes",
    slug: "timeless-homes",
    logoSrc: "/builders/timeless-homes-logo.png",
  },
  {
    name: "Swanson Properties",
    slug: "swanson-properties",
    logoSrc: "/builders/swanson-properties-logo.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Background overlay (you can swap this for your video/image setup) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />

        {/* Hero content */}
        <div className="relative z-10 flex w-full max-w-6xl flex-col gap-8 px-6 pb-24 pt-32">
          {/* Top overlay card with search + builders */}
          <div className="mx-auto w-full max-w-xl rounded-2xl bg-black/80 px-5 py-4 shadow-2xl backdrop-blur-md border border-white/10">
            {/* GET STARTED */}
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
                Get Started
              </h3>
              <Link
                href="/search"
                className="mt-3 block rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <div className="text-sm font-medium">Search Properties</div>
                <div className="text-xs text-gray-300">
                  City, address, MLS # — start your search.
                </div>
              </Link>
            </div>

            {/* BUILDERS WE REPRESENT */}
            <div className="pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300 mb-3">
                Builders We Represent
              </h3>

              <div className="space-y-2">
                {builders.map((builder) => (
                  <Link
                    key={builder.slug}
                    href={`/builders/${builder.slug}`}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
                        <Image
                          src={builder.logoSrc}
                          alt={`${builder.name} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {builder.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-300">View homes</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main hero text */}
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-yellow-300">
              Welcome to
            </p>
            <h1 className="mt-2 text-4xl font-semibold sm:text-5xl md:text-6xl">
              Good Neighbor <span className="block">Realty</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-200">
              Your trusted real estate professionals serving all of Northwest
              Arkansas — from new construction to forever homes, with a special
              focus on Bella Vista new construction.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/new-construction"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-black shadow-lg hover:bg-yellow-300 transition"
              >
                Explore New Construction
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                Search All Properties
              </Link>
            </div>
          </div>

          {/* Bottom-right small builders card */}
          <div className="pointer-events-none relative mt-8 flex justify-end">
            <div className="pointer-events-auto w-full max-w-lg rounded-2xl bg-black/80 px-5 py-4 shadow-2xl backdrop-blur-md border border-white/10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300 mb-3">
                Builders We Represent
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {builders.map((builder) => (
                  <Link
                    key={builder.slug}
                    href={`/builders/${builder.slug}`}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                  >
                    <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
                      <Image
                        src={builder.logoSrc}
                        alt={`${builder.name} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">
                      {builder.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMP: logo test – remove after confirming paths */}
      <div
        style={{
          position: "fixed",
          bottom: 16,
          left: 16,
          zIndex: 9999,
          padding: 8,
          background: "rgba(0,0,0,0.7)",
          borderRadius: 8,
        }}
      >
        <h4 style={{ color: "white", marginBottom: 4 }}>Logo Test</h4>

        <img
          src="/builders/timeless-homes-logo.png"
          alt="Timeless test"
          style={{ width: 80, height: "auto", background: "white" }}
        />

        <img
          src="/builders/swanson-properties-logo.png"
          alt="Swanson test"
          style={{
            width: 80,
            height: "auto",
            background: "white",
            marginTop: 4,
          }}
        />
      </div>
      {/* END TEMP */}
    </main>
  );
}
