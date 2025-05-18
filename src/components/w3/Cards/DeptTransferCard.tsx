"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PinVerificationModal from "@/components/PinVerificationModal";

const debtorsData = [
  {
    name: "Dorothy Ubuara",
    price: "₦ 40,000",
    date: "September - January",
    report: "Medical bill",
    orders: "4 debt orders",
    score: "420 credit score",
  },
  {
    name: "Divine Okorie",
    price: "₦ 40,000",
    date: "September - January",
    report: "Medical bill",
    orders: "4 debt orders",
    score: "420 credit score",
  },
  {
    name: "Blessing Adedokun",
    price: "₦ 40,000",
    date: "September - January",
    report: "Medical bill",
    orders: "4 debt orders",
    score: "420 credit score",
  },
  {
    name: "Blessing Okey",
    price: "₦ 40,000",
    date: "September - January",
    report: "Medical bill",
    orders: "4 debt orders",
    score: "420 credit score",
  },
  {
    name: "Okeke Mmesoma",
    price: "₦ 40,000",
    date: "September - January",
    report: "Medical bill",
    orders: "4 debt orders",
    score: "420 credit score",
  },
  {
    name: "Prosper Obodo",
    price: "₦ 40,000",
    date: "September - January",
    report: "Medical bill",
    orders: "4 debt orders",
    score: "420 credit score",
  },
  {
    name: "Suraj Ikioda",
    price: "₦ 40,000",
    date: "September - January",
    report: "Medical bill",
    orders: "4 debt orders",
    score: "420 credit score",
  },
  {
    name: "Naemeeka Uzochukwu",
    price: "₦ 40,000",
    date: "September - January",
    report: "Medical bill",
    orders: "4 debt orders",
    score: "420 credit score",
  },
];

export const DebtTransferCard = () => {
  const pathname = usePathname();
  const activeTab = pathname === "/marketplace/debtors" ? "debtors" : "lenders";

  const [showPinModal, setShowPinModal] = useState(false);
  const [selectedDebtor, setSelectedDebtor] = useState<{
    name: string;
    price: string;
    date: string;
    report: string;
    orders: string;
    score: string;
  } | null>(null);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePayClick = (debtor: any) => {
    setSelectedDebtor(debtor);
    setShowPinModal(true);
  };

  const handleCloseModal = () => {
    setShowPinModal(false);
    setSelectedDebtor(null);
    setError("");
  };

  const handleSubmitPin = (pin: string) => {
    setIsLoading(true);
    // Simulate verification delay
    setTimeout(() => {
      if (pin === "1234") {
        console.log(`PIN verified for ${selectedDebtor?.name}:`, pin);
        handleCloseModal();
      } else {
        setError("Incorrect PIN. Try again.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-[#141414] p-2">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Card className="rounded-xl overflow-x-auto bg-[#141414] border-gray-700">
          <CardContent className="p-0 border-gray-700">
            <table className="min-w-full text-sm text-left ">
              <thead className="text-white bg-[#262626]">
                <tr>
                  <th className="px-6 py-3">Advertisers</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Payment Date</th>
                  <th className="px-6 py-3">Report</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y text-gray-500 divide-gray-700">
                {debtorsData.map((debtor, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{debtor.name}</div>
                      <div className="text-xs text-gray-500">
                        {debtor.orders} &nbsp; {debtor.score}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {debtor.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {debtor.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {debtor.report}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button
                        className="bg-transparent"
                        onClick={() => handlePayClick(debtor)}
                        variant={"outline"}
                      >
                        Pay Debt
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mt-6">
          <Button variant="outline" size="sm">
            &larr; Previous
          </Button>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="px-2 py-1 rounded bg-[#1E58FF] text-white">1</span>
            <span className="cursor-pointer">2</span>
            <span className="cursor-pointer">3</span>
            <span>...</span>
            <span className="cursor-pointer">12</span>
          </div>
          <Button variant="outline" size="sm">
            Next &rarr;
          </Button>
        </div>
      </div>

      {showPinModal && selectedDebtor && (
        <PinVerificationModal
          isOpen={showPinModal}
          onClose={handleCloseModal}
          onSubmit={handleSubmitPin}
          debtorName={selectedDebtor.name}
          amount={parseInt(selectedDebtor.price.replace(/[^\d]/g, ""))}
          error={error}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
