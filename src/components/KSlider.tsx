// src/components/KSlider.tsx
export default function KSlider({ k, setK, optimalK }: any) {
  return (
    <div className="glass-card p-8 hover-lift">
      <h3 className="text-2xl font-display font-bold gradient-text mb-6">
        How Many Tribes?
      </h3>
      <input
        type="range"
        min="1"
        max="10"
        value={k}
        onChange={(e) => setK(+e.target.value)}
        className="w-full h-3 rounded-full appearance-none cursor-pointer accent-purple-600"
        style={{
          background: `linear-gradient(to right, #8b5cf6 ${k * 10}%, #e5e7eb ${
            k * 10
          }%)`,
        }}
      />
      <div className="flex justify-between text-sm mt-3 font-medium text-gray-600">
        <span>1</span>
        <span className="text-2xl font-bold gradient-text">{k}</span>
        <span>10</span>
      </div>
      {optimalK && k !== optimalK && (
        <p className="mt-4 text-amber-600 font-semibold animate-pulse">
          Best: <strong className="text-lg">{optimalK} tribes</strong>
        </p>
      )}
    </div>
  );
}
