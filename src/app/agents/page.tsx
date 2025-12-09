// src/app/agents/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Agent = {
  slug: string;
  name: string;
  title: string;
  photo: string;
  phone?: string;
  email?: string;
  shortBio: string;
};

const AGENTS: Agent[] = [
  {
    slug: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker / Owner",
    photo: "/images/agents/joe.jpg",
    phone: "(479) 713-9565",
      email: "joegduggar@gmail.com",
    shortBio:
      "Joe is a lifelong Northwest Arkansas local and principal broker of Good Neighbor Realty, serving Bella Vista, Bentonville, and the surrounding areas.",
  },
  {
    slug: "christy-rainier",
    name: "Christy Rainier",
    title: "Realtor®",
    photo: "/images/agents/christy.jpg",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    shortBio:
      "Christy loves matching clients with homes that fit their lifestyle, from first-time buyers to growing families.",
  },
  {
    slug: "marcus-day",
    name: "Marcus Day",
    title: "Realtor®",
    photo: "/images/agents/marcus.jpg",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    shortBio:
      "Marcus helps buyers and sellers navigate the fast-moving NWA market with clear communication and a steady approach.",
  },
];

export const metadata: Metadata = {
  title: "Agents | Good Neighbor Realty",
  description:
    "Meet the Good Neighbor Realty team serving Northwest Arkansas.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Our Agents
          </h1>
          <p className="mt-4 text-sm text-neutral-300 md:text-base">
            Meet the Good Neighbor Realty team serving Bella Vista, Bentonville,
            Rogers, Springdale, Fayetteville, Prairie Grove, and the surrounding areas.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {AGENTS.map((agent) => {
            const telHref = agent.phone
              ? `tel:${agent.phone.replace(/[^\d]/g, "")}`
              : undefined;

            return (
              <Link
                key={agent.slug}
                href={`/agents/${agent.slug}`}
                className="flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-yellow-400"
              >
                <div className="flex items-center gap-4">
                  {/* Photo */}
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border border-neutral-700">
                    <Image
                      src={agent.photo}
                      alt={agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name / title */}
                  <div>
                    <h2 className="text-lg font-semibold">{agent.name}</h2>
                    <p className="text-sm text-yellow-300">{agent.title}</p>
                    <div className="mt-2 text-xs text-neutral-300">
                      {agent.phone && telHref && (
                        <span className="block">
                          Phone: <span>{agent.phone}</span>
                        </span>
                      )}
                      {agent.email && (
                        <span className="block">
                          Email: <span>{agent.email}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Short bio */}
                <p className="text-sm text-neutral-200">
                  {agent.shortBio}
                </p>

                <span className="mt-1 text-xs font-semibold text-yellow-300">
                  View full profile →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
