'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function WithdrawFundsPage() {
  const router = useRouter()
  const [amount, setAmount] = useState('')
  const balance = 10075854.02

  const formatAmount = (value: string) => {
    const num = value.replace(/[^\d]/g, '')
    return num ? `₦${Number(num).toLocaleString()}` : ''
  }

  const parseAmount = (formatted: string) => {
    return Number(formatted.replace(/[^\d.]/g, ''))
  }

  const handleMaxClick = () => {
    setAmount(`₦${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`)
  }

  const handleContinue = () => {
    if (parseAmount(amount) > 50) {
      router.push('/lenders/send/withdraw/select-bank')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md border rounded-md bg-white shadow-sm py-8 px-6">
        {/* Back Link */}
        <Link href="/lenders/send" className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-2" />
          Back
        </Link>

        {/* Title */}
        <h2 className="text-lg font-semibold text-center">Withdraw funds</h2>
        <p className="text-sm text-center text-muted-foreground mt-1">
          Available balance: NGN {balance.toFixed(2)}
        </p>

        {/* Input card */}
        <div className="bg-white border rounded-xl p-6 mt-6 shadow-sm">
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            Amount
          </label>
          <div className="relative">
            <Input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(formatAmount(e.target.value))}
              placeholder="₦0.00"
              className="pr-14"
            />
            <button
              type="button"
              onClick={handleMaxClick}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600"
            >
              Max
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleContinue}
            disabled={parseAmount(amount) <= 50}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
