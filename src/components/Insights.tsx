// src/components/Insights.tsx
const names = [
  "Premium Loyalists",
  "Smart Spenders",
  "Value Seekers",
  "Occasional Visitors",
  "Budget Browsers",
];

export default function Insights({ clusters, centroids, k, optimalK }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {centroids.map((cent: number[], i: number) => {
        const group = clusters.filter((d: any) => d.clusterId === i);
        const avgAge =
          group.reduce((a: number, d: any) => a + d.Age, 0) / group.length || 0;
        return (
          <div key={i} className="glass-card p-6 hover-lift text-center">
            <h4 className="text-xl font-display font-bold gradient-text mb-2">
              {names[i]}
            </h4>
            <p className="text-3xl font-bold text-indigo-900">{group.length}</p>
            <p className="text-sm text-gray-600 mb-3">customers</p>
            <div className="space-y-1 text-gray-700">
              <p>
                <strong>${cent[0].toFixed(0)}k</strong> income
              </p>
              <p>
                <strong>{cent[1].toFixed(0)}</strong> spend
              </p>
              <p className="text-sm">Avg age: {avgAge.toFixed(0)}</p>
            </div>
          </div>
        );
      })}
      {optimalK && k !== optimalK && (
        <div className="col-span-full glass-card p-6 border-2 border-red-300 bg-red-50">
          <p className="text-red-700 font-bold text-center">
            Use <strong>{optimalK} tribes</strong> for best results.
          </p>
        </div>
      )}
    </div>
  );
}
