// src/components/SocialProof.tsx
"use client";
import { useState } from "react";

type Client = { name: string; src?: string; alt?: string };

const clients: Client[] = [
  { name: "Global IME Bank Limited", src: "/logos/global-ime-bank.png", alt: "Global IME Bank Limited" },
  { name: "Bro Bakery", src: "/logos/bro-bakery.png", alt: "Bro Bakery" },
  { name: "Apricus", src: "/logos/apricus.png", alt: "Apricus" },
  { name: "Aura", src: "/logos/aura.png", alt: "Aura" },
  { name: "NLG", src: "/logos/nlg.png", alt: "NLG" },
  { name: "Utpala Cafe", src: "/logos/utpala-cafe.png", alt: "Utpala Cafe" },
  { name: "Direct Education Consultancy", src: "/logos/direct-education-consultancy.png", alt: "Direct Education Consultancy" },
  { name: "Pivotech", src: "/logos/pivotech.png", alt: "Pivotech" },
  { name: "Dream Skin", src: "/logos/dream-skin.png", alt: "Dream Skin" },
  { name: "Kangaroo Consultancy", src: "/logos/kangaroo-consultancy.png", alt: "Kangaroo Consultancy" },
];

function LogoTile({ c }: { c: Client }) {
  const [broken, setBroken] = useState(false);
  const showImg = c.src && !broken;

  return (
    <div className="h-36 grid place-items-center border border-slate-200 rounded-lg p-6 bg-white text-slate-600 text-base">
      {showImg ? (
        <img
          src={c.src!}
          alt={c.alt ?? c.name}
          className="max-h-24 w-auto object-contain"
          onError={() => setBroken(true)}
        />
      ) : (
        <span className="px-2 text-center">{c.name}</span>
      )}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="clients" className="py-10 border-y border-slate-200 bg-white">
      <div className="container-max text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Our Client Roster</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {clients.map((c) => (
            <LogoTile key={c.name} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
