'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function StatementReport() {
  return (
    <>
      {/* Page content wrapper */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Back link */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/lenders/account" className="flex items-center gap-1 hover:underline">
            <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
            <span>Back</span>
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-center font-bold text-lg">Statement and Report</h2>

        {/* Options */}
        <div className="space-y-4">
          <Link
            href="/lenders/account/reports/request-statement"
            className="flex items-center justify-between bg-white border rounded-xl px-4 py-3 shadow-sm hover:bg-muted transition"
          >
            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-md">
                <Image src="/request-statement.svg" alt="Request Icon" width={24} height={24} />
              </div>
              <span className="font-semibold">Request Statement</span>
            </div>
            <Image src="/arrow-right.svg" alt="Chevron" width={16} height={16} />
          </Link>

          <Link
            href="/lenders/account/reports/spending-report"
            className="flex items-center justify-between bg-white border rounded-xl px-4 py-3 shadow-sm hover:bg-muted transition"
          >
            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-md">
                <Image src="/spending-report.svg" alt="Report Icon" width={24} height={24} />
              </div>
              <span className="font-semibold">Spending Report</span>
            </div>
            <Image src="/arrow-right.svg" alt="Chevron" width={16} height={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
