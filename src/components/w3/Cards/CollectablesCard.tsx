"use client";
import { useState } from "react";

export const CollectablesTab = () => {
  return (
    <div className="p-4">
      <h3 className="text-md font-medium text-white mb-4">Recently Added</h3>
      <div className="grid grid-cols-2 gap-3">
        {/* Example collectables content */}
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="h-24 bg-gray-800 rounded-md mb-2 flex items-center justify-center">
            <span className="text-gray-400">NFT Preview</span>
          </div>
          <div className="text-white">Crypto Punk #3542</div>
          <div className="text-gray-400 text-xs">Floor: 2.4 ETH</div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="h-24 bg-gray-800 rounded-md mb-2 flex items-center justify-center">
            <span className="text-gray-400">NFT Preview</span>
          </div>
          <div className="text-white">Bored Ape #1234</div>
          <div className="text-gray-400 text-xs">Floor: 5.8 ETH</div>
        </div>
      </div>
    </div>
  );
};
