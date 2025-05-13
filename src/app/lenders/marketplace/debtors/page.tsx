'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import TopNavbar from '@/components/layout/TopNavbar'
import PinVerificationModal from '@/components/PinVerificationModal'

const debtorsData = [
  {
    name: 'Dorothy Ubuara',
    price: '₦ 40,000',
    date: 'September - January',
    report: 'Medical bill',
    orders: '4 debt orders',
    score: '420 credit score',
  },
  {
    name: 'Divine Okorie',
    price: '₦ 40,000',
    date: 'September - January',
    report: 'Medical bill',
    orders: '4 debt orders',
    score: '420 credit score',
  },
  {
    name: 'Blessing Adedokun',
    price: '₦ 40,000',
    date: 'September - January',
    report: 'Medical bill',
    orders: '4 debt orders',
    score: '420 credit score',
  },
  {
    name: 'Blessing Okey',
    price: '₦ 40,000',
    date: 'September - January',
    report: 'Medical bill',
    orders: '4 debt orders',
    score: '420 credit score',
  },
  {
    name: 'Okeke Mmesoma',
    price: '₦ 40,000',
    date: 'September - January',
    report: 'Medical bill',
    orders: '4 debt orders',
    score: '420 credit score',
  },
  {
    name: 'Prosper Obodo',
    price: '₦ 40,000',
    date: 'September - January',
    report: 'Medical bill',
    orders: '4 debt orders',
    score: '420 credit score',
  },
  {
    name: 'Suraj Ikioda',
    price: '₦ 40,000',
    date: 'September - January',
    report: 'Medical bill',
    orders: '4 debt orders',
    score: '420 credit score',
  },
  {
    name: 'Naemeeka Uzochukwu',
    price: '₦ 40,000',
    date: 'September - January',
    report: 'Medical bill',
    orders: '4 debt orders',
    score: '420 credit score',
  },
]

export default function DebtorsMarketplacePage() {
  const pathname = usePathname()
  const activeTab = pathname === '/lenders/marketplace/debtors' ? 'debtors' : 'lenders'

  const [showPinModal, setShowPinModal] = useState(false)
  const [selectedDebtor, setSelectedDebtor] = useState<{
    name: string
    price: string
    date: string
    report: string
    orders: string
    score: string
  } | null>(null)

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handlePayClick = (debtor: any) => {
    setSelectedDebtor(debtor)
    setShowPinModal(true)
  }

  const handleCloseModal = () => {
    setShowPinModal(false)
    setSelectedDebtor(null)
    setError('')
  }

  const handleSubmitPin = (pin: string) => {
    setIsLoading(true)
    // Simulate verification delay
    setTimeout(() => {
      if (pin === '1234') {
        console.log(`PIN verified for ${selectedDebtor?.name}:`, pin)
        handleCloseModal()
      } else {
        setError('Incorrect PIN. Try again.')
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 px-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1E58FF] mb-3 md:mb-0">
            Debtors Marketplace is coming soon
          </h1>
          <div className="flex gap-2">
            <Link href="/lenders/marketplace">
              <Button
                variant="outline"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'lenders'
                    ? 'bg-balance-card text-white'
                    : 'text-gray-500 hover:bg-balance-card hover:text-white'
                }`}
              >
                Lenders
              </Button>
            </Link>
            <Link href="/lenders/marketplace/debtors">
              <Button
                variant="outline"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'debtors'
                    ? 'bg-balance-card text-white'
                    : 'text-gray-500 hover:bg-balance-card hover:text-white'
                }`}
              >
                Debtors
              </Button>
            </Link>
          </div>
        </div>

        <Card className="rounded-xl overflow-x-auto">
          <CardContent className="p-0">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#EFF3FD] text-gray-700">
                <tr>
                  <th className="px-6 py-3">Advertisers</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Payment Date</th>
                  <th className="px-6 py-3">Report</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {debtorsData.map((debtor, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{debtor.name}</div>
                      <div className="text-xs text-gray-500">
                        {debtor.orders} &nbsp; {debtor.score}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{debtor.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{debtor.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{debtor.report}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button
                        className="text-white bg-[#1E58FF] hover:bg-[#174edb]"
                      >
                        Pay Debt
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mt-6">
          <Button variant="outline" size="sm">
            &larr; Previous
          </Button>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="px-2 py-1 rounded bg-[#1E58FF] text-white">1</span>
            <span className="cursor-pointer">2</span>
            <span className="cursor-pointer">3</span>
            <span>...</span>
            <span className="cursor-pointer">12</span>
          </div>
          <Button variant="outline" size="sm">
            Next &rarr;
          </Button>
        </div>
      </div>

      {showPinModal && selectedDebtor && (
        <PinVerificationModal
          isOpen={showPinModal}
          onClose={handleCloseModal}
          onSubmit={handleSubmitPin}
          debtorName={selectedDebtor.name}
          amount={parseInt(selectedDebtor.price.replace(/[^\d]/g, ''))}
          error={error}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}
