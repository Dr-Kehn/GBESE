"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import TopNavbar from "@/components/layout/TopNavbar";
import BalanceCard from "@/components/lenders/dashboard/BalanceCard";

export default function AddMoneyCardPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white mt-10">
      <BalanceCard />
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="mt-6">
          {/* Back Link */}
          <Link
            href="/lenders/dashboard/add-money"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            &lt; Back
          </Link>

          {/* Main Card */}
          <Card className="mt-4 shadow-md">
            <CardContent className="flex flex-col items-center text-center gap-4 py-8">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <Image
                  src="/add new card.svg"
                  alt="Card icon"
                  width={32}
                  height={32}
                  priority
                />
              </div>

              {/* Info Text */}
              <p className="text-gray-700 text-sm">
                You will be charged for adding money with a card.
              </p>

              {/* Charge Rate */}
              <div className="text-gray-800 text-sm">
                <span className="font-semibold text-gray-900">Naira Card:</span>{" "}
                N5000 + 1.5% of Amount
              </div>

              {/* Saved Cards */}
              <div className="text-gray-500 text-sm">
                <p className="mt-2 font-semibold">Saved Cards</p>
                <p className="text-sm">
                  You currently do not have any saved card.
                </p>
              </div>

              {/* Dialog for Adding Card */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white">
                    Add New Card
                  </Button>
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
