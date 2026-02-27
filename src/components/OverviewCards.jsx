"use client";

import { motion } from "framer-motion";
import { Wallet, TrendingUp, ShieldCheck } from "lucide-react";

const cards = [
  {
    title: "Total Portfolio",
    value: "₹4,25,000",
    icon: Wallet,
  },
  {
    title: "Monthly Growth",
    value: "+8.4%",
    icon: TrendingUp,
  },
  {
    title: "Shariah Compliance",
    value: "100% Halal",
    icon: ShieldCheck,
  },
];

export default function OverviewCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{card.title}</p>
              <p className="text-2xl font-bold text-emerald-800">
                {card.value}
              </p>
            </div>
            <card.icon className="text-emerald-600 w-8 h-8" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
