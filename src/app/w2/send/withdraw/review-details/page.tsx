'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function ReviewDetailsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md border rounded-md bg-white shadow-sm py-8 px-6">
        {/* Back */}
        <Link href="/w2/send/withdraw/select-bank" className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-2" />
          Back
        </Link>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold">Review details</h2>
          <p className="text-sm text-gray-400 mt-1">Send ₦75,000.00</p>
        </div>

        {/* Details Box */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <div className="flex justify-between py-2 border-b text-sm">
            <span className="text-gray-700">Recipient Name</span>
            <span className="font-medium">Ubuara Dorothy</span>
          </div>
          <div className="flex justify-between py-2 border-b text-sm">
            <span className="text-gray-700">Account Number</span>
            <span className="font-medium">7034758922</span>
          </div>
          <div className="flex justify-between py-2 border-b text-sm">
            <span className="text-gray-700">Bank Name</span>
            <span className="font-medium">GTBank</span>
          </div>
          <div className="flex justify-between py-2 border-b text-sm">
            <span className="text-gray-700">Amount</span>
            <span className="font-medium">NGN 75,000.00</span>
          </div>
          <div className="flex justify-between py-2 text-sm">
            <Link href="#" className="text-blue-600 hover:underline">They Receive</Link>
            <span className="text-blue-600 font-medium">NGN 75,000.00</span>
          </div>
        </div>

        {/* Terms and Conditions */}
        <p className="text-xs text-center text-gray-400 mt-6">
          Powered by Gbese LTD{" "}
          <Link href="/w2/send/withdraw/review-details/terms2" className="text-blue-600 hover:underline">
            Terms and Condition
          </Link>{" "}
          apply
        </p>

        {/* Confirm Button */}
        <div className="mt-6 flex justify-center">
          <Link href="/w2/send/withdraw/success">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Confirm
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
