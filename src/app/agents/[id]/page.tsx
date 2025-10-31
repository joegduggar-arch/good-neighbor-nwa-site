import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { agents } from "../../../lib/agents";

export async function generateStaticParams() {
  return agents.map((agent) => ({
    id: agent.id,
  }));
}

export default function AgentPage({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/agents"
          className="text-sm text-zinc-600 hover:text-brand-gold transition"
        >
          ← Back to Agents
        </Link>

        <div className="mt-8 flex flex-col md:flex-row items-start gap-10">
          {/* Agent Photo */}
          <div className="flex-shrink-0 w-full md:w-1/3">
            <Image
              src={agent.image}
              alt={agent.name}
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-md"
            />
          </div>

          {/* Agent Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-brand-black mb-1">
              {agent.name}
            </h1>
            <p className="text-brand-gold font-medium mb-4">{agent.title}</p>

            <div className="flex gap-3 mb-6">
              {agent.phone && (
                <a
                  href={`tel:${agent.phone}`}
                  className="border border-brand-gold text-brand-gold rounded-md px-4 py-1 text-sm font-medium hover:bg-brand-gold hover:text-white transition"
                >
                  Call
                </a>
              )}
              {agent.email && (
                <a
                  href={`mailto:${agent.email}`}
                  className="border border-brand-gold text-brand-gold rounded-md px-4 py-1 text-sm font-medium hover:bg-brand-gold hover:text-white transition"
                >
                  Email
                </a>
              )}
            </div>

            <p className="leading-relaxed text-zinc-800 whitespace-pre-line">
              {agent.story}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
