'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export default function SavedCardsPage() {
  const [open, setOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 py-6 sm:px-6 md:px-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/lenders/account" className="flex items-center text-sm text-gray-600 hover:text-gray-800">
          <Image src="/arrow-left.svg" alt="Back" width={16} height={16} className="mr-2" />
          <span>Back</span>
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-center mb-8">Saved Cards</h1>

      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-md max-w-xl mx-auto flex flex-col items-center justify-center px-6 py-10 text-center">
        <Image src="/add new card.svg" alt="Card Icon" width={120} height={120} className="mb-4" />

        <p className="text-gray-500 mb-6">You do not have any saved cards presently</p>

        <Button onClick={() => setOpen(true)} className="bg-[#0B5FFF] text-white px-6 py-2 rounded-lg">
          Add new card
        </Button>
      </div>

      {/* Link Card Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Link your card</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Input
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="flex space-x-4">
              <Input
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <Input
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Link href="/w2/account/saved-cards">
              <Button className="w-full bg-[#0D60D8] cursor-pointer hover:bg-blue-600">Link card</Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
