import PlanCard from "@/components/PlanCard";
import { getPlansByBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description: "Timeless Homes (Milagro Designs, LLC) — plan names and basics. Contact us for full packages."
};

export default function TimelessBuilderPage() {
  const plans = getPlansByBuilder("timeless-homes");
  return (
    <main className="section">
      <div className="flex items-center gap-4 mb-6">
        <img src="/logos/timeless.svg" alt="Timeless Homes" className="h-10 w-10" />
        <h1 className="text-3xl font-semibold">Timeless Homes</h1>
      </div>
      <p className="text-neutral-300 max-w-3xl mb-6">
        Plan PDFs, elevations, selections, and detailed photo sets are shared privately.
        Reach out and we’ll send the current package.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map(p => <PlanCard key={p.key} plan={p} />)}
      </div>
    </main>
  );
}
