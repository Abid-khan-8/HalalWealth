// src/components/StocksSection.jsx
"use client";

const STOCKS = [
  { symbol: "RELIANCE", name: "Reliance Industries Ltd", price: "₹2,950.40" },
  { symbol: "TCS", name: "Tata Consultancy Services", price: "₹3,820.10" },
  { symbol: "INFY", name: "Infosys Ltd", price: "₹1,610.75" },
];

export default function StocksSection({ watchlist, setWatchlist }) {
  const toggleWatchlist = (symbol) => {
    setWatchlist((prev) =>
      prev.includes(symbol)
        ? prev.filter((s) => s !== symbol)
        : [...prev, symbol]
    );
  };

  const buyStock = (symbol) => {
    alert(`Buying ${symbol} (demo only)`);
  };

  return (
    <section id="stocks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-10 text-emerald-900">
          Popular Indian Stocks
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {STOCKS.map((stock) => {
            const inWatchlist = watchlist.includes(stock.symbol);

            return (
              <div
                key={stock.symbol}
                className="bg-emerald-50 p-8 rounded-xl shadow"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-2xl font-bold text-emerald-700">
                    {stock.symbol}
                  </h3>
                  <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Halal
                  </span>
                </div>

                <p className="text-gray-600">{stock.name}</p>
                <p className="font-semibold text-lg mt-2">{stock.price}</p>

                {/* Watchlist Button */}
                <button
                  onClick={() => toggleWatchlist(stock.symbol)}
                  className={`mt-4 w-full py-2 rounded-lg border
                    ${
                      inWatchlist
                        ? "bg-emerald-700 text-white"
                        : "bg-white border-emerald-600 text-emerald-700"
                    }`}
                >
                  ⭐ {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                </button>

                {/* Buy Button */}
                <button
                  onClick={() => buyStock(stock.symbol)}
                  className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
                >
                  Buy
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
