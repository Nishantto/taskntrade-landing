// src/components/UGCExplainer.tsx
export default function UGCExplainer() {
  return (
    <section className="container-max py-16 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* LEFT: video + quote below */}
        <div className="order-1 lg:order-none">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-sm">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/vNo12pMbo5M?autoplay=1&mute=1&playsinline=1&loop=1&playlist=vNo12pMbo5M&controls=0&rel=0&modestbranding=1"
                title="UGC explainer video"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="eager"
                allowFullScreen
              />
            </div>
          </div>

          {/* quote directly under video (no box) */}
          <p className="mt-4 text-center text-base italic text-slate-700">
            “This isn't influencer marketing. It's content marketing that converts, at scale.”
          </p>
        </div>

        {/* RIGHT: text only (quote removed) */}
        <div className="space-y-6">
          {/* kicker + heading */}
          <div>

            <h2 className="mt-3 bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              What is UGC?
            </h2>
          </div>

          {/* definition */}
          <p className="text-lg leading-7 text-slate-700">
            UGC (User-Generated Content) is content made by real people, not production houses. Think
            videos, photos, and reviews created by everyday users or creators talking about a product
            in their voice, on their terms. No fancy setups. Just authenticity that performs.
          </p>

          {/* chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">short-form videos</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">product photos</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">reviews &amp; testimonials</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">how-to &amp; demos</span>
          </div>

          {/* why UGC works
          <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-sm">
            <h3 className="text-sm font-semibold tracking-wide text-slate-900">Why UGC works</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-600/10 text-brand-700 ring-1 ring-brand-600/20">✓</span>
                Authentic social proof users trust
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-600/10 text-brand-700 ring-1 ring-brand-600/20">✓</span>
                Native to feeds (higher watch-through &amp; CTR)
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-600/10 text-brand-700 ring-1 ring-brand-600/20">✓</span>
                Fast to iterate and A/B test at scale
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-600/10 text-brand-700 ring-1 ring-brand-600/20">✓</span>
                Lower production cost than studio shoots
              </li>
            </ul>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-brand-400 to-brand-600" />
            <p className="mt-3 text-xs text-slate-500">
              UGC ≠ paid endorsements. It’s real creators making real content that fits where your customers actually scroll.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
