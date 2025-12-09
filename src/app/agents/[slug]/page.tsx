// src/app/agents/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

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

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const agent = AGENTS.find((a) => a.slug === params.slug);

  if (!agent) {
    return {
      title: "Agent Not Found | Good Neighbor Realty",
    };
  }

  return {
    title: `${agent.name} | Good Neighbor Realty`,
    description: agent.bio,
  };
}

export default function AgentDetailPage({ params }: PageProps) {
  const agent = AGENTS.find((a) => a.slug === params.slug);

  if (!agent) {
    notFound();
  }

  const telHref = agent.phone
    ? `tel:${agent.phone.replace(/[^\d]/g, "")}`
    : undefined;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <button
          onClick={() => history.back()}
          className="text-sm text-neutral-400 hover:text-yellow-300"
        >
          ← Back to agents
        </button>

        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
          {/* Photo */}
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border border-neutral-700">
            <Image
              src={agent.photo}
              alt={agent.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl font-semibold md:text-4xl">
              {agent.name}
            </h1>
            <p className="mt-2 text-yellow-300">{agent.title}</p>

            <div className="mt-4 space-y-1 text-sm text-neutral-200">
              {agent.phone && telHref && (
                <p>
                  Phone:{" "}
                  <a
                    href={telHref}
                    className="underline underline-offset-2 hover:text-yellow-300"
                  >
                    {agent.phone}
                  </a>
                </p>
              )}
              {agent.email && (
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${agent.email}`}
                    className="underline underline-offset-2 hover:text-yellow-300"
                  >
                    {agent.email}
                  </a>
                </p>
              )}
            </div>

            <div className="mt-6 text-sm leading-relaxed text-neutral-200">
              {agent.bio}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
