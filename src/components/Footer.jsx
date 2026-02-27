export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <p>© 2026 TayyibWealth. Not financial or Shariah advice.</p>

        <div className="flex justify-center gap-6">
          <a
            href="#stocks"
            className="hover:text-emerald-500 transition-colors"
          >
            Stocks
          </a>
          <a
            href="#sip"
            className="hover:text-emerald-500 transition-colors"
          >
            SIP
          </a>
          <a
            href="#trading"
            className="hover:text-emerald-500 transition-colors"
          >
            Trading
          </a>
          <a
            href="#zakat"
            className="hover:text-emerald-500 transition-colors"
          >
            Zakat
          </a>
          <a
            href="#watchlist"
            className="hover:text-emerald-500 transition-colors"
          >
            Watchlist
          </a>
        </div>
      </div>
    </footer>
  );
}
