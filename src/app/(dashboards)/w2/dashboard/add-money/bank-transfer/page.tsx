"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BalanceCard from "@/components/dashboard/BalanceCard";
import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";

export default function BankTransferPage() {
  const router = useRouter();

  const { data: user, isLoading, error, isSuccess } = useGetCurrentUserQuery(null);
  
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      );
    }
    if (error) {
      return (
        <div className="flex items-center justify-center h-screen">
          <p className="text-red-500">Error: Failed to load Data</p>
        </div>
      );
    }
    if (isSuccess && user?.role !== "user") {
      return (
        <div className="flex items-center justify-center h-screen">
          <p className="text-red-500">Unauthorized</p>
        </div>
      );
    }
  const bankName = "Gbese";
  const accountNumber = "123456789";
  const accountName = "Big Baby Kehn";

  const shareMessage = `Send money to:\nBank: ${bankName}\nAccount Number: ${accountNumber}\nAccount Name: ${accountName}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Send Money on Gbese",
          text: shareMessage,
        });
      } catch (err) {
        toast.error("Sharing cancelled or failed");
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareMessage);
        toast.success("Copied successfully!");
      } catch (err) {
        toast.error("Failed to copy");
      }
    }
  };

  return (
    <div className="mt-10">
        <BalanceCard user={user!} />
      <section className="w-full px-4 py-6">
        <div className="max-w-xl mx-auto mt-6">
          {/* Back link */}
          <div className="text-sm text-gray-600 mb-4 mt-8">
            <Link
              href="/w2/dashboard/add-money"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <ChevronLeft size={16} />
              Back
            </Link>
          </div>

          {/* Transfer Card */}
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="py-8 px-4 text-center flex flex-col items-center">
              <h2 className="text-lg font-semibold">Transfer</h2>
              <p className="text-sm text-gray-600 mt-2 max-w-sm">
                Use the details below to send money to your Gbese account from
                any bank's app or through internet banking.
              </p>

              <div className="w-full max-w-md mt-6 flex flex-col gap-4 text-left">
                <div>
                  <label className="text-sm text-gray-500">Bank Name</label>
                  <input
                    readOnly
                    value={bankName}
                    placeholder="Bank Name"
                    className="w-full mt-1 p-2 border rounded-lg bg-gray-100"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">
                    Account Number
                  </label>
                  <input
                    readOnly
                    value={accountNumber}
                    placeholder="Account Number"
                    className="w-full mt-1 p-2 border rounded-lg bg-gray-100"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">Account Name</label>
                  <input
                    readOnly
                    value={accountName}
                    placeholder="Account Name"
                    className="w-full mt-1 p-2 border rounded-lg bg-gray-100"
                  />
                </div>
              </div>

              <Button
                onClick={handleShare}
                className="mt-6 w-full max-w-md bg-balance-card"
              >
                Share
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
