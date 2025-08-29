const faqs = [
  { q: "Can I try it free?", a: "Yes—Starter is free to get going." },
  { q: "Do you support Instagram + TikTok?", a: "Yes, and we’re adding more channels." },
  { q: "Can you onboard creators for us?", a: "Yes—ask about our managed plan." },
  { q: "Is there an agency discount?", a: "Email us for volume pricing." },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-16 sm:py-24">
      <div className="container-max">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          Frequently asked questions
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
