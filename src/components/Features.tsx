type Feature = { title: string; desc: string };
const features: Feature[] = [
  { title: "Find & vet creators", desc: "Search by niche, city, engagement rate." },
  { title: "Automate outreach", desc: "Personalized DMs/email tracking & costs." },
  { title: "Manage campaigns", desc: "Briefs, deliverables, approvals, links." },
  { title: "Measure ROI", desc: "Views, CTR, CPV—scale what works." },
];

export default function Features() {
  return (
    <section id="features" className="container-max py-16 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to run creator campaigns
        </h2>
        <p className="mt-3 text-slate-600">
          Stop juggling sheets and DMs. Run your workflow end-to-end.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-200 p-6">
            <div className="h-8 w-8 rounded-md bg-brand-100 border border-brand-200 mb-4" />
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
