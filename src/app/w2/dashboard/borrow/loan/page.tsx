"use client";

import { useRouter } from "next/navigation";
import TopNavbar from "@/components/layout/TopNavbar";
import BalanceCard from "@/components/dashboard/BalanceCard";

export default function LoanForm() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <TopNavbar />

      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Balance Card */}
        <BalanceCard />

        {/* Back */}
        <button
          onClick={() => router.push("/w2/dashboard/borrow")}
          className="text-sm text-gray-500 hover:text-gray-700 mt-4 inline-block"
        >
          &lt; Back
        </button>

        {/* Form Container */}
        <div className="mt-6 border border-gray-200 rounded-xl bg-white p-6 sm:p-10">
          <h2 className="text-center text-xl font-bold text-gray-800">Loan</h2>
          <p className="text-center text-gray-400 mb-6">
            Basic Personal Information
          </p>

          <form className="space-y-4">
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Loan Amount
              </label>
              <input
                type="text"
                placeholder="₦ 200,000, ₦ 600,000"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Purpose of Loan */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Purpose of Loan
              </label>
              <input
                type="text"
                placeholder="e.g. School Fees, House Renovation"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Repayment Term */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Repayment Term
              </label>
              <input
                type="text"
                placeholder="e.g. 6 Months, 12 Months"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Monthly Payment */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Monthly Payment (Optional)
              </label>
              <input
                type="text"
                placeholder="₦ 50,000/month"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Consent */}
            <div className="flex items-start">
              <input
                id="consent"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                I consent to the <span className="text-blue-600 underline">Credit Loan</span> and Gbese’s{" "}
                <span className="text-blue-600 underline">Terms & Conditions</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
