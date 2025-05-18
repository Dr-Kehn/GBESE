"use client";

import Image from "next/image";

const features = [
  {
    title: "See the System for What It Is",
    description:
      "Uncover the truth behind interest rates, debt traps, and credit games designed to keep you stuck",
    img: "/blog/money.png", // replace with your actual image path in public/blog/
  },
  {
    title: "Community over Credit Score",
    description:
      "Join a growing movement of people tired of being defined by numbers. Share stories, find support, and grow together.",
    img: "/blog/community.png",
  },
  {
    title: "Tools for Real People",
    description:
      "Get access to debt relief tips, budgeting tools, and financial education built for everyday struggles—not Wall Street.",
    img: "/blog/tools.png",
  },
  {
    title: "Reclaim Your Financial Power",
    description:
      "Take back control with transparent insights and smart alternatives to traditional banking. No jargon. No shame.",
    img: "/blog/plant.png",
  },
];

export default function GbeseFeatures() {
  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
          Why You Should Get <br className="hidden sm:block" /> a Gbese App
        </h2>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            <div className="mt-4 rounded-xl overflow-hidden">
              <Image
                src={feature.img}
                alt={feature.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
