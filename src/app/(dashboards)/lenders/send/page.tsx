"use client"
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const beneficiaries = [
  { name: "Dorothy Ubuara", color: "bg-green-600" },
  { name: "Dorothy Ubuara", color: "bg-yellow-400" },
  { name: "Dorothy Ubuara", color: "bg-blue-500" },
  { name: "Dorothy Ubuara", color: "bg-purple-600" },
  { name: "Dorothy Ubuara", color: "bg-red-600" },
  { name: "Dorothy Ubuara", color: "bg-yellow-400" },
  { name: "Dorothy Ubuara", color: "bg-blue-500" },
];

export default function SendPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-800">
      <div className="max-w-4xl mx-auto px-4 pt-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Send Money
        </h1>

        <section className="bg-white rounded-3xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-blue-600 font-medium">Beneficiaries</h2>
            <Link href="/lenders/send/view-all" className="text-green-700 text-sm font-semibold">
              View all
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            {beneficiaries.map((b, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-1">
                <div
                  className={`w-10 h-10 rounded-full text-white flex items-center justify-center text-sm font-semibold ${b.color}`}
                >
                  A
                </div>
                <p className="text-xs text-center leading-tight">{b.name}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Link href="/lenders/send/gbese">
              <Card className="hover:shadow-md transition-all cursor-pointer">
                <CardContent className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/icon.svg"
                      alt="Gbese Icon"
                      width={20}
                      height={20}
                    />
                    <div>
                      <p className="font-bold text-sm text-blue-700">Gbese to Gbese</p>
                      <p className="text-xs text-gray-500">Send to any Gbese account for free</p>
                    </div>
                  </div>
                  <Image
                    src="/g-arrow-right.svg"
                    alt="Arrow"
                    width={14}
                    height={14}
                  />
                </CardContent>
              </Card>
            </Link>

            <Link href="/lenders/send/withdraw">
              <Card className="hover:shadow-md transition-all cursor-pointer">
                <CardContent className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/icon.svg"
                      alt="Withdraw Icon"
                      width={20}
                      height={20}
                    />
                    <div>
                      <p className="font-bold text-sm text-blue-700">Withdraw Funds</p>
                      <p className="text-xs text-gray-500">Withdraw money to your bank account</p>
                    </div>
                  </div>
                  <Image
                    src="/g-arrow-right.svg"
                    alt="Arrow"
                    width={14}
                    height={14}
                  />
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-sm p-6">
          <h2 className="text-blue-600 font-medium mb-4">Recent</h2>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/no-records.svg"
              alt="No Records"
              width={50}
              height={50}
            />
            <p className="text-sm text-red-500 font-medium mt-2">No Records!</p>
            <p className="text-xs text-gray-500">
              Please use the search criteria to display the desired records
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
