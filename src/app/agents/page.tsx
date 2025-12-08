// src/app/agents/page.tsx

import type { Metadata } from "next";
import AgentCard from "@/components/AgentCard";
import { getAgents } from "@/lib/agents";

export const metadata: Metadata = {
  title: "Agents | Good Neighbor Realty",
  description:
    "Meet the Good Neighbor Realty team serving Northwest Arkansas with new construction and residential expertise.",
};

export default function AgentsPage() {
  const agents = getAgents();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Our Team
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            Good Neighbor Realty Agents
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-neutral-300 md:text-base">
            Real people, local experience, and a neighbor-minded approach to
            buying, selling, and building across Northwest Arkansas.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {agents.map((agent) => (
            <AgentCard key={agent.slug} agent={agent} />
          ))}
        </div>
      </section>
    </main>
  );
}
