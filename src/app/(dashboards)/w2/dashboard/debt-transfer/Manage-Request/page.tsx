"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import TopNavbar from "@/components/layout/TopNavbar";
import BalanceCard from "@/components/dashboard/BalanceCard";
import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";

const requestData = [
  {
    name: "Dorothy Ubuara",
    amount: "₦ 40,000",
    schedule: "September - January",
    report: "Medical bill",
  },
  {
    name: "Dorothy Ubuara",
    amount: "₦ 40,000",
    schedule: "September - January",
    report: "School fee",
  },
];

export default function ManageRequestPage() {
  const [dialogMsg, setDialogMsg] = useState("");
  const [open, setOpen] = useState(false);
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

  const handleAction = (type: "accept" | "decline") => {
    setDialogMsg(
      type === "accept"
        ? "Debt accepted successfully!"
        : "Debt declined successfully!"
    );
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <div className="mt-10">
      <BalanceCard user={user!}/>
      <main className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center mt-6">
          {/* Tab Menu */}
          <Card className="mt-6 p-4 w-full max-w-5xl rounded-2xl shadow-sm">
            <div className="flex justify-center gap-2 mb-6 flex-col md:flex-row">
              <Link href="/w2/dashboard/debt-transfer">
                <Button variant="outline" size="sm" className="w-full">
                  Direct Debt Transfer
                </Button>
              </Link>
              <Link href="/w2/dashboard/debt-transfer/My-Ads">
                <Button variant="outline" size="sm" className="w-full">
                  Publish Debts
                </Button>
              </Link>
              <Button className="bg-blue-600 text-white" size="sm">
                Manage Request
              </Button>
            </div>

            {/* Toggle Incoming / Outgoing */}
            <div className="flex gap-2 mb-4">
              <Button className="bg-blue-600 text-white">Incoming</Button>
              <Link href="/w2/dashboard/debt-transfer/Manage-Request/Outgoing">
                <Button variant="ghost" className="text-gray-400">
                  Outgoing
                </Button>
              </Link>
            </div>

            {/* Table */}
            <div className="overflow-auto rounded-lg border">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-blue-50 text-left">
                  <tr>
                    <th className="p-3 font-semibold">Sender’s Name</th>
                    <th className="p-3 font-semibold">Amount</th>
                    <th className="p-3 font-semibold">Payment Schedule</th>
                    <th className="p-3 font-semibold">Report</th>
                    <th className="p-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {requestData.map((req, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3">{req.name}</td>
                      <td className="p-3">{req.amount}</td>
                      <td className="p-3">{req.schedule}</td>
                      <td className="p-3">{req.report}</td>
                      <td className="p-3 space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAction("accept")}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAction("decline")}
                        >
                          Decline
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Dialog Pop-up */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="text-center text-lg font-semibold">
                {dialogMsg}
              </DialogContent>
            </Dialog>
          </Card>
        </div>
      </main>
    </div>
  );
}
