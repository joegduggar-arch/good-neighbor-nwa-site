import Image from "next/image";
import Link from "next/link";

export default function HeroMovingImage() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-moving.jpg" // public/images/hero-moving.jpg
          alt="Northwest Arkansas neighborhood aerial"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Text overlay */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col justify-center px-6 py-20 md:min-h-[70vh]">
        <p className="text-sm font-medium text-yellow-300 tracking-[0.2em] uppercase">
          Welcome to
        </p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          Good Neighbor Realty
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-neutral-200 md:text-xl">
          Your trusted real estate professionals serving all of Northwest Arkansas —
          from new construction to forever homes.
        </p>

        <p className="mt-2 max-w-2xl text-sm text-neutral-300 md:text-base">
          Serving Northwest Arkansas — with a special focus on Bella Vista new construction.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/new-construction"
            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition"
          >
            Explore New Construction
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-full border border-neutral-500 px-6 py-2 text-sm font-semibold text-neutral-100 hover:border-yellow-400 hover:text-yellow-200 transition"
          >
            Search All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}