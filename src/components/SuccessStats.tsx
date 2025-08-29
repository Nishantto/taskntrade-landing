export default function SuccessStats() {
  const stats = [
    { label: "Views", value: "10 lakh" },
    { label: "CPV", value: "0.35" },
    { label: "Downloads", value: "5,000 → 50,000" },
  ];
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-max">
        <h2 className="text-3xl font-bold tracking-tight text-center">Our SUCCESS Story</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <div className="text-sm text-slate-500">{s.label}</div>
              <div className="mt-2 text-3xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
