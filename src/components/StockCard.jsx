"use client";

export default function StockCard({ stock, toggleWatchlist }) {
  return (
    <div className="bg-emerald-50 p-8 rounded-xl shadow">
      <div className="flex justify-between mb-2">
        <h3 className="text-2xl font-bold text-emerald-700">
          {stock.symbol}
        </h3>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {stock.status}
        </span>
      </div>

      <p className="text-gray-600">{stock.name}</p>
      <p className="font-semibold text-lg mt-2">{stock.price}</p>

      <button
        onClick={() => toggleWatchlist(stock.symbol)}
        className="mt-4 w-full border border-emerald-600 text-emerald-700 py-2 rounded-lg"
      >
        ⭐ Add to Watchlist
      </button>
    </div>
  );
}