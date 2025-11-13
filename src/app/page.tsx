Joe Duggar:	export default function Home() {
  return (
    <>
      <HeroMovingImage />

      {/* existing sections below */}
      {/* <MainContent /> etc… */}
    </>
  );
}Joe Duggar:	import HeroMovingImage from "@/components/HeroMovingImage";

export default function HomePage() {
  return (
    <>
      <HeroMovingImage />

      <main className="section text-center py-16">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Welcome to Good Neighbor Realty
        </h1>
        <p className="mt-4 text-neutral-300">
          Helping Northwest Arkansas buyers, sellers, and builders.
        </p>
      </main>
    </>
  );
}