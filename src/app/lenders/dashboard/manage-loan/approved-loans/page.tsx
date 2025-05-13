"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import TopNavbar from "@/components/layout/TopNavbar";
import BalanceCard from "@/components/lenders/dashboard/BalanceCard";

const DebtTransferPage = () => {
  const router = useRouter();
  const activeTab: string = "outgoing"; // hardcoded, can be dynamic based on query

  const handleRoute = (path: string) => {
    router.push(path);
  };

  return (
    <div className="mt-10">
      <BalanceCard />
      <div className=" px-4 md:px-12 pb-10 mt-10">
        {/* Buttons */}
        <div className="flex flex-wrap gap-2 mt-6">
          <Button
            variant="outline"
            onClick={() => handleRoute("/lenders/dashboard/manage-loan")}
          >
            Incoming Request
          </Button>
          <Button
            variant="outline"
            onClick={() => handleRoute("/lenders/dashboard/manage-loan/My-Ads")}
          >
            My Ads
          </Button>
          <Button
            className="bg-blue-600 text-white"
            onClick={() =>
              handleRoute("/lenders/dashboard/manage-loan/approved-loans")
            }
          >
            Approved Loans
          </Button>
        </div>

        {/* Table */}
        <div className="bg-white mt-4 rounded-xl overflow-x-auto border ">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-blue-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Borrowers Name</th>
                <th className="px-4 py-3 font-semibold">Amount</th>
                <th className="px-4 py-3 font-semibold">Loan ID</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Dorothy Ubuara",
                  amount: "₦ 40,000",
                  loanId: "12345AE",
                 },
                {
                  name: "Dorothy Ubuara",
                  amount: "₦ 40,000",
                  loanId: "87463HI",
                },
                {
                  name: "Dorothy Ubuara",
                  amount: "₦ 40,000",
                  loanId: "8HIE8KH",
                },
              ].map((item, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.amount}</td>
                  <td className="px-4 py-3">{item.loanId}</td>
                  <td className="px-4 py-3">
                    <Button
                      variant="outline"
                      className="text-blue-500 border-blue-500 text-xs px-3 py-1 rounded-full"
                      onClick={() =>
                     handleRoute("/lenders/dashboard/manage-loan/loan-summary")
                      }
                    >
                      See more
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default DebtTransferPage;
