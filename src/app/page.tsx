import HeroVideo from "@/components/HeroVideo";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import AreasGrid from "@/components/AreasGrid";
import FeaturedListings from "@/components/FeaturedListings";
import StoryBlock from "@/components/StoryBlock";

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <Section id="value" bg="subtle" className="text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold">Real estate, refined.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            Clear guidance, careful presentation, and responsive service across Northwest Arkansas.
          </p>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            ["Curated Listings", "Photo-forward, accurate details."],
            ["Local Expertise", "Bella Vista • Bentonville • Siloam."],
            ["Easy Search", "Fast, mobile-first experience."]
          ].map(([t, d], i) => (
            <Reveal key={i} delay={140 + i * 80}>
              <div className="rounded-lg border border-black/5 p-5">
                <div className="text-lg font-medium">{t}</div>
                <div className="mt-1 text-sm text-neutral-600">{d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="featured">
        <Reveal><h2 className="text-2xl md:text-3xl font-semibold">Featured Listings</h2></Reveal>
        <FeaturedListings className="mt-8" />
      </Section>

      <Section id="areas" bg="subtle">
        <Reveal><h2 className="text-2xl md:text-3xl font-semibold">Explore the Areas</h2></Reveal>
        <AreasGrid className="mt-8" />
      </Section>

      <Section id="story">
        <StoryBlock />
      </Section>

      {/* Optional: quick search CTA anchor */}
      <Section id="search" bg="subtle">
        <Reveal>
          <div className="rounded-xl bg-black text-white p-8 md:p-10 flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold">Start your home search</h3>
            <p className="mt-2 text-white/80">Map view, filters, and saved favorites—coming up next.</p>
            <a href="/search" className="mt-6 rounded bg-amber-500 px-5 py-3 font-medium text-black hover:bg-amber-400 transition">
              Open Search
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
