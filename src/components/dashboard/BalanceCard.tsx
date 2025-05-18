"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FiatCryptoToggle from "../FiatCryptoToggle";
import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";
import { useState, useEffect } from "react";

export default function BalanceCard() {
	const pathname = usePathname();

  const {
      data: user,
      isLoading,
      isError,
      isSuccess,
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

    const renderLoading = () => (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  
    const renderError = () => (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Error: Failed to load Data</p>
      </div>
    );
  
    const renderUnauthorized = () => (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Unauthorized</p>
      </div>
    );
  
    if (isLoading) return renderLoading();
    if (isError) return renderError();
    if (isSuccess && user?.role !== "user") return renderUnauthorized();
  

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
					<div className="text-3xl font-semibold relative z-10">
						NGN
						{user?.fiatBalance?.toLocaleString("en-US", {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						}) || (0).toFixed(2)}
					</div>
					<div className="text-xs relative z-10">Last updated {timeAgo}</div>
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
						variant={
							pathname === "/w2/dashboard/add-money" ? "active" : "outline"
						}
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
