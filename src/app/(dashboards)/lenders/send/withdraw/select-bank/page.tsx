'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const banks = [
  {
    name: 'GTBank',
    accountName: 'Ubuara Dorothy',
    logo: '/gtbank.svg',
  },
  {
    name: 'First Bank',
    accountName: 'Akpan Joseph',
    logo: '/first-bank.svg',
  },
  {
    name: 'Zenith Bank',
    accountName: 'Divine Tochi',
    logo: '/zenith-bank.svg',
  },
]

export default function SelectBankPage() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md border rounded-md bg-white shadow-sm py-8 px-6">
        {/* Back Link */}
        <Link href="/lenders/send/withdraw" className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-2" />
          Back
        </Link>

        {/* Title */}
        <h2 className="text-lg font-semibold text-center">Select a bank</h2>
        <Link
          href="/lenders/send/withdraw/add-bank"
          className="text-sm text-center text-blue-600 block mt-1 hover:underline"
        >
          + Add a bank account
        </Link>

        {/* Bank List */}
        <div className="bg-white border rounded-xl p-4 mt-6 shadow-sm">
          {banks.map((bank, idx) => (
            <Link
              href="/lenders/send/withdraw/review-details"
              key={idx}
              className="flex items-center justify-between py-3 border-b last:border-none hover:bg-gray-50 px-2 rounded"
            >
              <div className="flex items-center gap-3">
                <Image src={bank.logo} alt={bank.name} width={32} height={32} className="rounded-full" />
                <div>
                  <p className="text-sm font-medium">{bank.name}</p>
                  <p className="text-xs text-gray-500">{bank.accountName}</p>
                </div>
              </div>
              <Image src="/arrow-right.svg" alt="Go" width={16} height={16} />
            </Link>
          ))}
        </div>

        {/* See More */}
        <div className="flex justify-center mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">See More</Button>
        </div>
      </div>
    </div>
  )
}
