// src/components/ElbowChart.tsx
"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ElbowChart({ data, optimalK }: any) {
  if (!data.length) return null;

  const chartData = {
    labels: data.map((d: any) => d.k),
    datasets: [
      {
        label: "Distortion",
        data: data.map((d: any) => d.wcss),
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        tension: 0.4,
        pointBackgroundColor: (ctx: any) =>
          data[ctx.dataIndex].k === optimalK ? "#ef4444" : "#8b5cf6",
        pointRadius: (ctx: any) =>
          data[ctx.dataIndex].k === optimalK ? 10 : 6,
      },
    ],
  };

  return (
    <div className="glass-card p-8 hover-lift">
      <h3 className="text-2xl font-display font-bold gradient-text mb-6">
        Optimal K
      </h3>
      <div className="h-64">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
          }}
        />
      </div>
      <p className="text-center mt-4 text-green-600 font-bold text-lg">
        Best: K = {optimalK}
      </p>
    </div>
  );
}
