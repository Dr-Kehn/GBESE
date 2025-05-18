'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HelpPage() {
  const [isMobile, setIsMobile] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : ''
    const mobileRegex = /Mobi|Android|iPhone|iPad|iPod/i
    setIsMobile(mobileRegex.test(userAgent))
  }, [])

  const handleCallClick = () => {
    const phoneNumber = '+2347044533655'
    if (isMobile) {
      window.open(`tel:${phoneNumber}`)
    } else {
      setShowModal(true)
    }
  }

  return (
    <main className="p-4 md:p-8 max-w-3xl mx-auto space-y-6 relative">
      {/* Back Button */}
      <Link href="/lenders/account" className="flex items-center text-sm text-gray-800 hover:underline space-x-2">
        <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
        <span>Back</span>
      </Link>

      {/* Header */}
      <h1 className="text-xl font-semibold text-center">Get Help</h1>

      {/* Help Options */}
      <div className="space-y-4">
        {/* Call Us */}
        <button
          onClick={handleCallClick}
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
          href="/lenders/account/help/chat"
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl space-y-4 text-center">
            <h2 className="text-lg font-semibold">Call Us</h2>
            <p className="text-gray-600">
              Your device doesn't support direct calling. Please dial the number below manually:
            </p>
            <p className="text-xl font-bold text-blue-600">+234 704 453 3655</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
