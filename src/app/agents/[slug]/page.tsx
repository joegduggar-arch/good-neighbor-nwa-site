// src/app/agents/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAgent, getAgents } from "@/lib/agents";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAgents().map((agent) => ({ slug: agent.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const agent = getAgent(params.slug);
  if (!agent) {
    return {
      title: "Agent not found | Good Neighbor Realty"
    };
  }
  return {
    title: `${agent.name} | Good Neighbor Realty`,
    description: agent.bio.slice(0, 155)
  };
}

export default function AgentDetailPage({ params }: PageProps) {
  const agent = getAgent(params.slug);

  if (!agent) {
    notFound();
  }

  const telHref = agent.phone
    ? `tel:${agent.phone.replace(/[^\d]/g, "")}`
    : undefined;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-6">
          <a
            href="/agents"
            className="text-sm text-neutral-400 hover:text-yellow-300"
          >
            ← Back to all agents
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-[260px,1fr] md:items-start">
          {/* Photo + quick info */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border border-neutral-700">
              <Image
                src={agent.photo}
                alt={agent.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-semibold text-neutral-50">
                {agent.name}
              </h1>
              <p className="mt-1 text-sm text-yellow-300">{agent.title}</p>

              {agent.phone && (
                <p className="mt-3 text-sm text-neutral-200">
                  Phone:{" "}
                  {telHref ? (
                    <a
                      href={telHref}
                      className="hover:text-yellow-300 underline-offset-2 hover:underline"
                    >
                      {agent.phone}
                    </a>
                  ) : (
                    agent.phone
                  )}
                </p>
              )}

              {agent.email && (
                <p className="text-sm text-neutral-200">
                  Email:{" "}
                  <a
                    href={`mailto:${agent.email}`}
                    className="hover:text-yellow-300 underline-offset-2 hover:underline"
                  >
                    {agent.email}
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-50">
              About {agent.name.split(" ")[0]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-200">
              {agent.bio}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
