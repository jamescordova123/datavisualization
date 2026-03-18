import React, { useEffect, useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  CartesianGrid, BarChart, Bar
} from "recharts";

interface Sale {
  id: number;
  product: string;
  quantity: number;
  amount: number;
}

const SalesChart = () => {
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales")
      .then((res) => res.json())
      .then((data) => setSales(data));
  }, []);

  return (
   <div className="p-10 bg-[#0b0f19] min-h-screen flex flex-col items-center gap-10">

  {/* Card 1 - Quantity */}
  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.1)]">

    <h2 className="text-xl font-semibold text-cyan-400 mb-4 tracking-widest">
      SALES QUANTITY
    </h2>

    <BarChart width={1000} height={300} data={sales}>
      <defs>
        <linearGradient id="neonBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity={1}/>
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.4}/>
        </linearGradient>
      </defs>

      <CartesianGrid strokeDasharray="2 4" stroke="#1f2937" />

      <XAxis
        dataKey="product"
        stroke="#9ca3af"
        tick={{ fontSize: 12 }}
      />

      <YAxis stroke="#9ca3af" />

      <Tooltip
        contentStyle={{
          backgroundColor: "rgba(15,23,42,0.9)",
          border: "1px solid #22d3ee",
          borderRadius: "10px",
          color: "#e5e7eb"
        }}
      />

      <Bar
        dataKey="quantity"
        fill="url(#neonBar)"
        radius={[6,6,0,0]}
      />
    </BarChart>
  </div>


  {/* Card 2 - Amount */}
  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">

    <h2 className="text-xl font-semibold text-purple-400 mb-4 tracking-widest">
      SALES AMOUNT
    </h2>

    <LineChart width={1000} height={300} data={sales}>

      <CartesianGrid strokeDasharray="2 4" stroke="#1f2937" />

      <XAxis
        dataKey="product"
        stroke="#9ca3af"
        tick={{ fontSize: 12 }}
      />

      <YAxis stroke="#9ca3af" />

      <Tooltip
        contentStyle={{
          backgroundColor: "rgba(15,23,42,0.9)",
          border: "1px solid #a855f7",
          borderRadius: "10px",
          color: "#e5e7eb"
        }}
      />

      <Line
        type="monotone"
        dataKey="amount"
        stroke="#a855f7"
        strokeWidth={2.5}
        dot={{ r: 4, fill: "#c084fc" }}
        activeDot={{ r: 7 }}
      />
    </LineChart>
  </div>

</div>

  );
};

export default SalesChart;
