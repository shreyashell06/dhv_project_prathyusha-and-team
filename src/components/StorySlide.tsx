// src/components/StorySlide.tsx
export default function StorySlide({ title, text, icon, color }: any) {
  return (
    <div className="text-center max-w-4xl animate-fade-in">
      <div
        className={`text-9xl mb-8 bg-gradient-to-br ${color} bg-clip-text text-transparent font-bold`}
      >
        {icon}
      </div>
      <h2 className="text-5xl md:text-7xl font-display font-black text-gray-800 mb-6 leading-tight">
        {title}
      </h2>
      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        {text}
      </p>
    </div>
  );
}
