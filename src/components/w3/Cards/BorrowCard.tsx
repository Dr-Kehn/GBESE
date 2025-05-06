"use client";

import { useState } from "react";
import Image from "next/image";

export default function BorrowTab() {
  const [loanAmount, setLoanAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [repaymentTerm, setRepaymentTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      loanAmount,
      purpose,
      repaymentTerm,
      monthlyPayment
    });
  };

  return (
    <div className="py-6 px-4 md:px-6 rounded-xl text-white">    
      <div className="max-w-lg mx-auto border border-gray-800 rounded-3xl p-8">
        {/* Form Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Loan</h2>
          <p className="text-gray-500">Basic Personal Information</p>
        </div>

        {/* Loan Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Loan Amount */}
          <div>
            <label htmlFor="loanAmount" className="block text-gray-300 mb-2">
              Loan Amount
            </label>
            <input
              id="loanAmount"
              type="text"
              className="w-full bg-gray-900 rounded-md border border-gray-700 p-3 text-white placeholder-gray-500"
              placeholder="e.g ₦200,000, ₦500,000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>

          {/* Purpose of Loan */}
          <div>
            <label htmlFor="purpose" className="block text-gray-300 mb-2">
              Purpose of Loan
            </label>
            <input
              id="purpose"
              type="text"
              className="w-full bg-gray-900 rounded-md border border-gray-700 p-3 text-white placeholder-gray-500"
              placeholder="e.g School Fees, House Renovation"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>

          {/* Preferred Repayment Term */}
          <div>
            <label htmlFor="repaymentTerm" className="block text-gray-300 mb-2">
              Preferred Repayment Term
            </label>
            <input
              id="repaymentTerm"
              type="text"
              className="w-full bg-gray-900 rounded-md border border-gray-700 p-3 text-white placeholder-gray-500"
              placeholder="e.g 6 Months, 12 Months"
              value={repaymentTerm}
              onChange={(e) => setRepaymentTerm(e.target.value)}
            />
          </div>

          {/* Preferred Monthly Payment */}
          <div>
            <label htmlFor="monthlyPayment" className="block text-gray-300 mb-2">
              Preferred Monthly Payment <span className="text-gray-500">(Optional)</span>
            </label>
            <input
              id="monthlyPayment"
              type="text"
              className="w-full bg-gray-900 rounded-md border border-gray-700 p-3 text-white placeholder-gray-500"
              placeholder="e.g ₦50,000/month"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}