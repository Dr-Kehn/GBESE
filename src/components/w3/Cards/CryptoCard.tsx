"use client";

import { useState } from "react";
import Image from "next/image";
import { CryptoDetailPage } from "../CryptoDetails/CryptoDetails";

export const CryptoCards = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  const handleCardClick = (currency: string) => {
    setSelectedCurrency(currency); // Set the selected currency to display details
  };

  const handleBack = () => {
    setSelectedCurrency(null); // Reset the selected currency to go back to the cards view
  };

  return (
    <div className="p-4">
      {selectedCurrency ? (
        // Render CryptoDetails component when a currency is selected
        <CryptoDetailPage currency={selectedCurrency} onBack={handleBack} />
      ) : (
        // Render the list of crypto cards
        <div className="space-y-3">
          {/* Gbese Card */}
          <div
            className="bg-[#1a1a1a] rounded-lg p-6 flex justify-between cursor-pointer"
            onClick={() => handleCardClick("Gbese")}
          >
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

          {/* USDC Card */}
          <div
            className="bg-[#1a1a1a] rounded-lg p-6 flex justify-between cursor-pointer"
            onClick={() => handleCardClick("USDC")}
          >
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

          {/* USDC Card */}
          <div
            className="bg-[#1a1a1a] rounded-lg p-6 flex justify-between cursor-pointer"
            onClick={() => handleCardClick("ETH")}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image
                  src={"/eth-logo.png"}
                  alt="usdc"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <div className="text-white">Eth</div>
                <div className="text-gray-400 text-xs">0.04 ETH</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white">$240</div>
              <div className="text-green-500 text-xs">+2.3%</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
