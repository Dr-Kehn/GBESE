'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BankDetails() {
  const router = useRouter();
  const [accountNumber, setAccountNumber] = useState('');

  const handleNext = () => {
    if (accountNumber.length === 10) {
      router.push('/w2/send/withdraw/confirm');
    }
  };

  return (
    <div className="flex justify-center items-center px-4 md:px-0 py-12">
      <div className="w-full max-w-md border rounded-md bg-white shadow-sm p-6 md:p-10">
        
        {/* Back Link */}
        <Link href="/w2/send/withdraw/add-bank" className="flex items-center text-sm text-gray-600 mb-4 hover:underline">
            <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-1" />
            Back
        </Link>

        {/* Page Title */}
        <h2 className="text-center text-lg md:text-xl font-semibold mb-8">
          Bank account details
        </h2>

        {/* Bank Selection Row */}
        <div className="flex items-center justify-between border rounded-md px-4 py-3 mb-6">
          <div className="flex items-center gap-3">
            <Image
              src="/gtbank.svg" // Replace with your GTBank logo path
              alt="GTBank"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-sm">GTBank</p>
              <p className="text-xs text-gray-500">Edit Selection</p>
            </div>
          </div>

          <Link href="/w2/send/withdraw/add-bank">
            <Image
              src="/edit.svg" // Replace with your edit icon path
              alt="Edit"
              width={18}
              height={18}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Account Number Input */}
        <div className="mb-6">
          <label htmlFor="accountNumber" className="block text-sm font-medium mb-2">
            Amount Number
          </label>
          <input
            type="text"
            id="accountNumber"
            placeholder="Enter bank account number"
            maxLength={10}
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value.replace(/\D/, ''))}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={accountNumber.length !== 10}
          className={`w-full text-white cursor-pointer px-6 py-2 text-sm rounded transition ${
            accountNumber.length === 10 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
