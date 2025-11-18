import HeroMovingImage from "@/components/HeroMovingImage";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* HERO – image + centered text (only once) */}
      <HeroMovingImage />

      {/* Rest of the homepage */}
      <section className="bg-neutral-950 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Partner Builders</h2>
          <p className="mt-4 text-neutral-300">
            Milagro Designs and Dream Built Custom Homes bring thoughtful new
            construction options to Bella Vista and greater Northwest Arkansas.
          </p>
        </div>
      </section>
    </main>
  );
}