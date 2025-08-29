// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

export default function Navbar() {
  // Smooth scroll with header offset (works even if you later make the header sticky)
  const scrollToId = useCallback((hash: string) => (e: React.MouseEvent) => {
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();

    const header = document.querySelector("header") as HTMLElement | null;
    const headerH = header?.offsetHeight ?? 0;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;

    window.scrollTo({ top: y, behavior: "smooth" });
    // Optionally update the URL hash without jump
    history.replaceState(null, "", `#${id}`);
  }, []);

  const links = [
    { label: "Services", href: "#services" }, // Features component renders "Our Services" with id="services"
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="border-b border-slate-200">
      <div className="container-max flex h-20 md:h-24 items-center justify-between">
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/taskntrade.png"
            alt="TasknTrade"
            width={320}
            height={100}
            priority
            sizes="(min-width:1024px) 256px, (min-width:640px) 224px, 200px"
            className="h-14 md:h-16 lg:h-20 w-auto object-contain"
          />
        </Link>

        {/* RIGHT: Nav + CTA */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={scrollToId(l.href)}
                className="
                  relative inline-flex items-center
                  transition active:scale-95
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                  after:bg-gradient-to-r after:from-brand-500 after:to-brand-700
                  after:transition-[width] after:duration-300 hover:after:w-full
                "
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#demo"
              onClick={scrollToId("#demo")}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm transition active:scale-95"
            >
              Contact
            </a>
            <a
              href="https://calendly.com/your-calendly/30min"
              className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-brand-700 active:scale-95"
            >
              Get a demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
