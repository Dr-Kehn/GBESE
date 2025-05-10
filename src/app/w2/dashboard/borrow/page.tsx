"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import TopNavbar from "@/components/layout/TopNavbar";
import BalanceCard from "@/components/dashboard/BalanceCard";

export default function BorrowOptionsCard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Balance Card */}
      <BalanceCard />
      <div className="max-w-4xl mx-auto p-4 sm:p-6">

        {/* Borrow Options */}
        <div className="mt-4 rounded-xl border border-gray-200 p-6 bg-white shadow-sm space-y-4">
          {/* Overdraft - Disabled */}
          <div
            onClick={() => router.push("/w2/manage-loan")}
            className="bg-blue-600 p-4 rounded-lg text-white cursor-pointer hover:bg-blue-700 transition">
            <p className="font-semibold">Manage Loan</p>
            <p className="text-sm">
              Manage all your loans. Pay off your loan.
            </p>
          </div>

          {/* Loan - Active */}
          <div
            onClick={() => router.push("/w2/marketplace")}
            className="bg-blue-600 p-4 rounded-lg text-white cursor-pointer hover:bg-blue-700 transition"
          >
            <p className="font-semibold">Loan</p>
            <p className="text-sm">
              Apply for a low interest loan. Get money in minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
