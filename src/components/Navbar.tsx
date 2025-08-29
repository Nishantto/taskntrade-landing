// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <div className="container-max flex h-20 md:h-24 items-center justify-between">
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/taskntrade.png"          // make sure this file exists in /public/logos
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
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <Link href="#features">Features</Link>
            <Link href="#how">How it works</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Link href="#demo" className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
              Contact
            </Link>
            <a
              href="https://calendly.com/your-calendly/30min"
              className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Get a demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
