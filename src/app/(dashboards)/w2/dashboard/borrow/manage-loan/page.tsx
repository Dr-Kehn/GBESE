import Image from "next/image";
import Link from "next/link";

const loanData = [
  { id: "12345AQ", amount: "₦40,000.00" },
  { id: "12345SG", amount: "₦40,000.00" },
  { id: "12345HY", amount: "₦40,000.00" },
  { id: "12345KI", amount: "₦40,000.00" },
  { id: "12345HU", amount: "₦40,000.00" },
  { id: "12345HY", amount: "₦40,000.00" },
];

export default function ManageLoansPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <div className="mb-6 flex items-center space-x-2">
        <Link href="/w2/dashboard/borrow" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
          <span>Back</span>
        </Link>
      </div>

      <h2 className="text-xl font-medium text-center mb-6">Manage loans</h2>

      <div className="overflow-x-auto border rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-50">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium text-gray-700">Loan ID</th>
              <th className="px-4 py-3 font-medium text-gray-700">Loan Amount</th>
              <th className="px-4 py-3 font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {loanData.map((loan, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">{loan.id}</td>
                <td className="px-4 py-4 text-gray-900 whitespace-nowrap">{loan.amount}</td>
                <td className="px-4 py-4">
                  <Link
                    href="/w2/dashboard/borrow/manage-loan/loan-summary"
                    className="text-blue-600 hover:underline text-xs border border-blue-600 px-3 py-1 rounded-md"
                  >
                    SEE MORE
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
