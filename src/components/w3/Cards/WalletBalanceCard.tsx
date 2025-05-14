"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FiatCryptoToggle from "../../FiatCryptoToggle";
import {CryptoCards} from "./CryptoCard";
import { CollectablesTab } from "./CollectablesCard";
import BorrowTab from "./BorrowCard";
import { DebtTransferCard } from "./DeptTransferCard";


export default function BalanceCard() {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState("assets");

  // Function to render the appropriate tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "assets":
        return <CryptoCards />;
      case "collectables":
        return <CollectablesTab />;
      // case "borrow":
      //   return <BorrowTab />;
      // case "debt-transfer":
      //   return <DebtTransferCard />;
      default:
        return <CryptoCards />;
    }
  };

  return (
    <div className="relative space-y-4 mx-auto md:w-[50%] w-[90%]">
      <div>
        <div className="lg:absolute top-0 -right-40 mb-4 lg:mb-0">
          <FiatCryptoToggle />
        </div>

        <div className="bg-[#141414] b-img text-white rounded-xl p-6 shadow-md relative overflow-hidden w-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/image/pattern.png"
            alt=""
            width={100}
            height={100}
          />
          <div className="text-sm relative z-10">Crypto Balance</div>
          <div className="text-3xl font-semibold relative z-10">$800.12</div>
          <div className="text-xs relative z-10">Last updated 38 secs ago</div>
        </div>
      </div>

      {/* Action Buttons (now working as tabs) */}
      <div className="grid text-white grid-cols-2 gap-2 w-full">
        <Button
          variant={activeTab === "assets" ? "active" : "outline"}
          className="w-full cursor-pointer bg-transparent"
          onClick={() => setActiveTab("assets")}
        >
          <Image src="/spend.svg" alt="" width={20} height={20} />
          Assets
        </Button>

        <Button
          variant={activeTab === "collectables" ? "active" : "outline"}
          className="w-full cursor-pointer bg-transparent"
          onClick={() => setActiveTab("collectables")}
        >
          <Image src="/AddMoney.svg" alt="" width={20} height={20} />
          Collectables
        </Button>

        {/* <Button
          variant={activeTab === "borrow" ? "active" : "outline"}
          className="w-full cursor-pointer bg-transparent"
          onClick={() => setActiveTab("borrow")}
        >
          <Image src="/borrow.svg" alt="" width={20} height={20} />
          Borrow
        </Button>

        <Button
          variant={activeTab === "debt-transfer" ? "active" : "outline"}
          className="w-full cursor-pointer bg-transparent"
          onClick={() => setActiveTab("debt-transfer")}
        >
          <Image src="/debt transfer.svg" alt="" width={20} height={20} />
          Debt Transfer
        </Button> */}
      </div>

      {/* Tab Content Area */}
      <div className="bg-[#141414] rounded-xl overflow-hidden">
        {renderTabContent()}
      </div>
    </div>
  );
}