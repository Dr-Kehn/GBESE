"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import BalanceCard from "@/components/lenders/dashboard/BalanceCard";
import { useInitiateFundMutation } from "@/redux/services/slices/fundSlice";

export default function AddMoneyCardPage() {
  const [amount, setAmount] = useState("");
  const [open, setOpen] = useState(false);
  const [initiateFund, { isLoading }] = useInitiateFundMutation();

  const handleFund = async () => {
    // Ensure only digits and valid number
    const cleaned = amount.trim();
    const isValid = /^\d+$/.test(cleaned) && Number(cleaned) > 0;

    if (!isValid) {
      toast.error("Please enter a valid numeric amount.");
      return;
    }

    try {
      const res = await initiateFund({ amount: Number(cleaned) }).unwrap();
      if (res?.paymentLink) {
        window.open(res.paymentLink, "_blank");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Initiate fund error:", err);
      toast.error("Failed to initiate funding. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white mt-10">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="mt-6">
          <Link
            href="/lenders/dashboard/add-money"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            &lt; Back
          </Link>

          <Card className="mt-4 shadow-md">
            <CardContent className="flex flex-col items-center text-center gap-6 py-8">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <Image
                  src="/add new card.svg"
                  alt="Card icon"
                  width={32}
                  height={32}
                  priority
                />
              </div>

              <div className="text-sm text-gray-600">
                You will be charged for adding money with a card.
              </div>

              <div className="text-gray-800 text-sm">
                <span className="font-semibold text-gray-900">Naira Card:</span>{" "}
                N5000 + 1.5% of Amount
              </div>

              {/* Input for Amount (text input with regex validation) */}
              <div className="w-full max-w-xs">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter Amount
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "" || /^\d*$/.test(val)) {
                      setAmount(val);
                    }
                  }}
                  placeholder="e.g. 5000"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>

              <Button
                onClick={handleFund}
                disabled={isLoading}
                className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isLoading ? "Processing..." : "Fund with Card"}
              </Button>

              {/* Optional: Saved Card Dialog */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button className="text-sm text-blue-600 underline">
                    Add New Card Manually
                  </button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add a New Card</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4 mt-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Link Card
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
