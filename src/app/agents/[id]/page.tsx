import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { agents } from "../../../lib/agents";

type Params = { params: { id: string } };

export function generateMetadata({ params }: Params): Metadata {
  const agent = agents.find((a) => a.id === params.id);
  if (!agent) {
    return { title: "Agent Not Found | Good Neighbor Realty" };
  }
  return {
    title: `${agent.name} | Good Neighbor Realty`,
    description: `${agent.name} — ${agent.title} in Northwest Arkansas.`,
    openGraph: { images: [agent.image] },
  };
}

export default function AgentProfile({ params }: Params) {
  const agent = agents.find((a) => a.id === params.id);
  if (!agent) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 text-white">
      <Link href="/agents" className="text-sm text-zinc-400 hover:text-brand-gold">
        ← Back to Agents
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-[320px,1fr]">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-800">
          <Image
            src={agent.image}
            alt={`${agent.name} — ${agent.title}`}
            fill
            className="object-contain"
            sizes="(max-width:768px) 100vw, 320px"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-semibold">{agent.name}</h1>
          <p className="mt-1 text-brand-gold">{agent.title}</p>

          <div className="mt-4 flex flex-wrap gap-3">
            {agent.phone && (
              <a
                href={`tel:${agent.phone}`}
                className="rounded-md border border-brand-gold px-3 py-1 text-brand-gold hover:bg-brand-gold hover:text-black transition"
              >
                Call
              </a>
            )}
            {agent.email && (
              <a
                href={`mailto:${agent.email}`}
                className="rounded-md border border-brand-gold px-3 py-1 text-brand-gold hover:bg-brand-gold hover:text-black transition"
              >
                Email
              </a>
            )}
          </div>

          <div className="prose prose-invert mt-6 max-w-none">
            <p className="text-zinc-200">
              {agent.story ??
                "This agent’s story will be updated soon. In the meantime, please reach out for more information."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
