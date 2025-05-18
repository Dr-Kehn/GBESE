// src/app/dashboard/add-money/page.tsx
'use client';

import BalanceCard from '@/components/dashboard/BalanceCard';
import AddNgnSection from '@/components/dashboard/AddNgnSection';

export default function Page() {

  
  return (
    <>
      <div className="flex-1 space-y-8 p-0 pt-10">
        <BalanceCard />
        <AddNgnSection />
      </div>
    </>
  );
}