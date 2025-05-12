"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopNavbar from "@/components/layout/TopNavbar";
import BalanceCard from "@/components/dashboard/BalanceCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function MyAdsPage() {
  const [loanId, setLoanId] = useState("");
  const [reason, setReason] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handlePostAd = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="mt-10">
      <BalanceCard />
      <main className=" p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center mt-6">
          {/* Tabs */}
          <Card className="mt-6 p-4 w-full max-w-2xl rounded-2xl shadow-sm">
            <div className="flex justify-center flex-col md:flex-row overflow-x-auto gap-2 mb-6 px-0">
              <Link href="/w2/dashboard/debt-transfer">
                <Button className="w-full" variant="outline" size="sm">
                  Direct Debt Transfer
                </Button>
              </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white bg-blue-600"
                >
                  Publish Debts
                </Button>
              <Link href="/w2/dashboard/debt-transfer/Manage-Request">
                <Button variant="outline" size="sm" className="w-full">
                  Manage Request
                </Button>
              </Link>
            </div>

            {/* My Ads Form */}
            <Card className="p-6 rounded-xl border">
              <h2 className="text-center font-semibold text-lg">Publish Debts</h2>
              <p className="text-center text-sm text-gray-500 mb-6">
                Publish your Debts
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Loan ID</label>
                  <Input
                    placeholder="Input loan ID"
                    value={loanId}
                    onChange={(e) => setLoanId(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Reason</label>
                  <Input
                    placeholder="Input reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full bg-blue-600 text-white"
                      onClick={handlePostAd}
                    >
                      Post Ad
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="text-center text-lg font-semibold">
                    Ad posted successfully!
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </Card>
        </div>
      </main>
    </div>
  );
}
