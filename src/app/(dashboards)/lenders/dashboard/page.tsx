// src/app/dashboard/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import BalanceCard from '@/components/lenders/dashboard/BalanceCard';



const beneficiaries = [
  { name: 'Dorothy Ubuara', color: 'bg-green-600', initial: 'D' },
  { name: 'Salem Onah', color: 'bg-yellow-400', initial: 'S' },
  { name: 'Divine Okorie', color: 'bg-blue-500', initial: 'D' },
  { name: 'John Iweh', color: 'bg-purple-600', initial: 'J' },
  { name: 'Tochukwu Ukwuoma', color: 'bg-red-600', initial: 'T' },
  { name: 'Nnaemeka Uzochukwu', color: 'bg-yellow-400', initial: 'N' },
  { name: 'Anthony Okafor', color: 'bg-blue-500', initial: 'A' },
];

const recentTransactions = [
  {
    name: 'Rose John',
    time: '5:30am',
    amount: '₦10,500',
    image: '/rose.png',
  },
  {
    name: 'John Mark',
    time: '4:30am',
    amount: '₦90,500',
    image: '/john.png',
  },
  {
    name: 'Rita Wae',
    time: '3:37am',
    amount: '₦9,000',
    image: '/rita.png',
  },
];

export default function LenderDashboardBody() {
  return (
    <div className="space-y-10 pt-6">
      {/*BalanceCard*/}
      <div>
        <BalanceCard />
      </div>
      {/*Page Content*/}
    <div className="space-y-4 mx-auto md:w-[50%] w-[90%]">
      {/* Beneficiaries */}
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold text-blue-600">Beneficiaries</h3>
        <Link href="#" className="text-sm font-medium text-green-600 hover:underline">
          View all
        </Link>
      </div>
      <div className="flex overflow-x-auto gap-4 pb-2">
        {beneficiaries.map((b, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[56px] space-y-1">
            <div
              className={`w-10 h-10 rounded-full text-white flex items-center justify-center text-sm font-semibold ${b.color}`}
            >
              {b.initial}
            </div>
            <p className="text-[11px] text-center text-gray-700 leading-tight">{b.name}</p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-blue-600">Recent</h3>
        <div className="bg-gray-100 text-sm text-gray-600 font-medium px-4 py-2 rounded-full">
          April 11 2025
        </div>

        <div className="space-y-3">
          {recentTransactions.map((tx, idx) => (
            <Card key={idx} className="flex flex-row items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <Image
                  src={tx.image}
                  alt={tx.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">{tx.name}</span>
                  <span className="text-xs text-gray-500">{tx.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">{tx.amount}</span>
                <Image src="/b-arrow-right.svg" alt="Details" width={14} height={14} />
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="outline" className="text-blue-600 border-blue-600">
            See More
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}