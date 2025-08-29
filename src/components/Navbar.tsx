"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-brand-500" />
            TasknTrade
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <Link href="#features">Features</Link>
          <Link href="#how">How it works</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#demo"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
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
    </header>
  );
}
