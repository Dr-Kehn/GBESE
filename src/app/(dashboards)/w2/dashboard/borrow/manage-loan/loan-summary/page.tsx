'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { toast } from 'sonner'

type PaymentStatus = 'Paid' | 'Outstanding' | 'Not Paid'

interface Installment {
  month: string
  amount: string
  status: PaymentStatus
}

const initialInstallments: Installment[] = [
  { month: 'Month 1', amount: '₦10,500.00', status: 'Paid' },
  { month: 'Month 2', amount: '₦10,500.00', status: 'Paid' },
  { month: 'Month 3', amount: '₦10,500.00', status: 'Paid' },
  { month: 'Month 4', amount: '₦10,500.00', status: 'Outstanding' },
  { month: 'Month 5', amount: '₦10,500.00', status: 'Not Paid' },
  { month: 'Month 6', amount: '₦10,500.00', status: 'Not Paid' },
]

export default function LoanSummary() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [installments, setInstallments] = useState(initialInstallments)
  const [pinDialogOpen, setPinDialogOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [pin, setPin] = useState('')

  const handlePayClick = (index: number) => {
    setSelectedIndex(index)
    setPin('')
    setPinDialogOpen(true)
  }

  const handlePayment = () => {
    const correctPin = '1234'
    const hasBalance = true // simulate balance

    if (pin !== correctPin) {
      toast.error('Incorrect PIN')
      return
    }

    if (!hasBalance) {
      toast.error('Insufficient balance')
      return
    }

    if (selectedIndex !== null) {
      const updated = [...installments]
      updated[selectedIndex] = {
        ...updated[selectedIndex],
        status: 'Paid',
      }
      setInstallments(updated)
      toast.success('Payment successful')
    }

    setPinDialogOpen(false)
  }

  const statusColor = (status: PaymentStatus) => {
    switch (status) {
      case 'Paid':
        return 'text-green-600'
      case 'Outstanding':
        return 'text-red-600'
      case 'Not Paid':
        return 'text-yellow-500'
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
      <div className="mb-6 flex items-center space-x-2">
        <Link href="/w2/dashboard/borrow/manage-loan" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
          <span>Back</span>
        </Link>
      </div>

      <h2 className="text-xl font-medium text-center mb-6">Loan Summary</h2>

      <div className="bg-white border rounded-xl shadow-sm p-4 space-y-4">
        <div className="flex justify-between items-center px-4 py-3 border rounded-md">
          <span className="text-gray-700">Loan Creator</span>
          <span className="font-medium text-gray-900">Ubuara Dorothy</span>
        </div>
        <div className="flex justify-between items-center px-4 py-3 border rounded-md">
          <span className="text-gray-700">Loan Amount</span>
          <span className="font-medium text-gray-900">₦60,000.00</span>
        </div>
        <div className="flex justify-between items-center px-4 py-3 border rounded-md">
          <span className="text-gray-700">Date Collected</span>
          <span className="font-medium text-gray-900">05/24/2025</span>
        </div>

        {/* Repayment Plan */}
        <div className="relative">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex justify-between items-center px-4 py-3 border rounded-md cursor-pointer"
          >
            <span className="text-gray-700">Repayment Plan</span>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">6 Months</span>
              <Image
                src="/arrow-down.svg"
                alt="Dropdown"
                width={16}
                height={16}
                className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : 'rotate-0'}`}
              />
            </div>
          </div>

          {showDropdown && (
            <div className="mt-4 border rounded-lg overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-blue-200 text-gray-800">
                  <tr>
                    <th className="px-4 py-2">Month</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {installments.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2">{item.month}</td>
                      <td className="px-4 py-2">{item.amount}</td>
                      <td className={`px-4 py-2 font-medium ${statusColor(item.status)}`}>{item.status}</td>
                      <td className="px-4 py-2 text-right">
                        <Button
                          variant={item.status === 'Paid' ? 'ghost' : 'default'}
                          className={item.status === 'Paid' ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white'}
                          disabled={item.status === 'Paid'}
                          onClick={() => handlePayClick(index)}
                        >
                          Pay Now
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* PIN Dialog */}
      <Dialog open={pinDialogOpen} onOpenChange={setPinDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Enter Transaction PIN</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <Input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter 4-digit PIN"
              maxLength={4}
            />
          </div>
          <DialogFooter>
            <Button onClick={handlePayment}>Confirm Payment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
