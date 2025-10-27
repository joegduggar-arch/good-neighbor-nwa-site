import Link from "next/link";
import { Disclaimer } from "../components/Disclaimer";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-brand-gold/30 bg-brand-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-8 py-16 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight">
              Good Neighbor Realty
              <span className="block text-brand-gold">Northwest Arkansas</span>
            </h1>
            <p className="mt-4 text-gray-200">
              Boutique brokerage focused on Bentonville, Bella Vista, and Siloam Springs.
              Explore listings, save favorites, and work with a local team that knows NWA.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="rounded bg-brand-gold px-5 py-2 font-medium text-brand-black hover:bg-brand-goldDark" href="/search">
                Browse Listings
              </Link>
              <Link className="rounded border border-white/30 px-5 py-2 hover:border-white hover:text-brand-gold" href="/portal">
                Client Portal
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1600585154340-1e4ce9a56a0c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center shadow-xl min-h-[220px]" />
        </div>
      </section>

      {/* Quick intro + disclaimer */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Start your NWA search</h2>
        <p className="text-gray-700">
          Use our public IDX search to explore active homes. Clients can log in to the private portal for
          additional details and saved searches.
        </p>
        <Disclaimer />
      </section>
    </div>
  );
}
