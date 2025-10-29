export type Agent = {
  id: string;   // used for /public/agents/<id>.jpg
  name: string;
  title: "Principal Broker" | "Real Estate Agent" | "Commercial Specialist";
  phone?: string;
  email?: string;
  bio?: string;
};

export const agents: Agent[] = [
  {
    id: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker",
    phone: "(479) 713-9565",
    email: "JoegDuggar@gmail.com",
    bio: "Principal Broker of Good Neighbor Realty, providing exceptional service and local market expertise across Northwest Arkansas.",
  },
  {
    id: "christy-rainier",
    name: "Christy Rainier",
    title: "Real Estate Agent",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    bio: "Christy serves clients throughout Northwest Arkansas, helping buyers and sellers navigate the market with care and professionalism.",
  },
  {
    id: "marcus-day",
    name: "Marcus Day",
    title: "Real Estate Agent",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    bio: "Marcus serves clients across all of Northwest Arkansas with a focus on residential listings and helping families find their perfect home.",
  },
  {
    id: "jim-bob-duggar",
    name: "Jim Bob Duggar",
    title: "Commercial Specialist",
    bio: "Jim Bob Duggar specializes in commercial real estate and investment properties throughout Northwest Arkansas. For commercial inquiries, please contact our office at (479) 713-9565.",
  },
];
