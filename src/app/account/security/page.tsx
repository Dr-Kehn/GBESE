// app/account/security/page.tsx or wherever your route resolves
import Image from 'next/image'
import Link from 'next/link'
import TopNavbar from '@/components/layout/TopNavbar'

export default function SecurityPage() {
  const tabs = [
    {
      title: 'Transaction Pin',
      href: '/account/security/pin',
      icon: '/securities.svg', // Update with your actual path
    },
    {
      title: 'Two Factor Authentication',
      href: '/account/security/two-factor',
      icon: '/securities.svg',
    },
    {
      title: 'KYC',
      href: '/account/security/kyc',
      icon: '/securities.svg',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2C2C2C]">
      <TopNavbar />

      <div className="max-w-3xl mx-auto px-4 pt-6">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link href="/account" className="flex items-center text-sm text-[#2C2C2C] hover:underline">
            <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-2" />
            Back
          </Link>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-semibold mb-8 text-center">Security</h1>

        {/* Security Tabs */}
        <div className="space-y-6">
          {tabs.map((tab) => (
            <Link
              key={tab.title}
              href={tab.href}
              className="flex items-center justify-between px-4 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#FAFAFA] p-2 rounded-lg">
                  <Image src={tab.icon} alt={tab.title} width={24} height={24} />
                </div>
                <span className="text-base font-medium">{tab.title}</span>
              </div>
              <Image src="/arrow-right.svg" alt="arrow" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
