// src/app/agents/page.tsx

import Image from "next/image";
import Link from "next/link";

type Agent = {
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
  shortBio: string;
};

const AGENTS: Agent[] = [
  {
    slug: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker / Owner",
    phone: "(479) 713-9565",
    email: "joegduggar@gmail.com",
    photo: "/agent/joe.jpg",
    shortBio:
      "Joe is a lifelong Northwest Arkansas local and principal broker of Good Neighbor Realty, serving Bella Vista, Bentonville, and the surrounding areas.",
  },
  {
    slug: "marcus-day",
    name: "Marcus Day",
    title: "Realtor®",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    photo: "/agent/marcus.jpg",
    shortBio:
      "Marcus helps buyers and sellers navigate the fast-moving NWA market with clear communication and a steady approach.",
  },
  {
    slug: "christy-rainier",
    name: "Christy Rainier",
    title: "Realtor®",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    photo: "/agent/christy.jpg",
    shortBio:
      "Christy loves matching clients with homes that fit their lifestyle, from first-time buyers to growing families.",
  },
];

export const metadata = {
  title: "Our Agents | Good Neighbor Realty",
  description:
    "Meet the Good Neighbor Realty team serving Bella Vista, Bentonville, Rogers, Springdale, Prairie Grove, and the surrounding areas.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold md:text-4xl">Our Agents</h1>
          <p className="mt-4 max-w-3xl text-sm text-neutral-300 md:text-base">
            Meet the Good Neighbor Realty team serving Bella Vista, Bentonville,
            Rogers, Springdale, Prairie Grove, and the surrounding areas.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {AGENTS.map((agent) => (
            <article
              key={agent.slug}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 md:p-6"
            >
              <div className="flex gap-4 md:gap-6">
                {/* CLICKABLE PHOTO */}
                <Link
                  href={`/agents/${agent.slug}`}
                  className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border border-neutral-700 bg-neutral-900 md:h-20 md:w-20"
                >
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </Link>

                <div className="flex-1">
                  <h2 className="text-lg font-semibold md:text-xl">
                    {agent.name}
                  </h2>
                  <p className="text-sm text-neutral-300">{agent.title}</p>

                  <div className="mt-2 text-xs text-neutral-400 md:text-sm">
                    <div>Phone: {agent.phone}</div>
                    <div>Email: {agent.email}</div>
                  </div>

                  <p className="mt-3 text-sm text-neutral-200">
                    {agent.shortBio}
                  </p>

                  <Link
                    href={`/agents/${agent.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-yellow-400 hover:text-yellow-300"
                  >
                    View full profile<span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
