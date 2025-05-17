"use client";

import { Button } from "@/components/ui/button";
import FiatCryptoToggle from "./FiatCryptoToggle";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BalanceCard() {
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
          <div className="text-3xl font-semibold relative z-10">NGN400.12</div>
          <div className="text-xs relative z-10">Last updated 38 secs ago</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center mt-4 w-full">
        <Link href="/lenders/dashboard">
          <Button
            variant={pathname === "/lenders/dashboard" ? "active" : "outline"}
            className="w-full cursor-pointer"
          >
            <Image src="/spend.svg" alt="" width={20} height={20} />
            Spend
          </Button>
        </Link>
        <Link href="/lenders/dashboard/add-money">
          <Button
            variant={pathname === "/lenders/dashboard/add-money" ? "active" : "outline"}
            className="w-full cursor-pointer"
          >
            <Image src="/AddMoney.svg" alt="" width={20} height={20} />
            Add Money
          </Button>
        </Link>
        <Link href="/lenders/dashboard/manage-loan">
          <Button
            variant={
              pathname === "/lenders/dashboard/manage-loan" ? "active" : "outline"
            }
            className="w-full cursor-pointer"
          >
            <Image src="/debt transfer.svg" alt="" width={20} height={20} />
            Manage Loan
          </Button>
        </Link>
      </div>
    </div>
  );
}
