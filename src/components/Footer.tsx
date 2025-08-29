export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container-max py-8 text-sm text-slate-600 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} TasknTrade. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="mailto:hello@taskntrade.com">hello@taskntrade.com</a>
        </nav>
      </div>
    </footer>
  );
}
