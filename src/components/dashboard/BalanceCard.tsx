'use client';

import { Button } from '@/components/ui/button';
import FiatCryptoToggle from './FiatCryptoToggle';
import Link from 'next/link';

export default function BalanceCard() {
  return (
    <div className="relative space-y-4 mx-auto w-[50%]">
      {/* Toggle top-right */}
      <div className="absolute top-0 -right-40">
        <FiatCryptoToggle />
      </div>

      {/* Balance Card */}
      <div className="bg-balance-card text-white rounded-xl p-6 shadow-md relative">
        {/* Optional logo watermark */}

        <div className="text-sm ">Fiat Balance</div>
        <div className="text-3xl font-semibold">NGN400.12</div>
        <div className="text-xs ">Last updated 38 secs ago</div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Link href="/dashboard/spend">
          <Button variant="outline">Spend</Button>
        </Link>
        <Link href="/dashboard/add-money">
          <Button> Add Money </Button>
        </Link>
        <Link href="/dashboard/borrow">
          <Button> Borrow </Button>
        </Link>
        <Link href="/dashboard/debt-transfer">
          <Button> Debt Transfer </Button>
        </Link>
      </div>
    </div>
  );
}
