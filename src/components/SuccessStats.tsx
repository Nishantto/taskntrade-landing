export default function SuccessStats() {
  const stats = [
    { label: "Views", value: "10 lakh", icon: "👀", note: "across UGC campaigns" },
    { label: "CPV", value: "0.35", icon: "💸", note: "cost per view" },
    { label: "Downloads", value: "5,000 → 50,000", icon: "⬇️", note: "app installs growth" },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* subtle background wash + radial flare */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64
                      bg-[radial-gradient(ellipse_at_top,#bfdbfe66,transparent_60%)]" />

      <div className="container-max">
        {/* kicker */}
        <p className="mx-auto w-fit rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          RESULTS
        </p>

        {/* gradient headline */}
        <h2 className="mt-4 bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          Our Success Story
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-sm
                         transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* icon chip */}
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600/10 text-2xl text-brand-700 ring-1 ring-brand-600/20">
                {s.icon}
              </div>

              <div className="mt-4 text-sm text-slate-500">{s.label}</div>

              {/* big gradient number */}
              <div className="mt-1 bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent
                              text-4xl sm:text-5xl font-extrabold tracking-tight">
                {s.value}
              </div>

              {s.note && <div className="mt-2 text-xs text-slate-500">{s.note}</div>}

              {/* tiny accent on hover */}
              <div className="mt-4 h-px w-0 bg-gradient-to-r from-brand-400 to-brand-600 transition-all group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
