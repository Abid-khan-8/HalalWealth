// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-emerald-900 mb-6">
          Halal Wealth Building
          <br />
          Without Compromise
        </h1>

        <p className="text-2xl text-gray-800 max-w-4xl mx-auto mb-10">
          Stocks • SIPs • Trading • Zakat — All Shariah-Compliant
        </p>

        <button className="bg-emerald-700 text-white px-10 py-5 rounded-xl text-xl font-semibold">
          Start Free Screening →
        </button>
      </div>
    </section>
  );
}
