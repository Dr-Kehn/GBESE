"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FiatCryptoToggle from "../FiatCryptoToggle";
import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";
import toast from "react-hot-toast";



interface BalanceCardProps {
  user: {
    fiatBalance?: number;
  };
}

export default function BalanceCard({ user }: BalanceCardProps) {
  const pathname = usePathname();
  return (
    <div className="relative space-y-4 mx-auto md:w-[50%] w-[90%]">
      <div>
        <div className=" lg:absolute top-0 -right-40 mb-4 lg:mb-0">
          <FiatCryptoToggle />
        </div>

        <div className="bg-balance-card b-img text-white rounded-xl p-6 shadow-md relative overflow-hidden w-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/image/pattern.png"
            alt=""
            width={100}
            height={100}
          />
          <div className="text-sm relative z-10">Fiat Balance</div>
          <div className="text-3xl font-semibold relative z-10">NGN {user?.fiatBalance?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          <div className="text-xs relative z-10">Last updated 30 secs ago</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 w-full">
        <Link href="/w2/dashboard">
          <Button
            variant={pathname === "/w2/dashboard" ? "active" : "outline"}
            className="w-full cursor-pointer"
          >
            <Image src="/spend.svg" alt="" width={20} height={20} />
            Spend
          </Button>
        </Link>
        <Link href="/w2/dashboard/add-money">
          <Button
            variant={pathname === "/w2/dashboard/add-money" ? "active" : "outline"}
            className="w-full cursor-pointer"
          >
            <Image src="/AddMoney.svg" alt="" width={20} height={20} />
            Add Money
          </Button>
        </Link>
        <Link href="/w2/dashboard/borrow">
          <Button
            variant={pathname === "/w2/dashboard/borrow" ? "active" : "outline"}
            className="w-full cursor-pointer"
          >
            <Image src="/borrow.svg" alt="" width={20} height={20} />
            Borrow
          </Button>
        </Link>
        <Link href="/w2/dashboard/debt-transfer">
          <Button
            variant={
              pathname === "/w2/dashboard/debt-transfer" ? "active" : "outline"
            }
            className="w-full cursor-pointer"
          >
            <Image src="/debt transfer.svg" alt="" width={20} height={20} />
            Debt Transfer
          </Button>
        </Link>
      </div>
    </div>
  );
}
