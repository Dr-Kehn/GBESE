'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import TopNavbar from '@/components/layout/TopNavbar'

const lendersData = [
  {
    name: 'Salem Onah',
    price: '₦ 50,000 - 100,000',
    duration: '1 - 2 Weeks',
    rate: '1% Interest Rate',
  },
  {
    name: 'Kenechukwu Ezeokpo',
    price: '₦ 100,000 - 500,000',
    duration: '6 Months',
    rate: '5% Interest Rate',
  },
  {
    name: 'Praise Lawrence',
    price: '₦ 100,000 - 150,000',
    duration: '2 Months',
    rate: '2% Interest Rate',
  },
  {
    name: 'Uchechukwu Fejiokwu',
    price: '₦ 10,000 - 50,000',
    duration: '1 Month',
    rate: '1% Interest Rate',
  },
  {
    name: 'Chukwuebuka Ifeora',
    price: '₦ 5,000 - 20,000',
    duration: '1 Month',
    rate: '1% Interest Rate',
  },
  {
    name: 'John Iweh',
    price: '₦ 10,000 - 50,000',
    duration: '1 Month',
    rate: '1% Interest Rate',
  },
  {
    name: 'Anthony Okafor',
    price: '₦ 50,000 - 100,000',
    duration: '1 - 2 Months',
    rate: '1% Interest Rate',
  },
  {
    name: 'Ann Ivuno',
    price: '₦ 20,000 - 50,000',
    duration: '1 Month',
    rate: '1% Interest Rate',
  },
]

export default function MarketplacePage() {
  const pathname = usePathname()
  const activeTab = pathname === '/marketplace/debtors' ? 'debtors' : 'lenders'

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <TopNavbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 px-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1E58FF] mb-3 md:mb-0">
            Lenders Marketplace
          </h1>
          <div className="flex gap-2">
            <Link href="/marketplace">
              <Button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'lenders'
                    ? 'bg-balance-card text-white'
                    : 'text-gray-500 hover:bg-balance-card hover:text-white'
                }`}
              >
                Lenders
              </Button>
            </Link>
            <Link href="/marketplace/debtors">
              <Button
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

        {activeTab === 'lenders' && (
          <Card className="rounded-xl overflow-x-auto">
            <CardContent className="p-0">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-[#EFF3FD] text-gray-700">
                  <tr>
                    <th className="px-6 py-3">Lenders</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Payment Duration</th>
                    <th className="px-6 py-3">Interest Rate</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {lendersData.map((lender, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{lender.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{lender.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{lender.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{lender.rate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href="/dashboard/borrow/loan">
                          <Button
                            className="bg-white border text-[#A1A1A1] hover:bg-balance-card hover:text-white transition-colors"
                            variant="outline"
                          >
                            Borrow Money
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        )}

        {/* Pagination (static for now) */}
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
    </div>
  )
}
