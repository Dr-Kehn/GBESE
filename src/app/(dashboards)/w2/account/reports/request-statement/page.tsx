'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'sonner'

export default function RequestStatement() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [format, setFormat] = useState('PDF')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleGetStatement = () => {
    if (!startDate || !endDate) {
      toast.error('Please select both dates')
      return
    }

    if (startDate === endDate) {
      toast.error('Start and end dates cannot be the same')
      return
    }

    // TODO: Download logic and email trigger
    toast.success(`Statement (${format}) is being downloaded and emailed`)
  }

  return (
    <>
      <div className="max-w-xl mx-auto px-4 py-8">
        {/* Back */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/w2/account/reports" className="flex items-center gap-1 hover:underline">
            <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
            <span>Back</span>
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold mb-8">Request Statement</h2>

        {/* Form container */}
        <div className="bg-white border rounded-2xl p-6 space-y-6 shadow-sm">
          <div>
            <p className="mb-4 text-muted-foreground">
              Choose a timeframe for your statement and select a format you want it in.
            </p>

            {/* Start Date */}
            <div className="mb-4">
              <label className="block text-sm text-muted-foreground mb-1">Start Date</label>
              <input
                type="date"
                className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* End Date */}
            <div className="mb-4">
              <label className="block text-sm text-muted-foreground mb-1">End Date</label>
              <input
                type="date"
                className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            {/* Format Dropdown */}
            <div className="mb-4 relative">
              <label className="block text-sm text-muted-foreground mb-1">Format</label>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex justify-between items-center border rounded-md px-3 py-2 cursor-pointer"
              >
                <span>{format}</span>
                <Image src="/arrow-down.svg" alt="Dropdown" width={16} height={16} />
              </div>
              {dropdownOpen && (
                <div className="absolute z-10 mt-1 bg-white border rounded-md shadow w-full">
                  <div
                    onClick={() => {
                      setFormat('PDF')
                      setDropdownOpen(false)
                    }}
                    className="px-3 py-2 hover:bg-muted cursor-pointer"
                  >
                    PDF
                  </div>
                  <div
                    onClick={() => {
                      setFormat('Excel')
                      setDropdownOpen(false)
                    }}
                    className="px-3 py-2 hover:bg-muted cursor-pointer"
                  >
                    EXCEL
                  </div>
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              onClick={handleGetStatement}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
            >
              Get Statement
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
