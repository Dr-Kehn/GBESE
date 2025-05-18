"use client";

import { useRouter } from "next/navigation";
import BalanceCard from "@/components/dashboard/BalanceCard";
import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";

export default function BorrowOptionsCard() {
  const router = useRouter();

  const { data: user, isLoading, error, isSuccess } = useGetCurrentUserQuery(null);
  
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      );
    }
    if (error) {
      return (
        <div className="flex items-center justify-center h-screen">
          <p className="text-red-500">Error: Failed to load Data</p>
        </div>
      );
    }
    if (isSuccess && user?.role !== "user") {
      return (
        <div className="flex items-center justify-center h-screen">
          <p className="text-red-500">Unauthorized</p>
        </div>
      );
    }

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Balance Card */}
      <BalanceCard user={user!} />
      <div className="max-w-4xl mx-auto p-4 sm:p-6">

        {/* Borrow Options */}
        <div className="mt-4 rounded-xl border border-gray-200 p-6 bg-white shadow-sm space-y-4">
          {/* Overdraft - Disabled */}
          <div
            onClick={() => router.push("/w2/dashboard/borrow/manage-loan")}
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
