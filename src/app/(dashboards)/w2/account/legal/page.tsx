'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function LegalPage() {
  const legalItems = [
    {
      title: 'Terms and conditions',
      href: '/w2/account/legal/terms',
    },
    {
      title: 'Policies',
      href: '/w2/account/legal/policies',
    },
    {
      title: 'Disclaimer',
      href: '/w2/account/legal/disclaimer',
    },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <Link href="/w2/account" className="flex items-center text-sm text-muted-foreground hover:underline w-fit">
        <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-2" />
        <span>Back</span>
      </Link>

      <h1 className="text-lg font-semibold text-center">Legal</h1>

      <div className="space-y-4">
        {legalItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center justify-between p-4 rounded-lg bg-white shadow hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-muted rounded-md">
                <Image src="/request-statement.svg" alt="Icon" width={20} height={20} />
              </div>
              <span className="font-semibold">{item.title}</span>
            </div>
            <Image src="/arrow-right.svg" alt="Go" width={16} height={16} />
          </Link>
        ))}
      </div>
    </div>
  )
}
