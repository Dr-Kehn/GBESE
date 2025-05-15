'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export default function PolicyPage() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-4 flex items-center space-x-2">
        <Link href="/w2/account/legal" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition">
          <Image
            src="/arrow-left.svg" // Replace this path with your actual back arrow SVG path
            alt="Back"
            width={20}
            height={20}
          />
          <span>Back</span>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold text-center mb-6">Policy</h1>

      {/* Scrollable Content */}
      <Card className="h-[70vh] overflow-y-auto">
        <CardContent className="p-6 space-y-4 text-sm leading-relaxed">
          {/* ✅ Insert the full Policy content here */}
          <p className="">Welcome to GBESE, a peer-to-peer credit transfer platform that puts control of debt and identity back in your hands. This Privacy Policy explains how we collect, use, store, and protect your personal and financial data when you use our platform.
          </p>
          <p>1. What Information We Collect<br />
            We collect the following types of data:<br />
            a. Personal Information<br />
        	•	Name, phone number, email address<br />
        	•	Government-issued ID (for KYC compliance)<br />
        	•	Date of birth and location (for eligibility and verification)<br />
            b. Financial Information<br />
        	•	Credit status, transaction history, repayment patterns<br />
        	•	Linked bank accounts or wallets<br />
        	•	Debt obligations transferred or received<br />
            c. Web3 Identity (Optional)<br />
        	•	Wallet addresses<br />
        	•	Smart contract interactions<br />
        	•	DAO participation metadata<br />
            d. Usage Data<br />
        	•	Login times, device type, IP address<br />
        	•	Pages visited and actions taken on the app
          </p>
          <p>2. How We Use Your Data<br />      
            We use your data to:<br />
        	•	Verify identity and maintain account security<br />
        	•	Facilitate credit applications, debt transfers, and payments<br />
        	•	Match users for optimal debt transfer opportunities<br />
        	•	Improve your user experience through personalization<br />
        	•	Generate predictive insights (e.g. credit impact, wealth redistribution impact)<br />
        	•	Fulfill legal, regulatory, and compliance obligations<br />
            We do not sell your personal information to third parties.
          </p>
          <p>3. Web3 & Self-Sovereign Identity<br />
            If you use our Web3 features:<br />
        	•	You control your identity using decentralized identifiers (DIDs).<br />
        	•	Your transactions are recorded on blockchain networks and may be publicly visible.<br />
        	•	Immutable smart contracts manage certain platform functions (e.g. debt tokenization, transfers).<br />
            Your wallet address is pseudonymous but may be linked to your identity through platform interactions.
          </p>
          <p>4. Data Sharing<br />
            We may share your data with:<br />
        	•	Payment processors for transactions<br />
        	•	Regulatory bodies as required by law<br />
        	•	Smart contract systems to automate and enforce agreements<br />
        	•	Reputation and scoring engines (e.g. for creditworthiness or Wealth Redistribution Index)<br />
            We only share the minimum amount necessary and ensure partners comply with security standards.
          </p>
          <p>5. Your Rights<br />
            You have the right to:<br />
        	•	Access or request a copy of your data<br />
        	•	Correct inaccurate information<br />
        	•	Request deletion (where legally allowed)<br />
        	•	Opt out of optional communications<br />
        	•	Control your Web3 identity via your wallet<br />
            To exercise these rights, contact us at: privacy@gbese.app
          </p>
          <p>6. Data Security<br />
            We use:<br />
        	•	End-to-end encryption<br />
        	•	Two-factor authentication (2FA)<br />
        	•	Smart contract auditing<br />
        	•	Privacy-first design practices<br />
            We regularly update our systems to defend against fraud, unauthorized access, and data breaches.
          </p>
          <p>7. Cookies and Tracking<br />
            We use cookies to:<br />
        	•	Maintain login sessions<br />
        	•	Track platform performance<br />
        	•	Offer personalized content<br />
            You may disable cookies in your browser settings, but it may affect functionality.
          </p>
          <p>8. Data Retention<br />
            We retain data:<br />
        	•	As long as your account is active<br />
        	•	As required by financial regulations<br />
        	•	Until you request deletion (unless prohibited)<br />
            Blockchain records are immutable and cannot be erased once written to the ledger.
          </p>
          <p>9. Changes to This Policy<br />
            We may update this policy as laws or technology change. We’ll notify you of significant updates via the platform or email. Continued use means you agree to the latest version.
          </p>
          <p>10. Contact Us<br />
            If you have any questions, complaints, or requests:<br />
            Email: ezeokpokc@yahoo.com<br />
            Support Portal:+2347044533655
          </p>
          <p>By using GBESE, you agree to this Privacy Policy.</p>
        </CardContent>
      </Card>
    </div>
  )
}
