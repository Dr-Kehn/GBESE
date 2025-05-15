'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GbeseSuccess() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md border rounded-2xl p-6 shadow-sm bg-white text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <Image
            src="/blue-check.svg" // update with your SVG path
            alt="Success"
            width={80}
            height={80}
          />
        </div>

        {/* Success Message */}
        <p className="text-base sm:text-lg text-gray-800 mb-8">
          You sent <span className="font-medium">10,000 naira</span> to{' '}
          <span className="font-medium">salemonah123@gmail.com</span>
        </p>

        {/* Send More Money Button */}
        <Link
          href="/w2/dashboard"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 rounded-lg transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
