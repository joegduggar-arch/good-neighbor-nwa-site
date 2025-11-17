// src/app/page.tsx
import HeroMovingImage from "@/components/HeroMovingImage";

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-neutral-50">
      {/* HERO SECTION */}
      <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">
        {/* Moving background image */}
        <HeroMovingImage />

        {/* Slight dark overlay so text stays readable but image shows through */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Centered hero text ONLY (no left text block) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-6">
          {/* Big welcome line above everything */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Welcome to Good Neighbor Realty
          </h2>

          {/* Main headline in the middle */}
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-5xl leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Your trusted real estate professionals serving all of{" "}
            <span className="text-yellow-400">Northwest Arkansas</span> — from
            new construction to forever homes.
          </h1>

          {/* Subline under that */}
          <p className="text-lg md:text-xl text-neutral-100 max-w-3xl drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
            Locally owned and dedicated to making your next move simple,
            informed, and stress-free.
          </p>
        </div>
      </section>

      {/* PARTNER BUILDERS SECTION */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Our Partner Builders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-neutral-200">
            <div>
              <h3 className="text-2xl font-semibold">Milagro Designs</h3>
              <p className="mt-2">
                Led by Josiah Duggar—custom and spec homes tailored for Bella
                Vista living.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Dream Built Custom Homes
              </h3>
              <p className="mt-2">
                Dwain Swanson’s team delivers durable, well-planned builds
                across Bella Vista and greater NWA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}