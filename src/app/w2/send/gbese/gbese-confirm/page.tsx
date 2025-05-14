'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GbeseConfirm() {
  const router = useRouter();
  const [note, setNote] = useState('');
  const [amount, setAmount] = useState<number>(10000); // Default editable amount
  const initialBalance = 40000.12;

  const handleSend = () => {
    router.push('/w2/send/gbese/gbese-success');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(parseFloat(value || '0'));
  };

  const remainingBalance = (initialBalance - amount).toFixed(2);
  const formattedAmount = amount.toLocaleString(undefined, { minimumFractionDigits: 2 });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#f9f9f9]">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-6 relative">
        {/* Back Link */}
        <Link href="/w2/send/gbese" className="flex items-center text-sm text-muted-foreground mb-4">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-1" />
          Back
        </Link>

        {/* Card Content */}
        <div className="bg-white p-6 rounded-xl text-center">
          {/* Recipient Avatar and Email */}
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/user.svg"
              alt="Recipient Avatar"
              width={48}
              height={48}
              className="rounded-full mb-2"
            />
            <p className="text-sm">Salemonah123@gmail.com</p>
          </div>

          {/* Editable Amount */}
          <input
            type="text"
            inputMode="decimal"
            className="w-full text-center text-blue-600 text-xl font-bold bg-transparent border-b border-gray-200 mb-4 focus:outline-none"
            value={amount}
            onChange={handleAmountChange}
          />

          {/* Optional Note */}
          <div className="mb-4">
            <label className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
              <Image src="/pen.svg" alt="Note" width={14} height={14} />
              <span>Add a note</span>
              <span className="text-xs">(Optional)</span>
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write a short note..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>

          {/* Details */}
          <div className="text-left text-sm text-muted-foreground space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image src="/card-tick.svg" alt="Wallet" width={14} height={14} />
                <span className="text-blue-600">You’re sending with</span>
              </div>
              <span className="text-right text-black">Gbese</span>
            </div>
            <div className="flex justify-between pl-5">
              <span>Balance</span>
              <span>{initialBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-1">
                <Image src="/card-tick.svg" alt="Pay" width={14} height={14} />
                <span className="text-blue-600">You’ll pay</span>
              </div>
            </div>
            <div className="flex justify-between pl-5">
              <span>Balance</span>
              <span>{parseFloat(remainingBalance) >= 0 ? remainingBalance : 'Insufficient'}</span>
            </div>
          </div>

          {/* Buttons */}
          <button
            onClick={handleSend}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-3"
            disabled={parseFloat(remainingBalance) < 0}
          >
            Send Payment
          </button>
          <Link
            href="/w2/dashboard"
            className="block w-full text-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
