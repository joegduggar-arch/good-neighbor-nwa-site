import HeroMovingImage from "@/components/HeroMovingImage";
import NWAOverview from "@/components/NWAOverview";
import Section from "@/components/Section";

export const metadata = {
  title: "Good Neighbor Realty | Northwest Arkansas",
  description:
    "Good Neighbor Realty serves Northwest Arkansas with a special focus on Bella Vista new construction and forever homes.",
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HeroMovingImage />
      <NWAOverview />
      {/* Add any other sections below if you had them before */}
      {/* <Section ... /> */}
    </main>
  );
}