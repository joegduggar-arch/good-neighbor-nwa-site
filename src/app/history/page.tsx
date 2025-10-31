import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Legacy in Northwest Arkansas Real Estate | Good Neighbor Realty",
  description:
    "Real estate is a family legacy for the Duggars in Northwest Arkansas—carried forward with honesty, hard work, and a neighbor’s heart.",
};

export default function HistoryPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-white">
      <h1 className="text-3xl font-semibold">Our Legacy in Northwest Arkansas Real Estate</h1>

      <div className="prose prose-invert mt-6 max-w-none text-zinc-200">
        <p>For our family, real estate isn’t just a business — it’s a legacy.
        Generations of Duggars have helped people across Northwest Arkansas find their place to call home. From the early days of Duggar Realty, founded by our relatives decades ago, to my grandmother Mary Duggar, who owned and led Good Neighbor Realty with integrity and heart, this work has always been about more than property — it’s about people.</p>

        <p>Mary taught me that guiding a client through buying or selling a home means walking with them through one of life’s biggest moments. After her passing, I stepped in to continue the work she loved and to carry forward the same values she built her reputation on — honesty, hard work, and genuine care for every client.</p>

        <p>Today, Good Neighbor Realty remains rooted in that heritage — dedicated to helping homebuyers and sellers alike navigate each step with confidence, trust, and a true neighbor’s heart.</p>
      </div>
    </main>
  );
}
