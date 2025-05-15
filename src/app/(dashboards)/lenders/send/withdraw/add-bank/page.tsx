'use client';

import Image from 'next/image';
import Link from 'next/link';

const banks = [
  { name: 'GTBank', logo: '/gtbank.svg' },
  { name: 'First Bank', logo: '/first-bank.svg' },
  { name: 'Zenith Bank', logo: '/zenith-bank.svg' },
  { name: 'GTBank', logo: '/gtbank.svg' },
  { name: 'First Bank', logo: '/first-bank.svg' },
];

export default function SelectBank() {
  return (
    <div className="flex justify-center items-center px-4 md:px-0 py-8">
      <div className="w-full max-w-xl border rounded-md shadow-sm bg-white p-4 md:p-8">
        
        {/* Back Button */}
        <Link href="/lenders/send/withdraw/select-bank" className="flex items-center text-sm text-gray-600 mb-4 hover:underline">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-1" />
          Back
        </Link>

        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold text-center mb-6">Select your bank</h2>

        {/* Search Input */}
        <div className="flex items-center border rounded-md px-3 py-2 mb-6 bg-gray-50">
          <Image src="/search.svg" alt="Search" width={16} height={16} className="mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Bank List */}
        <div className="space-y-4">
          {banks.map((bank, index) => (
            <Link
              key={index}
              href="/lenders/send/withdraw/bank-details"
              className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Image src={bank.logo} alt={bank.name} width={32} height={32} className="rounded-full" />
                <span className="font-medium text-sm md:text-base">{bank.name}</span>
              </div>
              <Image src="/arrow-right.svg" alt="Next" width={16} height={16} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
