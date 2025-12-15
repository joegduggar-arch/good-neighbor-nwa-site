// src/lib/agents.ts

export type Agent = {
  slug: string;
  name: string;
  title: string;
  photo: string;
  phone?: string;
  email?: string;
  bio: string;       // short (card)
  fullBio?: string;  // optional long (detail page)
};

export const AGENTS: Agent[] = [
  {
    slug: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker / Owner",
    photo: "/images/agents/joe.jpg",
    phone: "(479) 713-9565",
    email: "joe@goodneighbornwa.com",
    bio:
      "Real estate has been part of my life for as long as I can remember. I grew up surrounded by it—watching my family serve neighbors across Northwest Arkansas.",
    fullBio: `Real estate has been part of my life for as long as I can remember. I grew up surrounded by it—watching my family serve neighbors across Northwest Arkansas and learning early on what it means to guide people through one of the biggest decisions of their lives.

I always had the ambition to follow in my family’s footsteps, and I had the privilege of learning the trade firsthand while working closely with my dad. Over the years, that passion only grew stronger.

Today, I’m honored to continue the legacy my family began generations ago—especially the example set by my grandma, Mary Duggar, who led Good Neighbor Realty with honesty, compassion, and excellence.

Every client I work with becomes part of that same story—one built on faith, family, and a genuine care for people.`,
  },

  {
    slug: "christy-rainier",
    name: "Christy Rainier",
    title: "Realtor®",
    photo: "/images/agents/christy.jpg",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    bio:
      "Christy is a devoted wife and mother whose heart for people shines through everything she does, with a background rooted in the building industry.",
    fullBio: `Christy is a devoted wife and mother whose heart for people shines through everything she does. With a background rooted in the building industry, she loves helping families navigate new construction and residential sales with care and confidence.

Christy serves faithfully at her local church and loves being an active part of the Bella Vista community — where she lives, works, and plays.

With particular expertise in selling new construction, Christy combines her building knowledge with genuine warmth and professionalism to deliver an exceptional experience for every client.`,
  },

  {
    slug: "marcus-day",
    name: "Marcus Day",
    title: "Realtor®",
    photo: "/images/agents/marcus.jpg",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    bio:
      "Marcus brings a genuine heart for people and a hands-on understanding of what makes a home truly special through construction and design experience.",
    fullBio: `Marcus Day brings a genuine heart for people and a hands-on understanding of what makes a home truly special. Having personally been involved in construction and design, he has developed a keen eye for detail, craftsmanship, and quality.

Marcus believes real estate is about helping families find the space that fits their lifestyle and dreams. Dedicated, approachable, and grounded in integrity, he helps clients feel informed and supported every step of the way.`,
  },
];

export function getAgents(): Agent[] {
  return AGENTS;
}

export function getAgent(slug: string): Agent | undefined {
  return AGENTS.find((a) => a.slug === slug);
}