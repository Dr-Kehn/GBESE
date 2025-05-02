// src/app/card/page.tsx

'use client';

import TopNavbar from '@/components/layout/TopNavbar';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CardPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopNavbar />

      <main className="flex-grow flex flex-col items-center justify-start px-4 py-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Cards<span className="text-black text-sm">Coming Soon...</span></h1>

        {/* Card Stack Image or SVG */}
        <div className="relative w-full max-w-sm h-auto mb-8 flex justify-center">
          <Image
            src="/card-stack.svg" // replace with your image path (e.g., /images/cards.png or /card-stack.svg)
            alt="Virtual Cards Stack"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>

        <p className="text-sm text-gray-600 mb-8">
          Spend online and offline with your Gbese cards
        </p>

        {/* Action Cards */}
        <div className="space-y-4 w-full max-w-md text-left">
          <Card className="flex justify-between px-4 py-3 cursor-pointer hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gray-200 rounded-full mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Request A Card</p>
                <p className="text-xs text-gray-500">Get a virtual card for your local and international payments</p>
              </div>
             <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
          </Card>

          <Card className="flex justify-between px-4 py-3 cursor-pointer hover:shadow-md transition">
            <div className="flex items-start justify-between gap-3">
              <div className='flex gap-x-3'>
                <div className="w-6 h-6 bg-gray-200 rounded-full mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Card FAQs</p>
                  <p className="text-xs text-gray-500">Learn more about Gbese card</p>
                </div>
              </div> 
              <div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
