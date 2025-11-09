// src/app/story/layout.tsx
import ProgressBar from "@/components/ProgressBar";

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {children}
      <ProgressBar />
    </div>
  );
}
