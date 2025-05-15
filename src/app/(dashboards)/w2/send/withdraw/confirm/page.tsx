'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ConfirmBankDetails() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 md:py-16 min-h-screen">
      <div className="w-full max-w-md">
        <Link href="/w2/send/withdraw/bank-details" className="flex items-center mb-6 space-x-2">
          <Image src="/arrow-left.svg" alt="Back" width={20} height={20} />
          <span className="text-sm font-medium text-gray-700">Back</span>
        </Link>

        <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">Confirm details</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Please confirm you have provided the correct details. Providing the wrong information will cause delays with payment.
        </p>

        <div className="bg-white shadow-sm rounded-xl px-6 py-6 space-y-6">
          {/* Bank Account Details */}
          <div>
            <h3 className="flex justify-center text-sm font-semibold text-gray-500 mb-2">Bank Account Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm border-b">
                <span className="text-gray-800 font-medium">Bank name</span>
                <span className="text-gray-500">GTBank</span>
              </div>
              <div className="flex justify-between text-sm border-b">
                <span className="text-gray-800 font-medium">Account number</span>
                <span className="text-blue-600">0767587300</span>
              </div>
            </div>
          </div>

          {/* Beneficiary Details */}
          <div>
            <h3 className="flex justify-center text-sm font-semibold text-gray-500 mb-2">Beneficiary Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm border-b">
                <span className="text-gray-800 font-medium">First Name</span>
                <span className="text-gray-500">Divine</span>
              </div>
              <div className="flex justify-between text-sm border-b">
                <span className="text-gray-800 font-medium">Middle Name</span>
                <span className="text-gray-500">Tochukwu</span>
              </div>
              <div className="flex justify-between text-sm border-b">
                <span className="text-gray-800 font-medium">Last Name</span>
                <span className="text-gray-500">Okorie</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3 pt-4">
            <Link href="/w2/send/withdraw/success2">
              <Button className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700">Add Payment Method</Button>
            </Link>
            <Link href="/w2/send/withdraw/select-bank">
              <Button variant="outline" className="w-full cursor-pointer">Edit Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
