type Service = { title: string; desc: string };
const services: Service[] = [
  { title: "Research & Campaign Planning", desc: "Insight-driven concepts and precise execution timelines." },
  { title: "Social Media Posts", desc: "High-volume UGC for reels, shorts, and posts across channels." },
  { title: "Manage campaigns", desc: "Briefs, deliverables, approvals, links." },
  { title: "Blog & Articles", desc: "SEO-friendly, brand-aligned articles and write-ups." },
];

export default function Services() {
  return (
    <section id="services" className="container-max py-16 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
        <p className="mt-3 text-slate-600">
          UGC strategy and production at scale—built around your outcomes.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 p-6">
            <div className="h-8 w-8 rounded-md bg-brand-100 border border-brand-200 mb-4" />
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
