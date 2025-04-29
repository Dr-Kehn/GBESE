'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const addMethods = [
  {
    title: 'Share your @username',
    description: 'Receive money from other gbese users with your unique username.',
    icon: '/username.svg',
    href: '/add-money/username',
  },
  {
    title: 'Bank Transfer',
    description: 'From Bank app or Internet banking',
    icon: '/bank-transfer.svg',
    href: '/add-money/bank-transfer',
  },
  {
    title: 'Card',
    description: 'Add and withdraw money with your card',
    icon: '/cardA.svg',
    href: '/add-money/card',
  },
];

export default function AddNgnSection() {
  return (
    <section className="w-full px-4 py-10 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-blue-600">
        Add NGN
      </h2>

      <Card className="w-full max-w-lg rounded-2xl shadow-sm">
        <CardContent className="flex flex-col divide-y divide-gray-200 p-2 md:p-4">
          {addMethods.map((method, index) => (
            <Link
              href={method.href}
              key={index}
              className="flex items-start gap-4 py-4 transition hover:bg-gray-50 rounded-xl px-2 md:px-3"
            >
              <Image
                src={method.icon}
                alt=""
                width={24}
                height={24}
                className="mt-1"
              />
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-semibold text-blue-600">
                  {method.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">
                  {method.description}
                </p>
              </div>
              <Image
                src="/chevron-right.svg"
                alt=""
                width={16}
                height={16}
                className="mt-1 opacity-60"
              />
            </Link>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
