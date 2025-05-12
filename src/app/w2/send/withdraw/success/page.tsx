'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TransferSuccess() {
  return (
    <div className="flex justify-center items-center px-4 md:px-0 py-12">
      <div className="w-full max-w-md border rounded-md bg-white shadow-sm p-6 md:p-10 text-center">
        
        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold mb-8">Successful</h2>

        {/* Trophy Icon */}
        <div className="flex justify-center mb-6">
          <Image
            src="/trophy.svg" // Update this to your actual path
            alt="Success"
            width={80}
            height={80}
          />
        </div>

        {/* Message */}
        <p className="text-sm md:text-base text-gray-700 mb-6">
          Money Successfully Sent
        </p>

        {/* Home Button */}
        <Link href="/w2/dashboard">
          <button className="bg-blue-600 text-white px-6 py-2 text-sm rounded hover:bg-blue-700 transition">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
