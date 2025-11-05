import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dream Built Custom Homes | Good Neighbor Realty",
  description:
    "Northwest Arkansas homes by Dream Built Custom Homes—quality construction and thoughtful details. Explore current builds, upcoming homes, and floorplans.",
};

function BuilderHero({
  logoSrc,
  title,
  blurb,
}: {
  logoSrc: string;
  title: string;
  blurb: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="flex items-center gap-6">
          <Image
            src={logoSrc}
            alt=""
            width={72}
            height={72}
            className="h-14 w-14 rounded-full ring-1 ring-white/10 object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-neutral-300">{blurb}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TwoUp({
  leftSrc,
  rightSrc,
}: {
  leftSrc: string;
  rightSrc: string;
}) {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-12 sm:grid-cols-2">
      <div className="overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={leftSrc}
          alt=""
          width={1600}
          height={1066}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={rightSrc}
          alt=""
          width={1600}
          height={1066}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Link
          href="/listings?status=under-construction"
          className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <h3 className="font-semibold">Under Construction</h3>
          <p className="text-sm text-neutral-600">
            Homes you can still personalize.
          </p>
        </Link>
        <Link
          href="/listings?status=coming-soon"
          className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <h3 className="font-semibold">Coming Soon</h3>
          <p className="text-sm text-neutral-600">
            Get a head start on upcoming releases.
          </p>
        </Link>
        <Link
          href="/listings?sold=1"
          className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <h3 className="font-semibold">Recently Sold</h3>
          <p className="text-sm text-neutral-600">
            See what buyers loved in NWA.
          </p>
        </Link>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
        <h4 className="mb-2 font-semibold">Builder’s Note</h4>
        <p className="text-sm leading-relaxed">
          Floorplans, specifications, and finishes shown are representative and
          may evolve as homes progress. Minor adjustments to layout, materials,
          and color selections may be made at the builder’s discretion to
          improve quality, availability, or timing. If you’re targeting a
          particular palette or feature, tell us early—our team will confirm
          what’s included for each address and where customization is possible.
        </p>
      </div>
    </section>
  );
}

export default function DreamBuiltPage() {
  return (
    <main className="bg-white">
      <BuilderHero
        logoSrc="/images/placeholders/home-exterior-2.jpg"
        title="Dream Built Custom Homes"
        blurb="Local, long-standing craftsmanship throughout Bella Vista and greater Northwest Arkansas."
      />

      <TwoUp
        leftSrc="/images/placeholders/interior-living-2.jpg"
        rightSrc="/images/placeholders/interior-kitchen-2.jpg"
      />

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <p className="text-neutral-700">
          Dream Built has served NWA homeowners for more than 25 years, focusing
          on solid construction, livable floorplans, and details that stand the
          test of time. Browse active projects, explore upcoming releases, or
          review floorplans to see what fits your needs.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/builders/floorplans"
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            View Floorplans
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Ask About Availability
          </Link>
        </div>
      </section>

      <QuickLinks />
      <Disclaimer />
    </main>
  );
}
