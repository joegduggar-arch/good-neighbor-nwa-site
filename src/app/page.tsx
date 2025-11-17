import HeroMovingImage from "@/components/HeroMovingImage";

export default function HomePage() {
  return (
    <>
      <HeroMovingImage />

      <main>
        {/* HERO TEXT OVERLAY */}
        <section className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight drop-shadow-lg">
            Your trusted real estate professionals serving all of{" "}
            <span className="text-yellow-400">Northwest Arkansas</span> — from new
            construction to forever homes.
          </h1>

          <p className="text-white mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            Locally owned and dedicated to making your next move simple, informed,
            and stress-free.
          </p>
        </section>

        {/* MAIN CONTENT SECTION */}
        <section className="bg-neutral-100 text-center py-20 px-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Welcome to Good Neighbor Realty
          </h2>

          <p className="mt-4 text-neutral-600 text-lg max-w-3xl mx-auto">
            Serving Northwest Arkansas — with a special focus on Bella Vista new construction.
          </p>
        </section>

        {/* BUILDER SECTION (unchanged) */}
        <section className="bg-neutral-900 text-white text-center py-20 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Partner Builders</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-10 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold">Milagro Designs</h3>
              <p className="mt-2 text-neutral-300">
                Led by Josiah Duggar — custom and spec homes tailored for
                Bella Vista living.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Dream Built Custom Homes</h3>
              <p className="mt-2 text-neutral-300">
                Dwain Swanson’s team delivers durable, well-planned builds across
                Bella Vista and greater NWA.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}