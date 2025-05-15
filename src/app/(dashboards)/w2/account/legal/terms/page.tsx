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
          <p className="">Welcome to GBESE—a peer-to-peer credit transfer platform built to democratize access to credit and transform the way debt is shared.<br />
            By using our platform, you agree to the following Terms and Conditions (“Terms”). Please read them carefully.
          </p>
          <p>1. User Eligibility<br />
            You must be at least 18 years old and legally capable of entering into binding agreements. You agree to provide accurate identity and financial information as part of our Know Your Customer (KYC) process.
          </p> 
          <p>2. Platform Use<br />
            GBESE allows users to:<br />
	        •	Apply for and access credit<br />
	        •	Transfer debt obligations to other consenting users<br />
	        •	Accept transferred obligations with agreed terms<br />
	        •	Participate in community credit tools (e.g., Wealth Redistribution Index, Debt Shuffle)<br />
            You are solely responsible for all activity conducted through your account.
          </p>
          <p>3. Debt Transfer Protocol (DTP)<br />
            All debt transfers must be consensual and executed through the platform’s official workflow. Once accepted:<br />
        	•	The transferee assumes full responsibility for repayment under the agreed terms.<br />
        	•	Transfers are final and enforceable through immutable smart contracts (Web3 implementation).<br />
        	•	GBESE is not liable for any personal agreements made outside the platform.
          </p>
          <p>4. Risk Disclosure<br />
            Debt transfer involves financial risk. You acknowledge and accept:<br />
        	•	The potential for loss or delayed repayment<br />
        	•	That GBESE does not offer financial advice<br />
        	•	That credit decisions are automated and may not align with traditional risk models</p>
          <p>5. Fees and Transactions<br />
            GBESE may apply service fees for certain transactions. You’ll be notified of any fees before confirming an action. All payments and transfers are processed in real-time where possible, with fallback protocols in case of delays.
          </p>
          <p>6. User Conduct<br />
            You agree not to:<br />
        	•	Misrepresent your identity or financial status<br />
        	•	Use the platform for fraud, money laundering, or illegal activity< br />
        	•	Attempt to reverse engineer or disrupt platform operations<br />
            Violation may result in account suspension or legal action.
          </p>
          <p>7. Privacy and Data<br />
            Your data is handled per our [Privacy Policy]. We apply encryption and privacy-first design principles. You control your financial identity through our Self-Sovereign Identity protocol (Web3-enabled accounts only).
          </p>
          <p>8. Platform Governance<br />
            Some features are governed by a community DAO. Participation in votes and proposals is optional but encouraged. DAO decisions apply only to features under its governance.
          </p>
          <p>9. Termination<br />
            You may deactivate your account at any time. GBESE may suspend or terminate access for violation of these Terms, unlawful activity, or technical abuse.
          </p>
          <p>10. Limitation of Liability<br />
            GBESE is not liable for:<br />
        	•	User decisions related to accepting or transferring debt<br />
        	•	Losses from credit exposure<br />
        	•	Downtime or data issues due to third-party providers or smart contract errors<br />
            Our liability is limited to the maximum extent permitted by applicable law.
          </p>
          <p>11. Changes to Terms<br />
            We may update these Terms from time to time. Changes will be posted on the platform and take effect immediately unless otherwise stated. Continued use implies acceptance.
          </p>
          <p>12. Contact<br />
            For support or questions, contact us at:<br />
            Email: ezeokpokc@yahoo.com<br />
            Support Center: +2347044533655
          </p>
          <p>By using GBESE, you acknowledge that you have read, understood, and agree to these Terms.</p>
        </CardContent>
      </Card>
    </div>
  )
}
