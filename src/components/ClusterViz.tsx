// src/components/ClusterViz.tsx
"use client";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const colors = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

export default function ClusterViz({ data, centroids, k }: any) {
  if (!data.length) return null;

  const scatterData = {
    datasets: [
      ...Array.from({ length: k }, (_, i) => ({
        label: `Cluster ${i + 1}`,
        data: data
          .filter((d: any) => d.clusterId === i)
          .map((d: any) => ({
            x: d["Annual Income (k$)"],
            y: d["Spending Score (1-100)"],
          })),
        backgroundColor: colors[i],
        pointRadius: 6,
      })),
      {
        label: "Centroids",
        data: centroids.map((c: number[]) => ({ x: c[0], y: c[1] })),
        backgroundColor: "#1f2937",
        pointStyle: "star",
        pointRadius: 12,
      },
    ],
  };

  return (
    <div className="glass-card p-8 hover-lift">
      <h3 className="text-2xl font-display font-bold gradient-text mb-6">
        Live Customer Tribes
      </h3>
      <div className="h-96 bg-gray-50 rounded-xl p-4">
        <Scatter
          data={scatterData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { title: { display: true, text: "Income (k$)" } },
              y: { title: { display: true, text: "Spend Score" } },
            },
          }}
        />
      </div>
    </div>
  );
}
