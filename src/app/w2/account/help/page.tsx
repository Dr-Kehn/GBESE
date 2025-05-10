'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HelpPage() {
  return (
    <main className="p-4 md:p-8 max-w-3xl mx-auto space-y-6">
      {/* Back Button */}
      <Link href="/w2/account" className="flex items-center text-sm text-gray-800 hover:underline space-x-2">
        <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
        <span>Back</span>
      </Link>

      {/* Header */}
      <h1 className="text-xl font-semibold text-center">Get Help</h1>

      {/* Help Options */}
      <div className="space-y-4">
        {/* Call Us */}
        <button
          onClick={() => window.open('tel:+2347044533655')}
          className="flex items-center justify-between w-full bg-white rounded-xl shadow-sm p-4 hover:bg-gray-50 transition"
        >
          <div className="flex items-center space-x-3">
            <Image src="/request-statement.svg" alt="Call Icon" width={24} height={24} />
            <div className="text-left">
              <p className="font-semibold text-black">Call Us</p>
              <p className="text-gray-500 text-sm">Contact Call Center</p>
            </div>
          </div>
          <Image src="/arrow-right.svg" alt="Arrow" width={16} height={16} />
        </button>

        {/* Chat With Us */}
        <Link
          href="/w2/account/Chat"
          className="flex items-center justify-between w-full bg-white rounded-xl shadow-sm p-4 hover:bg-gray-50 transition"
        >
          <div className="flex items-center space-x-3">
            <Image src="/request-statement.svg" alt="Chat Icon" width={24} height={24} />
            <div className="text-left">
              <p className="font-semibold text-black">Chat With Us</p>
              <p className="text-gray-500 text-sm">Send us a message</p>
            </div>
          </div>
          <Image src="/arrow-right.svg" alt="Arrow" width={16} height={16} />
        </Link>
      </div>
    </main>
  )
}
