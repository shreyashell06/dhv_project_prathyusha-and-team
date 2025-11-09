export default function StoryChapter({
  title,
  text,
  img,
}: {
  title: string;
  text: string;
  img: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center gap-6 hover:shadow-xl transition-shadow">
      <div className="text-6xl">{img}</div>
      <div>
        <h3 className="text-2xl font-bold text-indigo-900 mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
