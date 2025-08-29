export default function About() {
  const pipeline = [
    "Creator sourcing",
    "Campaign design",
    "Timeline control",
    "Final content delivery",
    "Margin-aware operations",
  ];

  return (
    <section id="about" className="container-max py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
          <p className="mt-3 text-slate-700">
            TasknTrade Advert is a creator-powered UGC campaign engine. We run performance-focused,
            high-volume campaigns utilizing a structured network of nano and micro creators—designed for
            brands that prioritize scale, storytelling, and results.
          </p>
          <p className="mt-3 text-slate-700">
            We don’t just match brands with influencers. We manage the full pipeline:
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
            {pipeline.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <p className="mt-4 text-slate-700">
            TasknTrade is built for brands that want real content, from real people, delivered on time,
            without inflated costs or founder-led chaos.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 aspect-video" />
      </div>
    </section>
  );
}
