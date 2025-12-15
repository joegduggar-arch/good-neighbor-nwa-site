// src/app/agents/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { AGENTS, getAgent } from "@/lib/agents";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export default function AgentDetailPage({ params }: PageProps) {
  const agent = getAgent(params.slug);
  if (!agent) notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="flex-shrink-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-neutral-700 bg-neutral-900">
              <Image src={agent.photo} alt={agent.name} fill className="object-cover" />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Our Agents
            </p>

            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              {agent.name}
            </h1>

            <p className="mt-1 text-sm text-neutral-300">{agent.title}</p>

            <div className="mt-4 space-y-1 text-sm text-neutral-300">
              {agent.phone && (
                <div>
                  Phone:{" "}
                  <a
                    href={`tel:${agent.phone.replace(/[^\d]/g, "")}`}
                    className="text-yellow-300 hover:text-yellow-200"
                  >
                    {agent.phone}
                  </a>
                </div>
              )}

              {agent.email && (
                <div>
                  Email:{" "}
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-yellow-300 hover:text-yellow-200"
                  >
                    {agent.email}
                  </a>
                </div>
              )}
            </div>

            <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-neutral-200">
              {agent.fullBio ?? agent.bio}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}