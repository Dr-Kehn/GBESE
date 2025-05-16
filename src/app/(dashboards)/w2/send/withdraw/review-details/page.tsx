'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'




type WithdrawalProps = {
  withdrawalData: {
    recipientName: string;
    accountNumber: string;
    bankName: string;
    amount: number;
    currency: string;
  };
};

export default function ReviewDetailsPage({ withdrawalData }: WithdrawalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConfirm = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(withdrawalData),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || 'Withdrawal failed');
      }

      router.push('/w2/send/withdraw/success');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md border rounded-md bg-white shadow-sm py-8 px-6">
        {/* Back */}
        <Link href="/w2/send/withdraw/select-bank" className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-2" />
          Back
        </Link>git

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold">Review details</h2>
          <p className="text-sm text-gray-400 mt-1">Send ₦{withdrawalData.amount.toLocaleString()}.00</p>
        </div>

        {/* Details Box */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <div className="flex justify-between py-2 border-b text-sm">
            <span className="text-gray-700">Recipient Name</span>
            <span className="font-medium">{withdrawalData.recipientName}</span>
          </div>
          <div className="flex justify-between py-2 border-b text-sm">
            <span className="text-gray-700">Account Number</span>
            <span className="font-medium">{withdrawalData.accountNumber}</span>
          </div>
          <div className="flex justify-between py-2 border-b text-sm">
            <span className="text-gray-700">Bank Name</span>
            <span className="font-medium">{withdrawalData.bankName}</span>
          </div>
          <div className="flex justify-between py-2 border-b text-sm">
            <span className="text-gray-700">Amount</span>
            <span className="font-medium">NGN {withdrawalData.amount.toLocaleString()}.00</span>
          </div>
          <div className="flex justify-between py-2 text-sm">
            <Link href="#" className="text-blue-600 hover:underline">They Receive</Link>
            <span className="text-blue-600 font-medium">NGN {withdrawalData.amount.toLocaleString()}.00</span>
          </div>
        </div>

         {/* Error */}
         {error && <p className="text-red-600 text-sm text-center mt-4">{error}</p>}

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
          {/* <Link href="/w2/send/withdraw/success"> */}
            <Button onClick={handleConfirm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            disabled={loading}>
              {loading ? 'Processing...' : 'Confirm'}
            </Button>
          </Link>
        </div>
      </div>
  )
};
