"use client";
import { useState } from "react";
import Image from "next/image";

// Main component that renders all crypto cards
export const CryptoCards = () => {
  return (
    <div className="">
      <div className="p-4">
        <div className="space-y-3">
          <div className="bg-[#1a1a1a] rounded-lg p-6 flex justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Image
                  src={"/gbese-icon.svg"}
                  alt="gbese token"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <div className="text-white">Gbese</div>
                <div className="text-gray-400 text-xs">5 GB</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white">$125.40</div>
              <div className="text-green-500 text-xs">+2.3%</div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6 flex justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image src={"/USDC.webp"} alt="usdc" width={60} height={60} />
              </div>
              <div>
                <div className="text-white">Usdc</div>
                <div className="text-gray-400 text-xs">50 USDC</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white">$50</div>
              <div className="text-green-500 text-xs">+2.3%</div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6 flex justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image src={"/eth-logo.png"} alt="usdc" width={60} height={60} />
              </div>
              <div>
                <div className="text-white">Eth</div>
                <div className="text-gray-400 text-xs">0.23 ETH</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white">$435.78</div>
              <div className="text-red-500 text-xs">-0.8%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
