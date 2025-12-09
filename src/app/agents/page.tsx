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
  bio: string;
};

const AGENTS: Agent[] = [
  {
    slug: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker / Owner",
    photo: "/images/agents/joe.jpg",
    phone: "(479) 713-9565",
    email: "joe@goodneighbornwa.com",
    bio: "Joe is a lifelong Northwest Arkansas local and the principal broker of Good Neighbor Realty, helping clients with new construction and forever homes across Bella Vista, Bentonville, and beyond.",
  },
  {
    slug: "marcus-agent",
    name: "Marcus Example",
    title: "Realtor®",
    photo: "/images/agents/marcus.jpg",
    phone: "(479) 555-1234",
    email: "marcus@goodneighbornwa.com",
    bio: "Marcus focuses on helping buyers and sellers navigate the fast-moving NWA market with clear communication and a calm, steady approach.",
  },
  {
    slug: "christy-agent",
    name: "Christy Example",
    title: "Realtor®",
    photo: "/images/agents/christy.jpg",
    phone: "(479) 555-5678",
    email: "christy@goodneighbornwa.com",
    bio: "Christy loves matching clients with homes that fit their lifestyle, from first-time buyers to families looking for more space.",
  },
];

export const metadata: Metadata = {
  title: "Our Agents | Good Neighbor Realty",
  description:
    "Meet the agents at Good Neighbor Realty serving Northwest Arkansas.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold md:text-4xl">Our Agents</h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-300 md:text-base">
            Meet the Good Neighbor Realty team serving Bella Vista, Bentonville,
            and the greater Northwest Arkansas area.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
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
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border border-neutral-700">
                    <Image
                      src={agent.photo}
                      alt={agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-50">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-yellow-300">{agent.title}</p>

                    {agent.phone && (
                      <p className="mt-1 text-sm text-neutral-300">
                        {telHref ? (
                          <span
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-yellow-300 underline-offset-2 hover:underline"
                          >
                            {agent.phone}
                          </span>
                        ) : (
                          agent.phone
                        )}
                      </p>
                    )}

                    {agent.email && (
                      <p className="text-sm text-neutral-300">
                        <span className="hover:text-yellow-300 underline-offset-2 hover:underline">
                          {agent.email}
                        </span>
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-neutral-300">
                  {agent.bio}
                </p>

                <span className="text-xs font-semibold text-yellow-300">
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
