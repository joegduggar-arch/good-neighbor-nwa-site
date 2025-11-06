// src/app/new-construction/page.tsx
import PlanCard from "@/components/PlanCard";
import { byStatus } from "@/lib/floorplans";

export const metadata = {
  title: "New Construction | Good Neighbor Realty",
  description:
    "Explore new construction across Bella Vista & NWA. View homes under construction, coming soon, and recently sold plans.",
};

export default function NewConstructionPage() {
  const UNDER = byStatus("under-construction");
  const SOON = byStatus("coming-soon");
  const SOLD = byStatus("sold");

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-100">New Construction</h1>
        <p className="mt-2 max-w-2xl text-neutral-300">
          See what’s building now, what’s coming soon, and a sampling of recently sold plans.
        </p>
      </header>

      <Section title="Under Construction" subtitle="Actively being built in Bella Vista & around NWA.">
        {UNDER.length ? <Grid plans={UNDER} /> : <Empty label="No active builds at the moment." />}
      </Section>

      <Section title="Coming Soon" subtitle="Planned starts with timelines being set.">
        {SOON.length ? <Grid plans={SOON} /> : <Empty label="No upcoming starts listed yet." />}
      </Section>

      <Section title="Recently Sold" subtitle="Popular plans that inform what’s next.">
        {SOLD.length ? <Grid plans={SOLD} /> : <Empty label="No recent sales posted yet." />}
      </Section>
    </main>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 first:pt-0">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-neutral-100">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function Grid({ plans }: { plans: any[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {plans.map((p) => (
        <PlanCard key={p.slug} plan={p} />
      ))}
    </div>
  );
}

function Empty({ label }: { label: string }) {
  return <p className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-neutral-400">{label}</p>;
}
