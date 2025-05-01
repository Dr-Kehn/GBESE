'use client'

import { Button } from '@/components/ui/button'
import FiatCryptoToggle from './FiatCryptoToggle'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function BalanceCard() {
  const pathname = usePathname()

  return (
    <div className="relative space-y-4 mx-auto w-[50%]">
      <div className="absolute top-0 -right-40">
        <FiatCryptoToggle />
      </div>

      <div className="bg-balance-card b-img text-white rounded-xl p-6 shadow-md relative overflow-hidden">
        <Image className="absolute inset-0 w-full h-full object-cover" src="/image/pattern.png" alt="" width={100} height={100} />
        <div className="text-sm relative z-10">Fiat Balance</div>
        <div className="text-3xl font-semibold relative z-10">NGN400.12</div>
        <div className="text-xs relative z-10">Last updated 38 secs ago</div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Link href="/dashboard">
          <Button variant={pathname === '/dashboard' ? 'active' : 'outline'}>
            <Image src="/spend.svg" alt="" width={20} height={20}/>Spend
          </Button>
        </Link>
        <Link href="/dashboard/add-money">
          <Button variant={pathname === '/dashboard/add-money' ? 'active' : 'outline'}>
            <Image src="/AddMoney.svg" alt="" width={20} height={20}/>Add Money
          </Button>
        </Link>
        <Link href="/dashboard/borrow">
          <Button variant={pathname === '/dashboard/borrow' ? 'active' : 'outline'}>
            <Image src="/borrow.svg" alt="" width={20} height={20}/>Borrow
          </Button>
        </Link>
        <Link href="/dashboard/debt-transfer">
          <Button variant={pathname === '/dashboard/debt-transfer' ? 'active' : 'outline'}>
            <Image src="/debt transfer.svg" alt="" width={20} height={20}/>Debt Transfer
          </Button>
        </Link>
      </div>
    </div>
  )
}
