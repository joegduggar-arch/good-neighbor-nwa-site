// src/lib/agents.ts

export type Agent = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  photo: string;   // path under /public
  phone?: string;
  email?: string;
};

// TODO: adjust names / bios / phone / email exactly how you want.
export const AGENTS: Agent[] = [
  {
    slug: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker, Good Neighbor Realty",
    photo: "/images/agents/joe.jpg",
    phone: "(479) 713-9565",
    email: "joe@goodneighbornwa.com",
    bio:
      "Joe is a Northwest Arkansas native with a background in construction, development, and real estate. " +
      "He loves helping clients navigate new construction, acreage, and forever homes across Bella Vista, Bentonville, and beyond.",
  },
  {
    slug: "marcus-day",
    name: "Marcus Day",
    title: "Realtor®",
    photo: "/images/agents/marcus.jpg",
    phone: "(479) 555-0123",
    email: "marcus@goodneighbornwa.com",
    bio:
      "Marcus specializes in guiding buyers through the offer and negotiation process, with a calm, detail-oriented approach. " +
      "He has a heart for serving families and helping them feel confident in every decision.",
  },
  {
    slug: "christy-rainier",
    name: "Christy Rainier",
    title: "Realtor®",
    photo: "/images/agents/christy.jpg",
    phone: "(479) 555-0456",
    email: "christy@goodneighbornwa.com",
    bio:
      "Christy brings a designer’s eye to each transaction, helping clients see potential in both new builds and existing homes. " +
      "Her focus is clear communication, thoughtful service, and smooth closings.",
  },
];

export function getAgents(): Agent[] {
  return AGENTS;
}

export function getAgent(slug: string): Agent | undefined {
  return AGENTS.find((a) => a.slug === slug);
}
