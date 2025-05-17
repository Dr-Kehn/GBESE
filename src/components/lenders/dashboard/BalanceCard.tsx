"use client";

import { Button } from "@/components/ui/button";
import FiatCryptoToggle from "./FiatCryptoToggle";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  fiatBalance?: number;
}

export default function BalanceCard() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  const [timeAgo, setTimeAgo] = useState("Just now");

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    const storedTimestamp = localStorage.getItem("userLastUpdated");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedTimestamp) {
      setLastUpdated(parseInt(storedTimestamp, 10));
    }
  }, []);

  const formatTimeAgo = (timestamp: number) => {
    const diff = Math.floor((Date.now() - timestamp) / 1000);
    if (diff < 60) return `${diff} sec${diff !== 1 ? "s" : ""} ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} min${diff < 120 ? "" : "s"} ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hr${diff < 7200 ? "" : "s"} ago`;
    return `${Math.floor(diff / 86400)} day${diff < 172800 ? "" : "s"} ago`;
  };

  useEffect(() => {
    if (!lastUpdated) return;

    const interval = setInterval(() => {
      setTimeAgo(formatTimeAgo(lastUpdated));
    }, 1000);

    return () => clearInterval(interval);
  }, [lastUpdated]);

  if (!user) {
    return (
      <div className="text-center text-sm text-gray-500">Loading balance...</div>
    );
  }

  return (
    <div className="relative space-y-4 mx-auto md:w-[50%] w-[90%]">
      <div>
        <div className="lg:absolute top-0 -right-40 mb-4 lg:mb-0">
          <FiatCryptoToggle />
        </div>

        <div className="bg-balance-card b-img text-white rounded-xl md:space-y-3 p-6 shadow-md relative overflow-hidden w-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/image/pattern.png"
            alt=""
            width={100}
            height={100}
          />
          <div className="text-sm relative z-10">Fiat Balance</div>
          <div className="text-5xl font-semibold relative z-10">
            NGN{user.fiatBalance?.toLocaleString() ?? "0.00"}
          </div>
          <div className="text-xs relative z-10">
            Last updated {lastUpdated ? timeAgo : "—"}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-4 w-full">
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
            variant={
              pathname === "/w2/dashboard/add-money" ? "active" : "outline"
            }
            className="w-full cursor-pointer"
          >
            <Image src="/AddMoney.svg" alt="" width={20} height={20} />
            Add Money
          </Button>
        </Link>
        <Link href="/lenders/dashboard/manage-loan">
          <Button
            variant={
              pathname === "/w2/dashboard/debt-transfer"
                ? "active"
                : "outline"
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
