'use client'

import Image from 'next/image'
import TopNavbar from '@/components/layout/TopNavbar'
import { Input } from '@/components/ui/input'

type Category = {
  title: string
  items: {
    label: string
    icon: string // path to your SVG in /public/icons/
  }[]
}

const categories: Category[] = [
  {
    title: 'Essential',
    items: [
      { label: 'Airtime', icon: '/airtime.svg' },
      { label: 'Internet', icon: '/internet.svg' },
      { label: 'TV', icon: '/tv.svg' },
      { label: 'Electricity', icon: '/electricity.svg' },
      { label: 'Education', icon: '/education.svg' },
      { label: 'Giftcards', icon: '/Giftcard.svg' },
    ],
  },
  {
    title: 'Payments',
    items: [
      { label: 'Pay with Bank', icon: '/bank.svg' },
      { label: 'Pay with USSD', icon: '/ussd.svg' },
      { label: 'POS Terminal', icon: '/pos.svg' },
    ],
  },
  {
    title: 'Lifestyle',
    items: [
      { label: 'Betting', icon: '/betting.svg' },
      { label: 'Transport', icon: '/transport.svg' },
      { label: 'Gym membership', icon: '/gym.svg' },
    ],
  },
]

export default function PayPage() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-12 pb-20">
      <TopNavbar />

      <h1 className="text-center text-3xl font-bold mt-10 mb-6 text-balance-card">Pay <span className="text-sm text-black">Coming Soon...</span></h1>

      <div className="max-w-xl mx-auto mb-10">
        <Input
          type="text"
          placeholder="Search for a bill"
          className="w-full rounded-xl px-4 py-3 shadow-sm"
        />
      </div>

      <div className="grid gap-8 max-w-5xl mx-auto">
        {categories.map((category) => (
          <div key={category.title}>
            <h2 className="text-lg font-semibold mb-4">{category.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-lg border hover:shadow-sm transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Image src={item.icon} alt={item.label} width={20} height={20} />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-gray-400 text-lg">&gt;</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
