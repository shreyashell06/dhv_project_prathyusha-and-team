"use client";

import { useState } from "react";
import {
  ChevronDown,
  Users,
  Target,
  Zap,
  Repeat,
  CheckCircle,
} from "lucide-react";

export default function KMeansStory() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  const chapters = [
    {
      id: 1,
      title: "Chapter 1: How Many Groups?",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500",
      content:
        "You decide K=3: Family Shoppers, Health Nuts, Deal Seekers. Like choosing how many teams to form before the game starts.",
    },
    {
      id: 2,
      title: "Chapter 2: Pick Random Leaders",
      icon: <Target className="w-6 h-6" />,
      color: "bg-purple-500",
      content:
        "K-means picks 3 random 'average customers' as starting points. Think of them as team captains.",
    },
    {
      id: 3,
      title: "Chapter 3: Everyone Joins a Team",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-green-500",
      content:
        "Every customer joins the closest leader based on shopping habits. Diaper buyers → Family team!",
    },
    {
      id: 4,
      title: "Chapter 4: Move Leaders to Center",
      icon: <Repeat className="w-6 h-6" />,
      color: "bg-orange-500",
      content:
        "Recalculate the true center of each group and move the leader there. Teams get tighter!",
    },
    {
      id: 5,
      title: "Chapter 5: Repeat Until Perfect",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-pink-500",
      content:
        "Keep reassigning and adjusting until no one switches teams. Done! Clusters are ready.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
        {/* Hero */}
        <header className="px-6 py-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <h1 className="text-5xl font-bold mb-4">
            The Supermarket Customer Puzzle
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            How{" "}
            <span className="font-bold text-yellow-300">
              K-Means Clustering
            </span>{" "}
            helps you group customers like magic —
            <span className="italic"> no tech degree needed!</span>
          </p>
        </header>

        {/* Story Intro */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome to FreshMart
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You're the{" "}
              <span className="font-semibold text-indigo-600">
                strategy boss
              </span>{" "}
              at FreshMart. Thousands of customers shop daily — but who are
              they? How do you send the <em>right offer</em> to the{" "}
              <em>right person</em>?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Enter{" "}
              <span className="font-bold text-purple-600">
                K-Means Clustering
              </span>{" "}
              — your data detective that automatically groups similar customers
              together. No guesswork. No spreadsheets. Just smart insights.
            </p>
          </div>

          {/* Interactive Chapters */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              The 5-Step Magic
            </h2>
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200"
              >
                <button
                  onClick={() =>
                    setActiveChapter(
                      activeChapter === chapter.id ? null : chapter.id
                    )
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`${chapter.color} text-white p-3 rounded-lg`}
                    >
                      {chapter.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Click to reveal
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      activeChapter === chapter.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeChapter === chapter.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {chapter.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Fruit Analogy */}
          <div className="mt-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Think of It Like Sorting Fruits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-2">Apples</div>
                <p>Red, round, sweet</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-2">Bananas</div>
                <p>Yellow, curved, soft</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-2">Oranges</div>
                <p>Orange, citrus, juicy</p>
              </div>
            </div>
            <p className="mt-6 text-lg italic text-center">
              K-means does this with{" "}
              <span className="font-bold">customers</span> using{" "}
              <span className="font-bold">data</span> instead of eyes.
            </p>
          </div>

          {/* Business Outcome */}
          <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">
              Your Marketing Superpower
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur p-6 rounded-xl">
                <h4 className="font-bold text-xl">Family Shoppers</h4>
                <p className="mt-2">Back-to-school bundles</p>
              </div>
              <div className="bg-white/20 backdrop-blur p-6 rounded-xl">
                <h4 className="font-bold text-xl">Health Nuts</h4>
                <p className="mt-2">New superfood alerts</p>
              </div>
              <div className="bg-white/20 backdrop-blur p-6 rounded-xl">
                <h4 className="font-bold text-xl">Deal Seekers</h4>
                <p className="mt-2">Flash sale coupons</p>
              </div>
            </div>
            <p className="mt-8 text-xl font-semibold">
              Result?{" "}
              <span className="text-yellow-300">
                Higher sales. Happier customers. Smarter strategy.
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6">
              K-means isn't magic — it's{" "}
              <span className="font-bold text-indigo-600">smart grouping</span>.
              And now, <em>you</em> understand it.
            </p>
            <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Ready to cluster your customers?
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 py-8 text-center text-gray-500 text-sm">
          <p>
            Built with Next.js + Tailwind CSS | For Business Strategists, By
            Storytellers
          </p>
        </footer>
      </div>
    </>
  );
}
