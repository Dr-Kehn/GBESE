'use client';

import { Button } from '@/components/ui/button';
import FiatCryptoToggle from './FiatCryptoToggle';
import Link from 'next/link';
import Image from 'next/image';

export default function BalanceCard() {
  return (
    <div className="relative space-y-4 mx-auto w-[50%]">
      {/* Toggle top-right */}
      <div className="absolute top-0 -right-40">
        <FiatCryptoToggle />
      </div>

      {/* Balance Card */}
      <div className="bg-balance-card b-img text-white rounded-xl p-6 shadow-md relative">
        {/* Optional logo watermark */}
        <Image className="absolute top-0 bottom-0" src="/image/pattern.png" alt="" width={100} height={100} />

        <div className="text-sm ">Fiat Balance</div>
        <div className="text-3xl font-semibold">NGN400.12</div>
        <div className="text-xs ">Last updated 38 secs ago</div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Link href="/dashboard/spend">
          <Button variant="outline"><Image src="/spend.svg" alt="" width={20} height={20}/>Spend</Button>
        </Link>
        <Link href="/dashboard/add-money">
          <Button><Image src="/AddMoney.svg" alt="" width={20} height={20}/> Add Money </Button>
        </Link>
        <Link href="/dashboard/borrow">
          <Button> <Image src="/borrow.svg" alt="" width={20} height={20}/>Borrow </Button>
        </Link>
        <Link href="/dashboard/debt-transfer">
          <Button><Image src="/debt transfer.svg" alt="" width={20} height={20}/> Debt Transfer </Button>
        </Link>
      </div>
    </div>
  );
}
