"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";
import {
  useGetSingleLoanOfferMutation,
  useGetSingleUserLoanRequestsMutation,
} from "@/redux/services/slices/loanSlice";
import moment from "moment";

type PaymentStatus = "Paid" | "Outstanding" | "Not Paid";

interface Installment {
  month: string;
  amount: string;
  status: PaymentStatus;
}

const initialInstallments: Installment[] = [
  { month: "Month 1", amount: "₦10,500.00", status: "Paid" },
  { month: "Month 2", amount: "₦10,500.00", status: "Paid" },
  { month: "Month 3", amount: "₦10,500.00", status: "Paid" },
  { month: "Month 4", amount: "₦10,500.00", status: "Outstanding" },
  { month: "Month 5", amount: "₦10,500.00", status: "Not Paid" },
  { month: "Month 6", amount: "₦10,500.00", status: "Not Paid" },
];

export default function LoanSummary() {
  const params = useParams();
  const router = useRouter();
  const loanOfferId = params?.id as string;

  const { data: currentUser } = useGetCurrentUserQuery();
  const [getLoanOffer] = useGetSingleLoanOfferMutation();
  const [getUserLoanDetails] = useGetSingleUserLoanRequestsMutation();

  const [installments, setInstallments] = useState(initialInstallments);
  const [showDropdown, setShowDropdown] = useState(false);
  const [pinDialogOpen, setPinDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [pin, setPin] = useState("");
  const [loanCreator, setLoanCreator] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDate, setLoanDate] = useState("");
  const [plan, setPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLoanDetails = async () => {
      try {
        setIsLoading(true);
        if (!loanOfferId || !currentUser?.userId) return;

        const offer = await getLoanOffer({ loanOfferId }).unwrap();
        const userLoan = await getUserLoanDetails({
          userId: currentUser.userId,
        }).unwrap();

        setLoanCreator(offer.lenderId?.username || "Unknown");
        const matchingLoan = userLoan.data.find(
          (r: any) => r.loanOfferId === loanOfferId
        );

        if (matchingLoan) {
          setLoanAmount(`₦${matchingLoan.amount.toLocaleString()}.00`);
          setLoanDate(matchingLoan.applicationDate);
          setPlan(matchingLoan.term);
        } else {
          setLoanAmount("₦0.00");
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast.error("Failed to load loan details");
        console.error(err);
        router.push("/w2/dashboard/borrow/manage-loan");
      }
    };

    fetchLoanDetails();
  }, [loanOfferId, currentUser, getLoanOffer, getUserLoanDetails, router]);

  const handlePayClick = (index: number) => {
    setSelectedIndex(index);
    setPin("");
    setPinDialogOpen(true);
  };

  const handlePayment = () => {
    const correctPin = "1234";
    const hasBalance = true; // Simulated

    if (pin !== correctPin) {
      toast.error("Incorrect PIN");
      return;
    }

    if (!hasBalance) {
      toast.error("Insufficient balance");
      return;
    }

    if (selectedIndex !== null) {
      const updated = [...installments];
      updated[selectedIndex] = { ...updated[selectedIndex], status: "Paid" };
      setInstallments(updated);
      toast.success("Payment successful");
    }

    setPinDialogOpen(false);
  };

  const statusColor = (status: PaymentStatus) => {
    switch (status) {
      case "Paid":
        return "text-green-600";
      case "Outstanding":
        return "text-red-600";
      case "Not Paid":
        return "text-yellow-500";
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
      <div className="mb-6 flex items-center space-x-2">
        <Link
          href="/w2/dashboard/borrow/manage-loan"
          className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800"
        >
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
          <span>Back</span>
        </Link>
      </div>

      <h2 className="text-xl font-medium text-center mb-6">Loan Summary</h2>

      <div className="bg-white border rounded-xl shadow-sm p-4 space-y-4">
        <div className="flex justify-between items-center px-4 py-3 border rounded-md">
          <span className="text-gray-700">Loan Creator</span>
          <span className="font-medium text-gray-900">
            {!isLoading ? loanCreator : "loading.."}
          </span>
        </div>
        <div className="flex justify-between items-center px-4 py-3 border rounded-md">
          <span className="text-gray-700">Loan Amount</span>
          <span className="font-medium text-gray-900">
            {!isLoading ? loanAmount : "loading.."}
          </span>
        </div>
        <div className="flex justify-between items-center px-4 py-3 border rounded-md">
          <span className="text-gray-700">Date Collected</span>
          <span className="font-medium text-gray-900">
            {!isLoading ? moment(loanDate).format("DD-MM-YY") : "loading.."}
          </span>
        </div>

        <div className="relative">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex justify-between items-center px-4 py-3 border rounded-md cursor-pointer"
          >
            <span className="text-gray-700">Repayment Plan</span>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">
                {!isLoading ? plan + " " + "Month" : "loading.."}
              </span>
              <Image
                src="/arrow-down.svg"
                alt="Dropdown"
                width={16}
                height={16}
                className={`transition-transform duration-200 ${
                  showDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={pinDialogOpen} onOpenChange={setPinDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Enter Transaction PIN</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <Input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter 4-digit PIN"
              maxLength={4}
            />
          </div>
          <DialogFooter>
            <Button onClick={handlePayment}>Confirm Payment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
