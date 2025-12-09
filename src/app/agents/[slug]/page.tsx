// src/app/agents/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";

type Agent = {
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
  fullBio: string;
};

const AGENTS: Agent[] = [
  {
    slug: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker / Owner",
    phone: "(479) 713-9565",
    email: "joegduggar@gmail.com",
    photo: "/agent/joe.jpg",
    fullBio:
      "Real estate has been part of my life for as long as I can remember. I grew up surrounded by it—watching my family serve neighbors across Northwest Arkansas and learning early on what it means to guide people through one of the biggest decisions of their lives.  I always had the ambition to follow in my family’s footsteps, and I had the privilege of learning the trade firsthand while working closely with my dad. Over the years, that passion only grew stronger.  Today, I’m honored to continue the legacy my family began generations ago—especially the example set by my grandma, Mary Duggar, who led Good Neighbor Realty with honesty, compassion, and excellence. I love working with both buyers and sellers, helping them find not just a house, but a place to call home.  Every client I work with becomes part of that same story—one built on faith, family, and a genuine care for people.",
  },
  {
    slug: "christy-rainier",
    name: "Christy Rainier",
    title: "Realtor®",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    photo: "/agent/christy.jpg",
    fullBio:
      "Christy is a devoted wife and mother of seven children and one daughter-in-love, whose heart for people shines through everything she does. Her care for others and attention to detail have naturally carried over into her real estate career, where she’s passionate about guiding families through every step of the buying or selling process.

Coming from a family with a strong background in the building industry, Christy understands the craftsmanship and planning that go into creating a home. That experience gives her a unique perspective when guiding clients — helping them see both the potential and the details that truly matter.

Christy serves faithfully at her local church and loves being an active part of the Bella Vista community — where she lives, works, and plays. Her love and commitment to the area give her clients an insider’s perspective on the neighborhoods and lifestyle that make Northwest Arkansas so special.

With particular expertise in selling new construction, Christy combines her building knowledge with her genuine warmth, professionalism, and dedication to deliver an exceptional experience for every client she serves — whether first-time buyers or seasoned sellers.",
  },
  {
    slug: "marcus-day",
    name: "Marcus Day",
    title: "Realtor®",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    photo: "/agent/marcus.jpg",
    fullBio:
      "Marcus Day
Sales Associate, Good Neighbor Realty
Marcus Day brings a genuine heart for people and a hands-on understanding of what makes a home truly special. Having personally been involved in the construction and design of several homes, he has developed a keen eye for detail, craftsmanship, and quality.
Marcus believes that real estate is about more than closing deals—it’s about helping individuals and families find the space that fits their lifestyle and dreams. His thoughtful approach, combined with his practical knowledge of how homes are built, allows him to guide clients confidently through every step of the process.
Dedicated, approachable, and grounded in integrity, Marcus takes pride in helping his clients feel cared for, informed, and supported as they find their place to call home.",
  },
];

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return AGENTS.map((agent) => ({ slug: agent.slug }));
}

export default function AgentDetailPage({ params }: PageProps) {
  const agent = AGENTS.find((a) => a.slug === params.slug);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="flex-shrink-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-neutral-700 bg-neutral-900">
              <Image
                src={agent.photo}
                alt={agent.name}
                fill
                className="object-cover"
              />
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
              <div>
                Phone:{" "}
                <a
                  href={`tel:${agent.phone.replace(/[^\d]/g, "")}`}
                  className="text-yellow-300 hover:text-yellow-200"
                >
                  {agent.phone}
                </a>
              </div>
              <div>
                Email:{" "}
                <a
                  href={`mailto:${agent.email}`}
                  className="text-yellow-300 hover:text-yellow-200"
                >
                  {agent.email}
                </a>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-neutral-200">
              {agent.fullBio}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
