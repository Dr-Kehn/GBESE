"use client";

import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";
import { Button } from "@/components/ui/button";
import FiatCryptoToggle from "./FiatCryptoToggle";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BalanceCard() {
  const pathname = usePathname();
  const {
    data: user,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetCurrentUserQuery();

  const [lastUpdatedTs, setLastUpdatedTs] = useState<number>(Date.now());
  const [timeAgo, setTimeAgo] = useState("Just now");

  useEffect(() => {
    if (user) {
      setLastUpdatedTs(Date.now());
      refetch();
    }
  }, [user, refetch]);

  useEffect(() => {
    const tick = () => {
      const diff = Math.floor((Date.now() - lastUpdatedTs) / 1000);
      if (diff < 60) setTimeAgo(`${diff} sec${diff !== 1 ? "s" : ""} ago`);
      else if (diff < 3600)
        setTimeAgo(`${Math.floor(diff / 60)} min${diff < 120 ? "" : "s"} ago`);
      else if (diff < 86400)
        setTimeAgo(
          `${Math.floor(diff / 3600)} hr${diff < 7200 ? "" : "s"} ago`
        );
      else
        setTimeAgo(
          `${Math.floor(diff / 86400)} day${diff < 172800 ? "" : "s"} ago`
        );
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [lastUpdatedTs]);

  // if (isLoading) {
    // return
  // }
  if (isError || !user) {
    return (
      <div className="text-center text-sm text-red-500">
        { (error as any)?.status === 401
            ? "Unauthorized. Please log in again."
            : "Could not load balance." }
      </div>
    );
  }

  return (
    <div className="relative space-y-4 mx-auto md:w-[50%] w-[90%]">
      {/* Toggle */}
      <div className="lg:absolute top-0 -right-40 mb-4 lg:mb-0">
        <FiatCryptoToggle />
      </div>

      {/* Balance Card */}
      <div className="bg-balance-card b-img text-white rounded-xl p-6 shadow-md relative overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/image/pattern.png"
          alt=""
          fill
          priority
        />
        <div className="relative z-10">
          <div className="text-sm">Fiat Balance</div>
          <div className="text-5xl font-semibold">
            NGN
            {isLoading ? (
              <div className="text-center text-sm text-gray-500">Loading balance…</div>
            ) : (
              user.fiatBalance?.toLocaleString() ?? "0.00"
            )}
          </div>
          <div className="text-xs">Last updated {timeAgo}</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-3 mt-4 w-full">
        <Link href="/lenders/dashboard">
          <Button
            variant={pathname === "/lenders/dashboard" ? "active" : "outline"}
            className="w-full"
          >
            <Image src="/spend.svg" alt="Spend" width={20} height={20} />
            Spend
          </Button>
        </Link>
        <Link href="/lenders/dashboard/add-money">
          <Button
            variant={pathname === "/lenders/dashboard/add-money" ? "active" : "outline"}
            className="w-full"
          >
            <Image src="/AddMoney.svg" alt="Add Money" width={20} height={20} />
            Add Money
          </Button>
        </Link>
        <Link href="/lenders/dashboard/manage-loan">
          <Button
            variant={pathname === "/lenders/dashboard/manage-loan" ? "active" : "outline"}
            className="w-full"
          >
            <Image
              src="/debt transfer.svg"
              alt="Manage Loan"
              width={20}
              height={20}
            />
            Manage Loan
          </Button>
        </Link>
      </div>
    </div>
  );
}
