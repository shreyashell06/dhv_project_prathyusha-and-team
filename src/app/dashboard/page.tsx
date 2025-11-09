// src/app/dashboard/page.tsx
"use client";
import { useState, useEffect } from "react";
import KSlider from "@/components/KSlider";
import ClusterViz from "@/components/ClusterViz";
import ElbowChart from "@/components/ElbowChart";
import Insights from "@/components/Insights";
import { runKMeans, detectElbow } from "@/lib/kmeans";
import { parseCSV } from "@/lib/utils";

export default function Dashboard() {
  const [data, setData] = useState<any[]>([]);
  const [k, setK] = useState(5);
  const [clusters, setClusters] = useState<any[]>([]);
  const [centroids, setCentroids] = useState<any[]>([]);
  const [elbowData, setElbowData] = useState<any[]>([]);
  const [optimalK, setOptimalK] = useState<number | null>(null);

  useEffect(() => {
    fetch("/mall_customers.csv")
      .then((r) => r.text())
      .then((text) => setData(parseCSV(text)));
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    const features = data.map((d) => [
      d["Annual Income (k$)"],
      d["Spending Score (1-100)"],
    ]);
    const { clusters: c, centroids: cents } = runKMeans(features, k);
    setClusters(c.map((id, i) => ({ ...data[i], clusterId: id })));
    setCentroids(cents);

    const wcss = [];
    for (let i = 1; i <= 10; i++) {
      const { inertia } = runKMeans(features, i);
      wcss.push({ k: i, wcss: inertia });
    }
    setElbowData(wcss);
    setOptimalK(detectElbow(wcss));
  }, [data, k]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-display font-bold text-center gradient-text mb-12">
          Live Customer Tribes
        </h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <KSlider k={k} setK={setK} optimalK={optimalK} />
            <ElbowChart data={elbowData} optimalK={optimalK} />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <ClusterViz data={clusters} centroids={centroids} k={k} />
            <Insights
              clusters={clusters}
              centroids={centroids}
              k={k}
              optimalK={optimalK}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
