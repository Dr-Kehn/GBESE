'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function AddNgnSection() {
  return (
    <section className="w-full px-4 py-10 flex flex-col items-center">
      <Card className="w-full max-w-xl rounded-2xl shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-center text-lg font-semibold mb-6 text-gray-900">
            Add NGN
          </h2>

          <div className="space-y-4">
            {/* Share your @username */}
            <Link
              href="/w2/dashboard/add-money/username"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition p-4 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/username.svg"
                  alt="username icon"
                  width={24}
                  height={24}
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Share your @username
                  </p>
                  <p className="text-xs text-gray-500">
                    Receive money from other gbese users with your unique username.
                  </p>
                </div>
              </div>
              <span className="text-gray-400">{'>'}</span>
            </Link>

            {/* Bank Transfer */}
            <Link
              href="/w2/dashboard/add-money/bank-transfer"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition p-4 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/bank-transfer.svg"
                  alt="bank transfer icon"
                  width={24}
                  height={24}
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Bank Transfer
                  </p>
                  <p className="text-xs text-gray-500">
                    From Bank app or Internet banking
                  </p>
                </div>
              </div>
              <span className="text-gray-400">{'>'}</span>
            </Link>

            {/* Card */}
            <Link
              href="/w2/dashboard/add-money/card"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition p-4 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/cardA.svg"
                  alt="card icon"
                  width={24}
                  height={24}
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">Card</p>
                  <p className="text-xs text-gray-500">
                    Add and withdraw money with your card
                  </p>
                </div>
              </div>
              <span className="text-gray-400">{'>'}</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
