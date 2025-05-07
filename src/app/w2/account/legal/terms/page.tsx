'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div className="mb-4 flex items-center space-x-2">
        <Link href="/w2/account/legal" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition">
          <Image
            src="/arrow-left.svg" // Replace with your actual back icon path
            alt="Back"
            width={20}
            height={20}
          />
          <span>Back</span>
        </Link>
      </div>

      <h1 className="text-xl md:text-2xl font-semibold text-center mb-6">Terms and conditions</h1>

      <Card className="h-[70vh] overflow-y-auto">
        <CardContent className="p-6 space-y-4 text-sm leading-relaxed">
          {/* Place your original Terms and Conditions content here */}
          <p className="">

Welcome to GBESE—a peer-to-peer credit transfer platform built to democratize access to credit and transform the way debt is shared.

By using our platform, you agree to the following Terms and Conditions (“Terms”). Please read them carefully.

⸻

1. User Eligibility

You must be at least 18 years old and legally capable of entering into binding agreements. You agree to provide accurate identity and financial information as part of our Know Your Customer (KYC) process.

⸻

2. Platform Use

GBESE allows users to:
	•	Apply for and access credit
	•	Transfer debt obligations to other consenting users
	•	Accept transferred obligations with agreed terms
	•	Participate in community credit tools (e.g., Wealth Redistribution Index, Debt Shuffle)

You are solely responsible for all activity conducted through your account.

⸻

3. Debt Transfer Protocol (DTP)

All debt transfers must be consensual and executed through the platform’s official workflow. Once accepted:
	•	The transferee assumes full responsibility for repayment under the agreed terms.
	•	Transfers are final and enforceable through immutable smart contracts (Web3 implementation).
	•	GBESE is not liable for any personal agreements made outside the platform.

⸻

4. Risk Disclosure

Debt transfer involves financial risk. You acknowledge and accept:
	•	The potential for loss or delayed repayment
	•	That GBESE does not offer financial advice
	•	That credit decisions are automated and may not align with traditional risk models

⸻

5. Fees and Transactions

GBESE may apply service fees for certain transactions. You’ll be notified of any fees before confirming an action. All payments and transfers are processed in real-time where possible, with fallback protocols in case of delays.

⸻

6. User Conduct

You agree not to:
	•	Misrepresent your identity or financial status
	•	Use the platform for fraud, money laundering, or illegal activity
	•	Attempt to reverse engineer or disrupt platform operations

Violation may result in account suspension or legal action.

⸻

7. Privacy and Data

Your data is handled per our [Privacy Policy]. We apply encryption and privacy-first design principles. You control your financial identity through our Self-Sovereign Identity protocol (Web3-enabled accounts only).

⸻

8. Platform Governance

Some features are governed by a community DAO. Participation in votes and proposals is optional but encouraged. DAO decisions apply only to features under its governance.

⸻

9. Termination

You may deactivate your account at any time. GBESE may suspend or terminate access for violation of these Terms, unlawful activity, or technical abuse.

⸻

10. Limitation of Liability

GBESE is not liable for:
	•	User decisions related to accepting or transferring debt
	•	Losses from credit exposure
	•	Downtime or data issues due to third-party providers or smart contract errors

Our liability is limited to the maximum extent permitted by applicable law.

⸻

11. Changes to Terms

We may update these Terms from time to time. Changes will be posted on the platform and take effect immediately unless otherwise stated. Continued use implies acceptance.

⸻

12. Contact

For support or questions, contact us at:
Email: ezeokpokc@yahoo.com
Support Center: +2347044533655

⸻

By using GBESE, you acknowledge that you have read, understood, and agree to these Terms.</p>
        </CardContent>
      </Card>
    </div>
  )
}
