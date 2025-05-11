"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link"; 
import Image from "next/image";

const ReviewDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const recipient = searchParams.get("recipient") || "";
  const accountNumber = searchParams.get("accountNumber") || "";
  const bankName = searchParams.get("bankName") || "";
  const amount = searchParams.get("amount") || "";

  const handleBack = () => {
    router.back();
  };

  const handleConfirm = () => {
    router.push('/w2/send/withdraw/success'); // Navigate to success page
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-24">
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm border">
      <div className="mb-4 flex items-center space-x-2">
        <button
          className="text-sm text-gray-500 hover:underline flex items-center gap-2"
          onClick={handleBack}
        >
          <Image
            src="/arrow-left.svg"
            alt="Back"
            width={20}
            height={20}
            className="inline"
          />
          <span>Back</span>
        </button>
      </div>
        <h2 className="text-xl font-semibold text-center mb-1">Review Details</h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Confirm the recipient and amount
        </p>

        <div className="bg-gray-100 p-4 rounded-lg space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Recipient name</span>
            <span className="font-medium text-right">{recipient}</span>
          </div>
           <div className="flex justify-between">
            <span className="text-gray-500">Account number</span>
            <span className="font-medium text-right">{accountNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Bank name</span>
            <span className="font-medium text-right">{bankName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Amount</span>
            <span className="font-medium text-right">NGN {amount} </span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-500">You Receive</span>
            <span className="font-semibold text-blue-600 text-right">NGN {amount}</span>
          </div>
        </div>

         <p className="text-center text-xs text-gray-500 mt-4">
            Powered by Gbese LTD <Link href="/w2/account/legal/terms"><span className="text-[#0070f3] underline cursor-pointer">Terms and Condition</span></Link> apply
          </p>

          <div className="flex justify-center mt-4">
            <button 
              onClick={handleConfirm} 
              className="bg-blue-600 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Confirm
            </button>
          </div>
      </div>
    </div>
  );
};

export default ReviewDetails;