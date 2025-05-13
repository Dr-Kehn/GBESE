'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function TwoFactorSetup() {
  const [code, setCode] = useState('');

  return (
    <div className="min-h-screen bg-[#F9FAFB]">

      {/* Page Content */}
      <div className="max-w-md mx-auto px-4 py-10">
        {/* Back Link */}
        <div className="mb-6 flex items-center space-x-2">
          <Link href="/lenders/account/security/two-factor" className="flex items-center text-sm text-gray-600 hover:text-gray-800">
            <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-1" />
            <span>Back</span>
          </Link>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow p-6">
          {/* Shield Icon */}
          <div className="flex justify-center mb-4">
            <Image src="/shield-security.svg" alt="Shield" width={32} height={32} />
          </div>

          <h2 className="text-xl font-semibold text-center mb-2">Protect your account with 2-step verification</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Each time you log in, you’ll use a one-time code in addition to your password. Choose how you’ll get your code.
          </p>

          <div className="text-sm text-gray-800 mb-4">
            <p className="font-semibold">Step 1:</p>
            <p className="mb-3">Scan the QR code below or manually type the secret key into your authenticator app.</p>

            {/* QR Code and Secret Key */}
            <div className="flex flex-col items-center mb-6">
              <Image src="/qr-code.png" alt="QR Code" width={160} height={160} />
              <p className="mt-2 font-mono text-center text-base tracking-widest text-gray-700">2DDb IAJ6 HSGQ KHJB</p>
            </div>

            <p className="font-semibold">Step 2:</p>
            <p>Enter the 6-digit code you see in your authenticator app.</p>
          </div>

          {/* Input + Confirm Button */}
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Authenticate Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button className="w-full bg-[#0D60D8] cursor-pointer hover:bg-blue-600">Confirm</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
