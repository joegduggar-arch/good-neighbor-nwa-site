// src/app/agents/page.tsx

import AgentCard from "@/components/AgentCard";
import { getAgents } from "@/lib/agents";

export const metadata = {
  title: "Our Agents | Good Neighbor Realty",
  description:
    "Meet the Good Neighbor Realty team serving Bella Vista, Bentonville, Rogers, Springdale, Fayetteville, Prairie Grove, and the surrounding areas.",
};

export default function AgentsPage() {
  const agents = getAgents();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Our Agents</h1>
          <p className="mt-4 text-sm text-yellow-300 md:text-base">
            Local experts serving communities throughout Northwest Arkansas.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.slug} agent={agent} />
          ))}
        </div>
      </section>
    </main>
  );
}