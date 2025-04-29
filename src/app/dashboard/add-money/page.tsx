// src/app/dashboard/add-money/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import BalanceCard from '@/components/dashboard/BalanceCard';
import AddNgnSection from '@/components/dashboard/AddNgnSection';
import FiatCryptoToggle from '@/components/dashboard/FiatCryptoToggle';
import TopNavbar from '@/components/layout/TopNavbar';

export default function Page() {
  return (
    <>
      <TopNavbar />
      <div className="flex-1 space-y-8 p-8 pt-6">
        <BalanceCard />
        <AddNgnSection />
      </div>
    </>
  );
}