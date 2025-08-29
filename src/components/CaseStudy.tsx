export default function CaseStudy() {
  const items = [
    { label: "Views", value: "6 lakh" },
    { label: "CPV", value: "0.40" },
    { label: "Daily sales", value: "↑ 33%" },
  ];
  return (
    <section id="case-study" className="container-max py-16">
      <div className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-3xl font-bold tracking-tight">Case Study</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {items.map((i) => (
            <div key={i.label} className="rounded-xl border border-slate-200 p-5 text-center">
              <div className="text-sm text-slate-500">{i.label}</div>
              <div className="mt-2 text-2xl font-semibold">{i.value}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-600">
          Results from a recent UGC campaign run with our vetted creator roster.
        </p>
      </div>
    </section>
  );
}
