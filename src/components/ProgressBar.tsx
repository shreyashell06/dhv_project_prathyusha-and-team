// src/components/ProgressBar.tsx
"use client";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
  const pathname = usePathname();
  const progress = pathname.includes("/story")
    ? 60
    : pathname.includes("/dashboard")
    ? 100
    : 0;

  return (
    <div className="fixed bottom-0 left-0 w-full h-2 bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
