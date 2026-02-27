"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", price: 2400 },
  { name: "Feb", price: 2600 },
  { name: "Mar", price: 2800 },
  { name: "Apr", price: 3000 },
  { name: "May", price: 2950 },
];

export default function StockChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h3 className="text-xl font-bold text-emerald-800 mb-4">
        Portfolio Growth
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#059669"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
