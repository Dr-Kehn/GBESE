"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BalanceCard from "@/components/lenders/dashboard/BalanceCard";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePostLoanOfferMutation } from "@/redux/services/slices/loanSlice";

export default function MyAdsPage() {
  const [minimumAmount, setMinimumAmount] = useState<string>("");
  const [maximumAmount, setMaximumAmount] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [repaymentDuration, setRepaymentDuration] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const router = useRouter();

  const [postLoanOffer, { isLoading }] = usePostLoanOfferMutation();

  const isValidNumber = (value: string) => {
    return /^\d*\.?\d*$/.test(value);
  };

  const handlePostAd = async () => {
    const minLoanAmount = parseFloat(minimumAmount);
    const maxLoanAmount = parseFloat(maximumAmount);
    const interest = parseFloat(interestRate);
    const terms = parseInt(repaymentDuration, 10);

    if (
      isNaN(minLoanAmount) ||
      isNaN(maxLoanAmount) ||
      isNaN(interest) ||
      isNaN(terms)
    ) {
      setDialogMessage("Please enter valid numeric values in all fields.");
      setOpen(true);
      return;
    }

    if (interest > 5) {
      setDialogMessage("Interest rate cannot exceed 5%");
      setOpen(true);
      return;
    }

    try {
      const loanOfferData = {
        minLoanAmount,
        maxLoanAmount,
        terms,
        interestRate: interest / 100, // Convert % to decimal cause that's what john expexts on the back
      };

      console.log("Posting loan offer data:", loanOfferData);

      await postLoanOffer(loanOfferData).unwrap();

      setDialogMessage("Loan offer posted successfully!");
      setOpen(true);

      setMinimumAmount("");
      setMaximumAmount("");
      setInterestRate("");
      setRepaymentDuration("");

      setTimeout(() => {
        setOpen(false);
        router.push("/lenders/dashboard/manage-loan");
      }, 2000);
    } catch (err:any) {
      console.error("Failed to post loan offer:", err);
      setDialogMessage(err.data.message);
      setOpen(true);
    }
  };

  return (
    <div className="mt-10">
      <BalanceCard />
      <main className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center mt-6">
          <Card className="mt-6 p-4 w-full max-w-2xl rounded-2xl shadow-sm">
            <div className="flex justify-center flex-col md:flex-row overflow-x-auto gap-2 mb-6 px-0">
              <Link href="/lenders/dashboard/manage-loan">
                <Button className="w-full" variant="outline" size="sm">
                  Incoming Request
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="text-white bg-blue-600"
              >
                My Ads
              </Button>
              <Link href="/lenders/dashboard/manage-loan/approved-loans">
                <Button variant="outline" size="sm" className="w-full">
                  Approved Loans
                </Button>
              </Link>
            </div>

            {/* My Ads Form */}
            <Card className="p-6 rounded-xl border">
              <h2 className="text-center font-semibold text-lg">My Ads</h2>
              <p className="text-center text-sm text-gray-500 mb-6">
                Post your loan advert
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Amount Minimum</label>
                  <Input
                    type="text"
                    placeholder="Input min amount"
                    value={minimumAmount}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "" || isValidNumber(val)) {
                        setMinimumAmount(val);
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Amount Maximum</label>
                  <Input
                    type="text"
                    placeholder="Input max amount"
                    value={maximumAmount}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "" || isValidNumber(val)) {
                        setMaximumAmount(val);
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium flex justify-between">
                    Interest Rate
                    <span className="text-xs text-gray-500">Max: 5%</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter interest rate (e.g., 3.5)"
                    value={interestRate}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "" || isValidNumber(val)) {
                        setInterestRate(val);
                      }
                    }}
                  />
                  {parseFloat(interestRate) > 5 && (
                    <p className="text-red-500 text-xs mt-1">
                      Interest rate cannot exceed 5%
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Repayment Duration
                  </label>
                  <Input
                    type="text"
                    placeholder="Input repayment duration (in months)"
                    value={repaymentDuration}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "" || /^\d*$/.test(val)) {
                        setRepaymentDuration(val);
                      }
                    }}
                  />
                </div>

                <Button
                  className="w-full bg-blue-600 text-white"
                  onClick={handlePostAd}
                  disabled={
                    isLoading ||
                    !minimumAmount ||
                    !maximumAmount ||
                    !interestRate ||
                    !repaymentDuration ||
                    parseFloat(interestRate) > 5
                  }
                >
                  {isLoading ? "Posting..." : "Post Ad"}
                </Button>
              </div>
            </Card>
          </Card>
        </div>
      </main>

      {/* Dialog for success/error messages */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle className="text-center text-base font-medium">
            {dialogMessage}
          </DialogTitle>
        </DialogContent>
      </Dialog>
    </div>
  );
}
