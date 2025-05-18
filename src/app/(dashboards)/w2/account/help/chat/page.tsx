'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ChatWithUsPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const { name, email, message } = form
    const mailto = `mailto:gbeseappofficial@gmail.com?subject=Support Request from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${encodeURIComponent(
      message
    )}`
    window.open(mailto, '_blank')
     setForm({
    name: '',
    email: '',
    message: '',
    })
  }

  return (
    <main className="p-4 md:p-8 max-w-6xl mx-auto">
      {/* Back Button */}
      <Link href="/w2/account/help" className="flex items-center text-sm text-gray-800 hover:underline space-x-2 mb-4">
        <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
        <span>Back</span>
      </Link>

      {/* Page Title */}
      <h1 className="text-xl font-semibold text-center mb-6">Chat With Us</h1>

      {/* Content */}
      <div className="bg-white border rounded-xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row gap-10 min-h-[400px]">
        {/* Left Section - Text */}
        <div className="flex-1 items-center justify-center">
        <p className="flex-1 text-gray-700 text-2xl font-medium leading-snug">
          Let’s Help You Clear Your Debt and Build A Perfect Credit Score
        </p>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full border border-blue-400 rounded-md p-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full border border-blue-400 rounded-md p-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell Us About Your Need."
              rows={4}
              className="w-full border border-blue-400 rounded-md p-2 outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Request
          </button>
        </div>
      </div>
    </main>
  )
}
