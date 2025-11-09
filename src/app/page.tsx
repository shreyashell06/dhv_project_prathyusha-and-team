// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-8">
      <div className="text-center text-white max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in font-display">
          Meet Your Customers
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          A 3-minute story that reveals how 200 shoppers naturally form tribes
        </p>
        <Link
          href="/story"
          className="inline-block px-12 py-5 text-xl font-bold bg-white text-purple-600 rounded-full shadow-2xl hover:scale-105 transition-transform"
        >
          Start the Journey
        </Link>
      </div>
    </div>
  );
}
