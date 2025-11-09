// src/lib/kmeans.ts
export function runKMeans(
  data: number[][],
  k: number,
  maxIter = 100
): { clusters: number[]; centroids: number[][]; inertia: number } {
  let centroids = data.slice(0, k);
  let clusters = new Array(data.length);

  for (let iter = 0; iter < maxIter; iter++) {
    clusters = data.map((point) =>
      centroids.reduce(
        (best, cent, i) =>
          dist(point, cent) < dist(point, centroids[best]) ? i : best,
        0
      )
    );

    const newCentroids = centroids.map((_, i) =>
      average(data.filter((_, idx) => clusters[idx] === i))
    );

    if (centroids.every((c, i) => dist(c, newCentroids[i]) < 0.001)) break;
    centroids = newCentroids;
  }

  const inertia = clusters.reduce(
    (sum, cluster, i) => sum + dist(data[i], centroids[cluster]) ** 2,
    0
  );

  return { clusters, centroids, inertia };
}

function dist(a: number[], b: number[]) {
  return Math.sqrt(a.reduce((sum, val, i) => sum + (val - b[i]) ** 2, 0));
}

function average(points: number[][]) {
  if (points.length === 0) return [0, 0];
  return points[0].map(
    (_, i) => points.reduce((sum, p) => sum + p[i], 0) / points.length
  );
}

export function detectElbow(wcss: { k: number; wcss: number }[]) {
  if (wcss.length < 3) return null;
  const x = wcss.map((d) => d.k);
  const y = wcss.map((d) => d.wcss);
  const x1 = x[0],
    y1 = y[0];
  const x2 = x[x.length - 1],
    y2 = y[y.length - 1];
  const distances = x.map((xi, i) => {
    const yi = y[i];
    const num = Math.abs((y2 - y1) * xi - (x2 - x1) * yi + x2 * y1 - y2 * x1);
    const den = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
    return num / den;
  });
  return x[distances.indexOf(Math.max(...distances))];
}
