import Image from 'next/image'
import Link from 'next/link'
import TopNavbar from '@/components/layout/TopNavbar'

export default function KYCPage() {
  const tiers = [
    {
      title: 'Tier 1',
      isCurrent: true,
      values: ['₦ 20,000.00', '₦ 150,000.00', '₦ 50,000.00'],
    },
    {
      title: 'Tier 2',
      isCurrent: false,
      values: ['₦ 50,000.00', '₦ 500,000.00', '₦ 1,000,000.00'],
      route: '/w2/account/security/kyc/tier-2',
    },
    {
      title: 'Tier 3',
      isCurrent: false,
      values: ['₦5,000,000.00', 'Unlimited', 'Unlimited'],
      route: '/w2/account/security/kyc/tier-3',
    },
  ]

  const labels = ['Loan limit', 'Deposit limit', 'Withdrawal limit']

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#2C2C2C]">
      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
        {/* Back Button */}
        <Link href="/w2/account/security" className="flex items-center space-x-2 mb-6 text-sm text-black hover:underline">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
          <span>Back</span>
        </Link>

        {/* Title */}
        <h1 className="text-center text-2xl font-semibold mb-8">KYC</h1>

        {/* Tiers */}
        <div className="space-y-6">
          {tiers.map((tier, index) => (
            <div
              key={tier.title}
              className="bg-white rounded-md shadow-sm p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0"
            >
              <div>
                <h2 className="font-semibold text-lg mb-2">{tier.title}</h2>
                <ul className="space-y-1 text-sm">
                  {labels.map((label, i) => (
                    <li key={label}>
                      <span className="mr-2">{label}</span>
                      <span className="font-medium">{tier.values[i]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tier.isCurrent ? (
                <div className="flex items-center text-sm font-semibold text-[#0D60D8] space-x-1">
                  <span>Current tier</span>
                  <Image src="/sparkle.svg" alt="Current" width={16} height={16} />
                </div>
              ) : (
                <Link href={tier.route!}>
                  <button className="bg-[#0D60D8] text-white cursor-pointer text-sm px-4 py-2 rounded-md hover:bg-[#1E4FC3] transition">
                    Upgrade
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
