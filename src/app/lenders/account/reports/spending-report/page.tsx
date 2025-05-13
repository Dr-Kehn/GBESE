'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const pieData = [
  { name: 'Debt transfers cleared', value: 25, color: '#F4B400' },
  { name: 'Loans acquired', value: 10, color: '#277E3E' },
  { name: 'Debt cleared', value: 10, color: '#0D60D8' },
  { name: 'Money received', value: 25, color: '#7605D9' },
  { name: 'Money sent', value: 30, color: '#BFBFBF' },
]

const lineData = [
  { name: 'WK1', value: 270000 },
  { name: 'WK2', value: 200000 },
  { name: 'WK3', value: 200000 },
  { name: 'WK4', value: 160000 },
  { name: 'WK5', value: 150000 },
  { name: 'WK6', value: 150000 },
  { name: 'WK7', value: 150000 },
  { name: 'WK8', value: 160000 },
  { name: 'WK9', value: 180000 },
  { name: 'WK10', value: 220000 },
  { name: 'WK11', value: 250000 },
  { name: 'WK12', value: 230000 },
]

export default function OverviewPage() {
  const [activeTab, setActiveTab] = useState<'accounts' | 'debts'>('accounts')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href="/lenders/account/reports" className="flex items-center text-sm font-medium text-gray-700 mb-4">
          <Image src="/arrow-left.svg" alt="Back" className="mr-1" width={16} height={16} />
          Back
        </Link>

        <div className="bg-[#dbeafe] rounded-t-xl px-4 py-2">
          <h1 className="text-xl font-bold text-gray-900">Overview</h1>
        </div>

        <div className="bg-[#E8E8E8] rounded-b-xl p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>

            {/* Summary */}
            <div className="rounded-xl bg-white p-4 shadow-md col-span-1 mb-4">
              <h2 className="font-semibold mb-2">Summary</h2>
              <div className="space-y-2">
                <p>Account Balance: <span className="font-bold">N 75,000.00</span></p>
                <p>Debt Balance: <span className="font-bold">N 10,000.00</span></p>
              </div>
            </div>

            {/* Toggle Tab Section */}
            <div className="relative rounded-xl bg-white p-4 shadow-md col-span-1">
              <div className="flex justify-between items-start">
                <h2 className="font-semibold">{activeTab === 'accounts' ? 'Accounts' : 'Debts'}</h2>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <Image src="/kebab.svg" alt="Menu" width={16} height={16} />
                </button>
              </div>
              {activeTab === 'accounts' ? (
                <div className="mt-2 space-y-1">
                  <p>Crypto Wallet: <span className="font-bold">$20.00</span></p>
                  <p>Bank Account: <span className="font-bold">N 43,000.00</span></p>
                </div>
              ) : (
                <div className="mt-2 space-y-1">
                  <p>Crypto Wallet: <span className="font-bold">$0.00</span></p>
                  <p>Bank Account: <span className="font-bold text-red-500">N 10,000</span></p>
                </div>
              )}

              {/* Slide-Up Menu */}
              {menuOpen && (
                <div className="absolute z-10 top-12 right-4 bg-white border rounded-md shadow-md py-1 px-3">
                  <button
                    onClick={() => {
                      setActiveTab(activeTab === 'accounts' ? 'debts' : 'accounts')
                      setMenuOpen(false)
                    }}
                    className="text-sm text-gray-800 hover:text-blue-600"
                  >
                    {activeTab === 'accounts' ? 'Debts' : 'Accounts'}
                  </button>
                </div>
              )}
            </div>
            </div>

            {/* Pie Chart */}
            <div className="rounded-xl border-none p-4 shadow-md col-span-1">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    fill="#8884d8"
                    label={({ percent }: { percent: number }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Legend */}
              <div className="mt-2 grid grid-cols-2 text-xs gap-1">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Balance Chart */}
          <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-sm font-medium mb-2">Balance</h2>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={lineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#7605D9" fill="#BFBFBF" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
