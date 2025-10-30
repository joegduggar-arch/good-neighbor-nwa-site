export interface Agent {
  id: string;
  name: string;
  title: string;
  description: string;
  phone?: string;
  email?: string;
  image: string;
}

export const agents: Agent[] = [
  {
    id: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker",
    description:
      "Joe is the Principal Broker for Good Neighbor Realty and specializes in helping buyers and sellers across all of Northwest Arkansas.",
    phone: "(479) 713-9565",
    email: "joegduggar@gmail.com",
    image: "/agents/joe-duggar.jpg",
  },
  {
    id: "christy-rainier",
    name: "Christy Rainier",
    title: "Real Estate Agent",
    description:
      "Christy serves clients throughout Northwest Arkansas with a focus on delivering personalized, detail-oriented service for every transaction.",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    image: "/agents/christy-rainier.jpg",
  },
  {
    id: "marcus-day",
    name: "Marcus Day",
    title: "Real Estate Agent",
    description:
      "Marcus serves all of Northwest Arkansas, providing thoughtful and knowledgeable guidance to both buyers and sellers.",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    image: "/agents/marcus-day.jpg",
  },
  {
    id: "jim-bob-duggar",
    name: "Jim Bob Duggar",
    title: "Commercial Real Estate Specialist",
    description:
      "With extensive experience in property development and investment, Jim Bob focuses on commercial real estate opportunities throughout the region.",
    phone: "(479) 713-9565", // office number only
    image: "/agents/jim-bob-duggar.jpg",
  },
];
