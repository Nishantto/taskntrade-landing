const tiers = [
  { name: "Starter", price: "$29/mo", features: ["20 creators", "Basic outreach", "Email support"], cta: "Get started" },
  { name: "Growth", price: "$99/mo", features: ["200 creators", "Automations", "Priority support"], cta: "Start trial", highlighted: true },
  { name: "Scale", price: "Custom", features: ["Unlimited creators", "SLA + onboarding", "Dedicated CSM"], cta: "Contact sales" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-24">
      <div className="container-max">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing that grows with you</h2>
          <p className="mt-3 text-slate-600">Simple, transparent, and flexible.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 ${t.highlighted ? "border-brand-400 shadow-lg" : "border-slate-200"}`}
            >
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 text-3xl font-bold">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#demo" className="mt-6 inline-block rounded-lg bg-brand-600 px-4 py-2 text-white">
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
