'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TwoFactorSetup() {
  const router = useRouter()
  const [method, setMethod] = useState<'app' | 'key'>('app')

  const handleSetup = () => {
    if (method === 'app') {
      router.push('/lenders/account/security/two-factor/app')
    } else {
      router.push('/lenders/account/security/two-factor/key')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto px-4 pt-6 pb-16">
        <Link
          href="/lenders/account/security"
          className="flex items-center text-sm text-black hover:underline mb-6"
        >
          <Image
            src="/arrow-left.svg"
            alt="Back"
            width={20}
            height={20}
            className="mr-2"
          />
          Back
        </Link>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/shield-security.svg"
              alt="Shield Icon"
              width={40}
              height={40}
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Protect your account with 2-step verification
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Each time you log in, you’ll use a one-time code in addition to
            your password. Choose how you’ll get your code.
          </p>

          <div className="space-y-4 text-left">
            <label
              htmlFor="auth-app"
              className={`flex items-center gap-3 cursor-pointer border rounded-lg px-4 py-3 ${
                method === 'app'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                id="auth-app"
                name="method"
                value="app"
                checked={method === 'app'}
                onChange={() => setMethod('app')}
                className="form-radio text-blue-600"
              />
              <span className="font-medium text-gray-900">Use an authenticator app</span>
            </label>

            <label
              htmlFor="security-key"
              className={`flex items-center gap-3 cursor-pointer border rounded-lg px-4 py-3 ${
                method === 'key'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                id="security-key"
                name="method"
                value="key"
                checked={method === 'key'}
                onChange={() => setMethod('key')}
                className="form-radio text-blue-600"
              />
              <span className="font-medium text-gray-900">Use a security key</span>
            </label>
          </div>

          <button
            onClick={handleSetup}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-blue-700 transition"
          >
            Set Up
          </button>
        </div>
      </div>
    </div>
  )
}
