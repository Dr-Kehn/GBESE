'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import Image from 'next/image'
 // Adjust path to your back arrow SVG

export default function FAQPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <Link href="/w2/account" className="flex items-center text-sm text-muted-foreground hover:underline w-fit">
        <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-2" />
        <span>Back</span>
      </Link>

      <h1 className="text-2xl font-bold text-center">Frequently Asked Questions</h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Who can use Gbese app?</AccordionTrigger>
          <AccordionContent>
            {/* You will input the full answer here */}
            Anybody can use the Gbese app, Registration is free and easy.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Who is eligible for a loan transfer?</AccordionTrigger>
          <AccordionContent>
            Every registered user who has completed at least tier 1 of the KYC requirement is eligible for a loan transfer.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Will transferring my loan affect my credit score?</AccordionTrigger>
          <AccordionContent>
            {/* Insert your content here */}
            Yes, transferring your loan may affect your credit score. 
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Is my personal and financial data secure?</AccordionTrigger>
          <AccordionContent>
            {/* Insert your content here */}
            Yes, your personal and financial data is secure with us. We use industry-standard encryption and security measures to protect your information.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Will my data be shared among third parties?</AccordionTrigger>
          <AccordionContent>
            {/* Insert your content here */}
            No, your data will not be shared with third parties without your consent. We value your privacy and adhere to strict data protection regulations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
