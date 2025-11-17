import HeroMovingImage from "@/components/HeroMovingImage";

export default function HomePage() {
  return (
    <main className="relative">

      {/* HERO SECTION */}
      <div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">
        <HeroMovingImage />

        {/* BLACK OVERLAY + TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/50 space-y-6">

          {/* Large Welcome Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to Good Neighbor Realty
          </h2>

          {/* Main Hero Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-5xl leading-tight drop-shadow-md">
            Your trusted real estate professionals serving all of{" "}
            <span className="text-yellow-400">Northwest Arkansas</span> — from new
            construction to forever homes.
          </h1>

          {/* Subtext */}
          <p className="text-white mt-2 text-lg md:text-xl max-w-3xl drop-shadow">
            Locally owned and dedicated to making your next move simple, informed, and stress-free.
          </p>
        </div>
      </div>

      {/* OPTIONAL CONTENT BELOW HERO */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold">Our Partner Builders</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

          <div>
            <h3 className="text-2xl font-semibold">Milagro Designs</h3>
            <p className="text-neutral-300 mt-2">
              Led by Josiah Duggar—custom and spec homes tailored for Bella Vista living.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Dream Built Custom Homes</h3>
            <p className="text-neutral-300 mt-2">
              Dwain Swanson’s team delivers durable, well-planned builds across Bella Vista and greater NWA.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}