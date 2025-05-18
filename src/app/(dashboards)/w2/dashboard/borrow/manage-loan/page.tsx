"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";
import {
  ILoanOfferAdResponse,
  useGetSingleUserLoanRequestsMutation,
} from "@/redux/services/slices/loanSlice";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

interface IPaginatedLoanResponse {
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
  data: ILoanOfferAdResponse[];
}

export default function ManageLoansPage() {
  const { data: currentUser, isLoading: userLoading } =
    useGetCurrentUserQuery();
  const [fetchUserLoans, { isLoading: loansLoading }] =
    useGetSingleUserLoanRequestsMutation();

  const [loans, setLoans] = useState<ILoanOfferAdResponse[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    if (currentUser?.userId) {
      fetchUserLoans({ userId: currentUser.userId, page, limit: 10 } as any)
        .unwrap()
        .then((res: any) => {
          const paginatedResponse = res as IPaginatedLoanResponse;
          setLoans(paginatedResponse.data!);
          setTotalPages(paginatedResponse.totalPages!);
        })
        .catch((err) => {
          console.error("Failed to fetch loans", err);
        });
    }
  }, [currentUser?.userId, page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <div className="mb-6 flex items-center space-x-2">
        <Link
          href="/w2/dashboard/borrow"
          className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800"
        >
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
          <span>Back</span>
        </Link>
      </div>

      <h2 className="text-xl font-medium text-center mb-6">Manage loans</h2>

      {userLoading || loansLoading ? (
        <p className="text-center text-gray-600">Loading loans...</p>
      ) : (
        <div className="overflow-x-auto border rounded-xl">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-50">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-gray-700">Loan ID</th>
                <th className="px-4 py-3 font-medium text-gray-700">
                  Loan Amount
                </th>
                <th className="px-4 py-3 font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-4 text-center text-gray-500"
                  >
                    No loan requests found.
                  </td>
                </tr>
              ) : (
                loans.map((loan, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2">
                      <span>{loan.loanRequestId}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(loan.loanRequestId);
                          toast.success("Copied to clipboard!");
                        }}
                        className="text-gray-500 hover:text-blue-600"
                        title="Copy Loan ID"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </td>

                    <td className="px-4 py-4 text-gray-900 whitespace-nowrap">
                      ₦{Number(loan.amount).toLocaleString()}
                    </td>
                    <td className="px-4 py-4">
                      <Link
                        href={`/w2/dashboard/borrow/manage-loan/${loan.loanOfferId}`}
                        className="text-blue-600 hover:underline text-xs border border-blue-600 px-3 py-1 rounded-md"
                      >
                        SEE MORE
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center p-4 text-sm text-gray-700">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
