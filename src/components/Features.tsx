// src/components/Features.tsx
type Service = { title: string; desc: string; icon: string };

const services: Service[] = [
  {
    title: "Research & Campaign Planning",
    desc: "Insight-driven concepts, creator fit, and precise execution timelines.",
    icon: "🧠",
  },
  {
    title: "Social Media Posts",
    desc: "High-volume UGC for reels, shorts, and posts across channels.",
    icon: "📱",
  },
  {
    title: "Manage Campaigns",
    desc: "Briefs, deliverables, approvals, links—organized and on time.",
    icon: "✅",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      {/* subtle background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white" />

      <div className="container-max">
        {/* kicker */}
        <p className="mx-auto w-fit rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          SERVICES
        </p>

        {/* gradient headline */}
        <h2 className="mt-4 bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          Our Services
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          UGC strategy and production at scale—built around your outcomes.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* icon chip */}
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600/10 text-2xl text-brand-700 ring-1 ring-brand-600/20">
                {s.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {s.desc}
              </p>

              {/* tiny accent on hover */}
              <div className="mt-4 h-px w-0 bg-gradient-to-r from-brand-400 to-brand-600 transition-all group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
