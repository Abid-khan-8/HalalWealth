// src/components/Watchlist.jsx
"use client";

export default function Watchlist({ watchlist, setWatchlist }) {
  const removeStock = (symbol) => {
    setWatchlist((prev) => prev.filter((s) => s !== symbol));
  };

  return (
    <section id="watchlist" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8 text-emerald-900">
          Your Watchlist
        </h2>

        <ul className="bg-white rounded-xl shadow p-6 space-y-3 text-left">
          {watchlist.length === 0 ? (
            <li className="text-gray-500">No stocks added yet.</li>
          ) : (
            watchlist.map((symbol) => (
              <li
                key={symbol}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="font-semibold">{symbol}</span>

                <button
                  onClick={() => removeStock(symbol)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
