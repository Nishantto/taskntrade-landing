export default function SocialProof() {
  const logos = ["Aura", "Bro Bakery", "Apricus", "79by AG", "Veel"];
  return (
    <section className="py-10 border-y border-slate-200 bg-white">
      <div className="container-max text-center">
        <p className="text-sm text-slate-500">Trusted by teams like</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {logos.map((name) => (
            <div
              key={name}
              className="h-10 rounded-lg border border-slate-200 bg-slate-50 grid place-items-center text-slate-600 text-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
