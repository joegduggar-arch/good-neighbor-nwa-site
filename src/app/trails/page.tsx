import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Trails & Nature | Good Neighbor Realty",
  description:
    "Explore trails, lakes, and four-season scenery across Northwest Arkansas.",
};

export default function TrailsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative h-[45vh] w-full overflow-hidden bg-neutral-900">
        <Image
          src="/images/placeholders/nwa-outdoors.jpg"
          alt="Northwest Arkansas trails and nature"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10 text-white">
            <h1 className="text-4xl font-extrabold">Trails & Nature</h1>
            <p className="mt-2 max-w-3xl text-neutral-200">
              Miles of greenways, lakes, and wooded hills—right in your
              backyard. Welcome to everyday outdoors in Northwest Arkansas.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-neutral-800">
              Whether you’re cruising the Razorback Greenway, hiking the
              bluffs, or paddling a quiet cove on one of our many lakes,
              Northwest Arkansas makes it easy to live an active, outside-first
              lifestyle. Most neighborhoods sit minutes from trailheads, parks,
              and natural springs—so it’s simple to get out for a quick walk or
              plan a full day of adventure.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-neutral-900">
              Highlights
            </h2>
            <ul className="mt-4 space-y-3 text-neutral-8
