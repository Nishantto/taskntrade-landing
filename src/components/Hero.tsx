export default function Hero() {
  return (
    <section className="container-max py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* LEFT: copy + CTAs (unchanged) */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
            Creator-led campaigns that drive sales
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Creator-led content <span className="text-brand-600">that drives sales</span>.
          </h1>

          <p className="mt-4 text-lg text-slate-700">
            We run full-scale UGC campaigns using a vetted roster of 1000+ nano and micro creators.
            TasknTrade is a marketing company that majorly focuses on UGC campaigns.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://calendly.com/YOUR-CALENDLY/30min"
              className="rounded-lg bg-brand-600 px-5 py-3 text-white font-medium hover:bg-brand-700"
            >
              Get a demo
            </a>
            <a
              href="#about"
              className="rounded-lg border border-slate-300 px-5 py-3 font-medium"
            >
              How it works
            </a>
          </div>
        </div>

        {/* RIGHT: autoplaying, muted, looping video */}
        <div className="relative">
          <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/hero-poster.jpg"   // remove if you don't have one
              aria-label="TasknTrade UGC campaign montage"
            >
              <source src="/videos/hero.webm" type="video/webm" />
              <source src="/videos/hero.mp4" type="video/mp4" />
              {/* Fallback text */}
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-3 text-sm text-slate-500"></p>
        </div>
      </div>
    </section>
  );
}
