// src/app/story/page.tsx
"use client";
import { useState } from "react";
import StorySlide from "@/components/StorySlide";
import Link from "next/link";

const slides = [
  {
    title: "The Crowded Mall",
    text: "200 shoppers. Some buy luxury. Others hunt deals. Chaos? No — hidden patterns.",
    icon: "Mall",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "The Invisible Organizer",
    text: "K-Means watches income and spending. It groups alike.",
    icon: "Sparkles",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Pick 5 Captains",
    text: "Random shoppers become tribe leaders.",
    icon: "Crown",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Tribes Form",
    text: "Everyone joins their closest captain.",
    icon: "Handshake",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Perfect Tribes",
    text: "Data reveals 5 natural customer types.",
    icon: "Target",
    color: "from-indigo-600 to-purple-600",
  },
];

export default function Story() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <StorySlide {...slides[step]} />
      <div className="flex gap-4 mt-12">
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-8 py-3 bg-white text-purple-600 rounded-full font-bold shadow-lg hover:scale-105 transition"
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transition"
          >
            Next
          </button>
        ) : (
          <Link
            href="/dashboard"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition"
          >
            See the Tribes
          </Link>
        )}
      </div>
    </div>
  );
}
