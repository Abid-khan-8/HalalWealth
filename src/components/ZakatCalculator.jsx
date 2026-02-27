// src/components/ZakatCalculator.jsx
"use client";

import { useState } from "react";

export default function ZakatCalculator() {
  const [assets, setAssets] = useState({
    cash: "",
    stocks: "",
    business: "",
    goldSilver: "",
    liabilities: "",
  });

  const NISAB = 55000; // Silver Nisab (₹) — can be made dynamic later

  const handleChange = (e) => {
    setAssets({ ...assets, [e.target.name]: e.target.value });
  };

  const toNumber = (val) => Number(val) || 0;

  const totalAssets =
    toNumber(assets.cash) +
    toNumber(assets.stocks) +
    toNumber(assets.business) +
    toNumber(assets.goldSilver);

  const netZakatable = totalAssets - toNumber(assets.liabilities);

  const zakatDue =
    netZakatable >= NISAB ? (netZakatable * 0.025).toFixed(2) : 0;

  return (
    <section id="zakat" className="py-20 bg-white text-black">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-emerald-900 mb-6 text-center">
          Zakat Calculator
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Calculate your annual Zakat based on zakatable assets and liabilities
        </p>

        <div className="bg-emerald-50 rounded-xl p-8 shadow space-y-6">
          {/* Assets */}
          <h3 className="text-2xl font-bold text-emerald-800">
            Zakatable Assets
          </h3>

          <Input label="Cash & Bank Balance (₹)" name="cash" onChange={handleChange} />
          <Input label="Halal Stocks / Investments (₹)" name="stocks" onChange={handleChange} />
          <Input label="Business Inventory (₹)" name="business" onChange={handleChange} />
          <Input label="Gold & Silver Value (₹)" name="goldSilver" onChange={handleChange} />

          {/* Liabilities */}
          <h3 className="text-2xl font-bold text-emerald-800 pt-4">
            Liabilities
          </h3>

          <Input
            label="Short-term Debts (₹)"
            name="liabilities"
            onChange={handleChange}
          />

          {/* Results */}
          <div className="bg-white rounded-lg p-6 mt-6">
            <p className="flex justify-between text-lg">
              <span>Total Assets</span>
              <span>₹{totalAssets.toLocaleString()}</span>
            </p>

            <p className="flex justify-between text-lg">
              <span>Net Zakatable Wealth</span>
              <span>₹{netZakatable.toLocaleString()}</span>
            </p>

            <hr className="my-4" />

            {netZakatable >= NISAB ? (
              <p className="text-2xl font-bold text-emerald-700 text-center">
                Zakat Due: ₹{Number(zakatDue).toLocaleString()}
              </p>
            ) : (
              <p className="text-center text-gray-500">
                Your wealth is below Nisab (₹{NISAB.toLocaleString()}).  
                Zakat is not obligatory.
              </p>
            )}
          </div>

          <p className="text-sm text-gray-500 text-center">
            * Based on silver Nisab. For educational purposes only.
          </p>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type="number"
        name={name}
        onChange={onChange}
        className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-600"
        placeholder="0"
      />
    </div>
  );
}
