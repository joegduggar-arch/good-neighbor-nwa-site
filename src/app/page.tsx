import HeroVideo from "@/components/HeroVideo";
import Section from "@/components/Section";
import NWAOverview from "@/components/NWAOverview";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <main className="flex flex-col items-stretch">
      {/* ---------------- HERO VIDEO ---------------- */}
      <HeroVideo
        src="/videos/hero-loop.mp4"
        poster="/images/placeholders/hero-placeholder.jpg"
      />

      {/* ---------------- INTRO SECTION ---------------- */}
      <Section id="intro">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to Good Neighbor Realty
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Serving Northwest Arkansas — from the quiet hills of Bella Vista
              to the vibrant heart of Bentonville and beyond.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- NORTHWEST ARKANSAS OVERVIEW ---------------- */}
      <Section id="nwa" bg="subtle">
        <NWAOverview />
      </Section>

      {/* ---------------- FEATURED LISTINGS ---------------- */}
      <Section id="listings">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
            Featured Homes
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={100}>
            <div className="rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white">
              <img
                src="/images/placeholders/nwa-homes.jpg"
                alt="Sample Home"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg">Bella Vista New Build</h3>
                <p className="text-sm text-neutral-600">
                  3 Bed · 2 Bath · 1,850 sqft
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white">
              <img
                src="/images/placeholders/nwa-interior.jpg"
                alt="Sample Home"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg">Bentonville Craftsman</h3>
                <p className="text-sm text-neutral-600">
                  4 Bed · 3 Bath · 2,400 sqft
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- BUILDERS SECTION ---------------- */}
      <Section id="builders" bg="dark">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Our Partner Builders
          </h2>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto text-center">
          <Reveal delay={100}>
            <div>
              <h3 className="text-xl font-medium text-white">
                Milagro Designs
              </h3>
              <p className="text-neutral-300 mt-2">
                Led by Josiah Duggar — thoughtful craftsmanship and custom
                homes that reflect Northwest Arkansas living.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <h3 className="text-xl font-medium text-white">
                Dream Built Custom Homes
              </h3>
              <p className="text-neutral-300 mt-2">
                Founded by Dwain Swanson — blending innovation and timeless
                design in every build.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
