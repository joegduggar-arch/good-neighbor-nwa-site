// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Good Neighbor Realty | Northwest Arkansas",
  description:
    "Your trusted real estate professionals serving all of Northwest Arkansas — from new construction to forever homes.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO — Welcome first, with background video */}
      <section className="relative isolate overflow-hidden">
        {/* Background video (safe fallback if missing) */}
        <div className="absolute inset-0 -z-10">
          <video
            className="h-full w-full object-cover opacity-35"
            autoPlay
            playsInline
            muted
            loop
            poster="/images/placeholders/hero-fallback.jpg"
          >
            <source src="/media/hero-loop.webm" type="video/webm" />
            <source src="/media/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h1 className="text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl tracking-tight">
            Welcome to Good Neighbor Realty
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-neutral-200 md:text-xl">
            Your trusted real estate professionals serving all of Northwest Arkansas — from new construction to forever homes.
          </p>

          <p className="mt-3 max-w-3xl text-sm text-neutral-300 md:text-base">
            Serving Northwest Arkansas — with a special focus on Bella Vista new construction
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/new-construction"
              className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-amber-300"
            >
              Explore New Construction
            </Link>
            <Link
              href="/floorplans"
              className="rounded-lg border border-neutral-700 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Browse Floorplans
            </Link>
          </div>
        </div>
      </section>

      {/* Northwest Arkansas at a glance */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Northwest Arkansas at a Glance</h2>
          <p className="mt-2 text-neutral-300">
            A snapshot of the communities, landscapes, and homes that make NWA special.
          </p>
        </header>

        {/* 4-card grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Trails & Nature — Bella Vista bike park with biker */}
          <Card
            title="Trails & Nature"
            subtitle="Miles of scenic singletrack, lakes, and greenways."
            image={{
              src: "/images/nwa/trails-bellavista-bike-park.jpg",
              alt: "Mountain biker at the Bella Vista bike park"
            }}
            href="/areas"
            cta="See Outdoor Life"
          />

          {/* Homes & Neighborhoods — drone neighborhood */}
          <Card
            title="Homes & Neighborhoods"
            subtitle="Wooded lots, golf communities, and quiet cul-de-sacs."
            image={{
              src: "/images/nwa/drone-neighborhood.jpg",
              alt: "Drone photo of a Northwest Arkansas neighborhood"
            }}
            href="/new-construction"
            cta="Explore Communities"
          />

          {/* Lifestyle — downtown Springdale or Rogers */}
          <Card
            title="Lifestyle"
            subtitle="Local shops, eateries, markets, and family events."
            image={{
              src: "/images/nwa/downtown-rogers.jpg",
              alt: "Downtown Rogers evening street scene"
            }}
            href="/areas"
            cta="Discover Lifestyle"
          />

          {/* Interiors & Craftsmanship — interior living room from your homes */}
          <Card
            title="Interiors & Craftsmanship"
            subtitle="Inviting spaces, quality finishes, and thoughtful details."
            image={{
              src: "/images/nwa/interior-living.jpg",
              alt: "Bright living room interior from one of our homes"
            }}
            href="/floorplans"
            cta="View Floorplans"
          />
        </div>
      </section>

      {/* Optional: Featured Listings row (kept simple and fast) */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Listings</h2>
          <p className="mt-2 text-neutral-300">
            A selection of available and upcoming properties across NWA.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Replace these with your dynamic cards or keep as placeholders */}
          <ListingCard
            img="/images/placeholders/home-exterior-2.jpg"
            title="Bella Vista • Coming Soon"
            subtitle="New construction on wooded lot"
            href="/new-construction"
          />
          <ListingCard
            img="/images/placeholders/home-exterior-1.jpg"
            title="Benton County • Move-In Ready"
            subtitle="Updated interiors & quiet street"
            href="/search"
          />
          <ListingCard
            img="/images/placeholders/interior-living-2.jpg"
            title="NWA • Under Construction"
            subtitle="Multiple floorplans available"
            href="/floorplans"
          />
        </div>
      </section>
    </main>
  );
}

/* ----------------- Small, local components ----------------- */

function Card({
  title,
  subtitle,
  image,
  href,
  cta,
}: {
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700"
    >
      <div className="relative h-56 w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-neutral-300">{subtitle}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-amber-300">{cta} →</span>
      </div>
    </Link>
  );
}

function ListingCard({
  img,
  title,
  subtitle,
  href,
}: {
  img: string;
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link href={href} className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700">
      <div className="relative h-48 w-full">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="text-base font-semibold">{title}</div>
        <div className="mt-1 text-sm text-neutral-300">{subtitle}</div>
        <div className="mt-3 text-sm font-semibold text-amber-300">Learn more →</div>
      </div>
    </Link>
  );
}
