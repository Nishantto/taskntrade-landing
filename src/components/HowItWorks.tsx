const steps = [
  { n: 1, t: "Connect", d: "Share niche, city, budget, goals." },
  { n: 2, t: "Collaborate", d: "Send briefs, timelines, track deliverables." },
  { n: 3, t: "Scale", d: "Measure ROI and double down on winners." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-slate-50 py-16 sm:py-24">
      <div className="container-max">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          How it works
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="h-8 w-8 rounded-full bg-brand-600 text-white grid place-items-center font-semibold">
                {s.n}
              </div>
              <h3 className="mt-4 font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
