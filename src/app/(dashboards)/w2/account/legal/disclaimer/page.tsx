'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export default function DisclaimerPage() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-4 flex items-center space-x-2">
        <Link
          href="/w2/account/legal"
          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition"
        >
          <Image
            src="/arrow-left.svg" // <-- Update this to your SVG path
            alt="Back"
            width={20}
            height={20}
          />
          <span>Back</span>
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-xl md:text-2xl font-semibold text-center mb-6">Disclaimer</h1>

      {/* Scrollable Card Content */}
      <Card className="h-[70vh] overflow-y-auto">
        <CardContent className="p-6 text-sm text-muted-foreground leading-relaxed space-y-4">
          {/* ⬇️ Paste full disclaimer content below */}
          <p><strong>Important Notice:</strong></p>
          <p>
            GBESE is a peer-to-peer credit transfer platform that enables users to shift or assume debt obligations based on mutual consent. By using this platform, you acknowledge and agree to the following:
          </p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>No Financial Advice</strong><br />
              GBESE does not provide financial, legal, or investment advice. All decisions made on the platform are at your own risk. You are encouraged to consult with a licensed financial advisor before accepting or transferring any debt.
            </li>

            <li>
              <strong>User Responsibility</strong><br />
              Users are solely responsible for understanding and accepting the terms of any credit transfer, loan agreement, or incentive offered through the platform. GBESE is not liable for user behavior, agreements made off-platform, or any losses arising from accepted obligations.
            </li>

            <li>
              <strong>Risk of Loss</strong><br />
              Debt assumption and transfer come with financial risks, including non-repayment or credit impact. GBESE does not guarantee repayment or outcomes of any transaction conducted between users.
            </li>

            <li>
              <strong>Web3 & Blockchain Limitations</strong><br />
              For users engaging with our Web3 features:
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Transactions are irreversible once confirmed on-chain.</li>
                <li>Wallet data and smart contract interactions may be publicly viewable.</li>
                <li>GBESE is not responsible for lost keys, incorrect transactions, or wallet security breaches.</li>
              </ul>
            </li>

            <li>
              <strong>Regulatory Compliance</strong><br />
              While GBESE makes every effort to comply with applicable laws and financial regulations, users are also responsible for ensuring their use of the platform complies with local laws and reporting requirements.
            </li>

            <li>
              <strong>Platform Limitations</strong><br />
              GBESE is a facilitation tool. It does not act as a bank, lender, debt collection agency, or legal entity enforcing repayment beyond platform mechanisms.
            </li>
          </ol>

          <p>
            By continuing to use GBESE, you confirm that you understand and accept this disclaimer.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
