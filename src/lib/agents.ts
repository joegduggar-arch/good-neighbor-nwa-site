export type Agent = {
  id: string;
  name: string;
  title: string;
  image: string;
  phone?: string;
  email?: string;
  story?: string;
};

export const agents: Agent[] = [
  {
    id: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker, Good Neighbor Realty",
    image: "/agents/joe.jpg",
    phone: "(479) 713-9565",
    email: "joegduggar@gmail.com",
    story: `Real estate has been part of my life for as long as I can remember. I grew up surrounded by it—watching my family serve neighbors across Northwest Arkansas and learning early on what it means to guide people through one of the biggest decisions of their lives.
    
I always had the ambition to follow in my family’s footsteps, and I had the privilege of learning the trade firsthand while working closely with my dad. Over the years, that passion only grew stronger.

Today, I’m honored to continue the legacy my family began generations ago—especially the example set by my grandma, Mary Duggar, who led Good Neighbor Realty with honesty, compassion, and excellence. I love working with both buyers and sellers, helping them find not just a house, but a place to call home.

Every client I work with becomes part of that same story—one built on faith, family, and a genuine care for people.`,
  },
  {
    id: "christy-rainier",
    name: "Christy Rainier",
    title: "Sales Associate, Good Neighbor Realty",
    image: "/agents/christy.jpg",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    story: `Christy is a devoted wife and mother of seven children and one daughter-in-love, whose heart for people shines through everything she does. Her care for others and attention to detail have naturally carried over into her real estate career, where she’s passionate about guiding families through every step of the buying or selling process.

Coming from a family with a strong background in the building industry, Christy understands the craftsmanship and planning that go into creating a home. That experience gives her a unique perspective when guiding clients — helping them see both the potential and the details that truly matter.

Christy serves faithfully at her local church and loves being an active part of the Bella Vista community — where she lives, works, and plays. Her love and commitment to the area give her clients an insider’s perspective on the neighborhoods and lifestyle that make Northwest Arkansas so special.

With particular expertise in selling new construction, Christy combines her building knowledge with her genuine warmth, professionalism, and dedication to deliver an exceptional experience for every client she serves — whether first-time buyers or seasoned sellers.`,
  },
  {
    id: "marcus-day",
    name: "Marcus Day",
    title: "Sales Associate, Good Neighbor Realty",
    image: "/agents/marcus.jpg",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    story: `Marcus Day brings a genuine heart for people and a hands-on understanding of what makes a home truly special. Having personally been involved in the construction and design of several homes, he has developed a keen eye for detail, craftsmanship, and quality.

Marcus believes that real estate is about more than closing deals—it’s about helping individuals and families find the space that fits their lifestyle and dreams. His thoughtful approach, combined with his practical knowledge of how homes are built, allows him to guide clients confidently through every step of the process.

Dedicated, approachable, and grounded in integrity, Marcus takes pride in helping his clients feel cared for, informed, and supported as they find their place to call home.`,
  },
];
