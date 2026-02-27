"use client";

const sections = [
  {
    title: "Most Active",
    data: [
      { name: "Liminatus Pharma", symbol: "LIMN", price: 1.84, change: -14.42, grade: "B-" },
      { name: "Jet.AI Inc", symbol: "JTAI", price: 0.15, change: -8.14, grade: "C-" },
      { name: "Hims & Hers Health", symbol: "HIMS", price: 23.02, change: 3.23, grade: "C" },
      { name: "CBD of Denver", symbol: "CBDD", price: 0.0001, change: 0, grade: "A-" },
      { name: "WhiteFiber Inc", symbol: "WYFI", price: 18.56, change: 23.11, grade: "C+" },
    ],
  },
  {
    title: "Most Popular",
    data: [
      { name: "Tesla Inc", symbol: "TSLA", price: 411.11, change: 2.55, grade: "B" },
      { name: "NVIDIA Corp", symbol: "NVDA", price: 185.41, change: 4.94, grade: "A-" },
      { name: "AMD", symbol: "AMD", price: 208.44, change: 5.74, grade: "A-" },
      { name: "Apple Inc", symbol: "AAPL", price: 278.12, change: 0.36, grade: "C+" },
      { name: "Siemens Energy", symbol: "SMNEY", price: 179.87, change: 1.63, grade: "C" },
    ],
  },
  {
    title: "Top Gainers",
    data: [
      { name: "WhiteFiber Inc", symbol: "WYFI", price: 18.565, change: 23.11, grade: "C+" },
      { name: "JFB Construction", symbol: "JFB", price: 30.095, change: 28.5, grade: "A-" },
      { name: "Jiuzhi Holdings", symbol: "JZXN", price: 1.67, change: 28.46, grade: "A+" },
      { name: "CS Diagnostics", symbol: "FZRO", price: 3.1, change: 58.97, grade: "A+" },
      { name: "TechCreate Group", symbol: "TCGL", price: 172.84, change: 12.4, grade: "B+" },
    ],
  },
  {
    title: "Top Losers",
    data: [
      { name: "TechCreate Group", symbol: "TCGL", price: 172.84, change: -13.58, grade: "A+" },
      { name: "Liminatus Pharma", symbol: "LIMN", price: 1.84, change: -14.42, grade: "B-" },
      { name: "Sagtec Global", symbol: "SAGT", price: 1.43, change: -14.37, grade: "A+" },
      { name: "Fly-E Group", symbol: "FLYE", price: 3.46, change: -41.65, grade: "C" },
      { name: "Jet.AI Inc", symbol: "JTAI", price: 0.15, change: -8.14, grade: "C-" },
    ],
  },
  {
    title: "52 Week High",
    data: [
      { name: "Siemens Energy", symbol: "SMNEY", price: 179.87, change: 1.63, grade: "C" },
      { name: "Tesla Inc", symbol: "TSLA", price: 411.11, change: 2.55, grade: "B" },
      { name: "NVIDIA Corp", symbol: "NVDA", price: 185.41, change: 4.94, grade: "A-" },
      { name: "Apple Inc", symbol: "AAPL", price: 278.12, change: 0.36, grade: "C+" },
      { name: "AMD", symbol: "AMD", price: 208.44, change: 5.74, grade: "A-" },
    ],
  },
  {
    title: "52 Week Low",
    data: [
      { name: "TTW PCL", symbol: "TTAPF", price: 0.2899, change: 1.72, grade: "A-" },
      { name: "CBD of Denver", symbol: "CBDD", price: 0.0001, change: 0, grade: "A-" },
      { name: "Jet.AI Inc", symbol: "JTAI", price: 0.15, change: -8.14, grade: "C-" },
      { name: "Fly-E Group", symbol: "FLYE", price: 3.46, change: -41.65, grade: "C" },
      { name: "Liminatus Pharma", symbol: "LIMN", price: 1.84, change: -14.42, grade: "B-" },
    ],
  },
];

export default function Trading() {
  return (
    <section id="trading" className="py-20 bg-gray-100">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 mb-10 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-emerald-900">
          Trending Halal Stocks
        </h2>

        <button
          onClick={() => alert("View all stocks")}
          className="text-emerald-700 font-semibold hover:underline"
        >
          View All →
        </button>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-black">
              {section.title}
              <span className="text-xl">›</span>
            </h3>

            <div className="bg-white rounded-xl shadow divide-y">
              {/* COLUMN HEADERS */}
              <div className="grid grid-cols-[1fr_240px] px-4 py-2 text-xs text-gray-400">
                <span></span>
                <div className="grid grid-cols-3 gap-4 text-right">
                  <span>Status</span>
                  <span>Grade</span>
                  <span>Price</span>
                </div>
              </div>

              {/* ROWS */}
              {section.data.map((stock) => (
                <div
                  key={stock.symbol}
                  className="grid grid-cols-[1fr_240px] items-center p-4"
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-3 min-w-0">
                    <button className="text-xl text-gray-400 hover:text-yellow-400">
                      ★
                    </button>

                    <div className="min-w-0">
                      <p className="font-semibold truncate text-gray-950">
                        {stock.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {stock.symbol}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT (LOCKED ALIGNMENT) */}
                  <div className="grid grid-cols-3 items-center gap-4 text-right">
                    <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full text-center">
                      HALAL
                    </span>

                    <span className="px-3 py-1 text-xs bg-green-50 text-green-700 rounded-full text-center">
                      {stock.grade}
                    </span>

                    <div>
                      <p className="font-semibold">
                        ${stock.price}
                      </p>
                      <p
                        className={`text-sm ${
                          stock.change >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stock.change >= 0 ? "+" : ""}
                        {stock.change}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
