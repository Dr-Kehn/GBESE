'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import TopNavbar from '@/components/layout/TopNavbar'
import BalanceCard from '@/components/dashboard/BalanceCard'

const DebtTransferPage = () => {
  const router = useRouter()
  const activeTab: string = 'outgoing' // hardcoded, can be dynamic based on query

  const handleRoute = (path: string) => {
    router.push(path)
  }

  return (
    <div className="min-h-screen bg-muted px-4 md:px-12 pb-10">
      <TopNavbar />
      <div className="mt-6">
        <BalanceCard />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mt-6">
        <Button variant="outline" onClick={() => handleRoute('/dashboard/debt-transfer')}>
          Direct Debt Transfer
        </Button>
        <Button variant="outline" onClick={() => handleRoute('/dashboard/debt-transfer/My-Ads')}>
          My Ads
        </Button>
        <Button
            className="bg-blue-600 text-white"
            onClick={() => handleRoute('/dashboard/debt-transfer/Manage-Request')}>
          Manage Request
        </Button>
      </div>

      {/* Toggle */}
      <div className="flex mt-6 space-x-2">
        <Button
          variant={activeTab === 'incoming' ? 'default' : 'ghost'}
          onClick={() => handleRoute('/dashboard/debt-transfer/Manage-Request')}
        >
          Incoming
        </Button>
        <Button
          className="bg-blue-600 text-white"
          variant={activeTab === 'outgoing' ? 'default' : 'ghost'}
        >
          Outgoing
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white mt-4 rounded-xl overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-blue-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Receivers Name</th>
              <th className="px-4 py-3 font-semibold">Amount</th>
              <th className="px-4 py-3 font-semibold">Loan ID</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Dorothy Ubuara', amount: '₦ 40,000', loanId: 'September - January', status: 'Pending' },
              { name: 'Dorothy Ubuara', amount: '₦ 40,000', loanId: 'September - January', status: 'Declined' },
              { name: 'Dorothy Ubuara', amount: '₦ 40,000', loanId: 'September - January', status: 'Accepted' },
            ].map((item, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.loanId}</td>
                <td className="px-4 py-3">
                  {item.status === 'Pending' && (
                    <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-xs">Pending</span>
                  )}
                  {item.status === 'Declined' && (
                    <span className="text-red-500 border border-red-500 px-3 py-1 rounded-full text-xs">Declined</span>
                  )}
                  {item.status === 'Accepted' && (
                    <span className="text-blue-500 border border-blue-500 px-3 py-1 rounded-full text-xs">Accepted</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DebtTransferPage
