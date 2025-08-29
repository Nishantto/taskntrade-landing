const quotes = [
  { q: "We ran 50+ creator collabs in 30 days.", a: "Riya S., Growth Lead" },
  { q: "Our CPV dropped by 38% in the first month.", a: "Kushal T., Founder" },
  { q: "One dashboard for briefs, approvals, and performance.", a: "Bishal A., Brand Manager" },
];

export default function Testimonials() {
  return (
    <section className="container-max py-16 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by teams</h2>
        <p className="mt-3 text-slate-600">What our customers say</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {quotes.map((c) => (
          <figure key={c.q} className="rounded-2xl border border-slate-200 p-6">
            <blockquote className="text-slate-700">“{c.q}”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">{c.a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
