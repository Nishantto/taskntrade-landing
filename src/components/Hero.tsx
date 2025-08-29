export default function Hero() {
  return (
    <section className="container-max py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
            Rated 4.9/5 by 280+ businesses
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Creator marketing that actually{" "}
            <span className="text-brand-600">converts</span>.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            TasknTrade helps brands find nano &amp; micro creators, launch
            collaborations, and track ROI—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://calendly.com/your-calendly/30min"
              className="rounded-lg bg-brand-600 px-5 py-3 text-white font-medium hover:bg-brand-700"
            >
              Get a demo
            </a>
            <a
              href="#features"
              className="rounded-lg border border-slate-300 px-5 py-3 font-medium"
            >
              See features
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">No credit card. Setup in minutes.</p>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-xl border border-slate-200 bg-slate-50" />
          <p className="mt-3 text-sm text-slate-500">(Add a screenshot or short demo)</p>
        </div>
      </div>
    </section>
  );
}
