import HeroVideo from "@/components/HeroVideo";
import Section from "@/components/Section";
import NWAOverview from "@/components/NWAOverview";
import Reveal from "@/components/Reveal";
import ListingCard from "@/components/ListingCard";
import { homes } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="flex flex-col items-stretch">
      {/* ---------------- HERO VIDEO ---------------- */}
      <HeroVideo
        src="/videos/hero-loop.mp4"
        poster="/images/placeholders/hero-placeholder.jpg"
      />

      {/* ---------------- INTRO ---------------- */}
      <Section id="intro">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to Good Neighbor Realty
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Serving Northwest Arkansas — with a special focus on{" "}
              <span className="font-medium">Bella Vista</span> new construction.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- NWA OVERVIEW ---------------- */}
      <Section id="nwa" bg="subtle">
        <NWAOverview />
      </Section>

      {/* ---------------- FEATURED BELLA VISTA HOMES (CLICKABLE) ---------------- */}
      <Section id="listings">
        <Reveal>
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight">
            Featured Bella Vista Homes
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homes.slice(0, 3).map((h, i) => (
            <Reveal key={h.slug} delay={i * 90}>
              <ListingCard
                listing={{
                  slug: h.slug,
                  title: h.title,
                  location: h.location,
                  plan: h.plan.split(" ")[0], // show short plan name
                  beds: h.beds,
                  status: h.status,
                  image: h.hero,
                }}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- PARTNER BUILDERS (BELLA VISTA FOCUS) ---------------- */}
      <Section id="builders" bg="dark">
        <Reveal>
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Our Partner Builders
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-2">
          <Reveal delay={100}>
            <div>
              <h3 className="text-xl font-medium text-white">Milagro Designs</h3>
              <p className="mt-2 text-neutral-300">
                Led by Josiah Duggar—custom and spec homes tailored for{" "}
                Bella Vista living.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <h3 className="text-xl font-medium text-white">
                Dream Built Custom Homes
              </h3>
              <p className="mt-2 text-neutral-300">
                Dwain Swanson’s team delivers durable, well-planned builds across
                Bella Vista and greater NWA.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
