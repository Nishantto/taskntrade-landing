// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container-max py-8 text-sm text-slate-600 grid gap-6 md:grid-cols-3 md:items-center">
        {/* LEFT: Contact */}
        <div className="space-y-1 md:justify-self-start">
          <div>
            <span className="text-slate-500">Email: </span>
            <a href="mailto:business@taskntrade.com" className="font-medium hover:text-slate-900">
              business@taskntrade.com
            </a>
          </div>
          <div>
            <span className="text-slate-500">Location: </span>
            <span className="font-medium">Tripureshwor, Kathmandu</span>
          </div>
          <div>
            <span className="text-slate-500">Phone: </span>
            <a href="tel:+9779823602476" className="font-medium hover:text-slate-900">
              +977 9823602476
            </a>
          </div>
        </div>

        {/* CENTER: Social icons only */}
        <div className="flex justify-center items-center gap-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/taskntrade" // update if needed
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full p-2 ring-1 ring-slate-200 hover:bg-brand-50 hover:ring-brand-300 transition"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-700">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11ZM18 6.5a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2Z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/taskntrade" // update if needed
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 ring-1 ring-slate-200 hover:bg-brand-50 hover:ring-brand-300 transition"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-700">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v16h-4zM8.5 8h3.8v2.18h.05c.53-.95 1.82-1.96 3.75-1.96 4.01 0 4.75 2.64 4.75 6.07V24h-4v-6.93c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.79-2.65 3.64V24h-4z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@taskntrade" // update if needed
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="rounded-full p-2 ring-1 ring-slate-200 hover:bg-brand-50 hover:ring-brand-300 transition"
            title="TikTok"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-700">
              <path d="M16.1 3c.5 1.7 1.8 3 3.4 3.5v3.1c-1.4 0-2.8-.4-4-1.1v5.9c0 3.7-3 6.6-6.6 6.6S2.3 18.1 2.3 14.4 5.3 7.8 9 7.8c.5 0 1 .1 1.5.2v3.2c-.5-.2-1-.3-1.5-.3-2 0-3.6 1.6-3.6 3.6S7 18 9 18s3.6-1.6 3.6-3.6V3h3.5z"/>
            </svg>
          </a>
        </div>

        {/* RIGHT: Copyright */}
        <div className="md:justify-self-end text-right">
          <p>© 2025 TasknTrade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
