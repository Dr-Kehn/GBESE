"use client";

import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-white flex flex-col md:relative items-center w-full  px-2 pt-10 pb-40 md:px-10">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#031733] to-[#094499] h-[90vh] text-white w-full max-w-7xl rounded-2xl px-6 py-10 md:py-16 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Break Free from <br className="hidden sm:block" />
            the Debt Game
          </h1>
          <p className="text-sm sm:text-base mb-6 leading-relaxed text-white/90">
            Traditional banking isn't built for everyone. Here, we expose the
            traps, share real stories, and create tools that empower everyday
            people to reclaim their financial freedom.
          </p>
          <button className="bg-[#1A73E8] text-white px-6 py-2 rounded font-semibold text-sm shadow">
            Get Started
          </button>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 md:absolute md:right-[-11vw] flex justify-center">
          <Image
            src="/image/hero-illustration.png"
            alt="Hero illustration"
            width={400}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>

      {/* CBN + NDIC Row */}
      <div className="md:w-[60%] w-full max-w-5xl mt-8 bg-white rounded-2xl px-6 py-6 text-[#1e1e1e] md:absolute md:bottom-28 md:left-10 text-sm flex flex-col  items-center justify-between gap-4 shadow-md">
        <p className="font-medium text-center md:text-left text-lg md:text-xl">
          Fully Backed to fully Bank You
        </p>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <Image
              src="/image/cbn.svg"
              alt="CBN logo"
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain"
            />
            <span className="text-[#9FA0A1]">CBN Regulated</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/image/ndic.svg"
              alt="NDIC logo"
              width={80}
              height={80}
              className="w-[80px] h-[80px] object-contain"
            />
            <span className="text-[#9FA0A1]">NDIC Insured</span>
          </div>
        </div>
      </div>
    </section>
  );
}
