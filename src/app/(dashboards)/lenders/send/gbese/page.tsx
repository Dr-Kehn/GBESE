'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SendMoney() {
  const [recipient, setRecipient] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (recipient.trim() !== '') {
      router.push('/lenders/send/gbese/gbese-confirm');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#f9f9f9]">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-6 relative">
        {/* Back Link */}
        <Link href="/lenders/send" className="flex items-center text-sm text-muted-foreground mb-4">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-1" />
          Back
        </Link>

        {/* Content Box */}
        <div className="bg-white p-6 rounded-xl shadow-inner text-center">
          <h2 className="font-semibold text-lg mb-1">Send Money</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Available balance: NGN 10,895,000.02
          </p>

          {/* Input */}
          <input
            type="text"
            placeholder="Name, email or mobile number"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={!recipient.trim()}
            className="w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
