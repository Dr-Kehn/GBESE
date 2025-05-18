// src/app/dashboard/page.tsx
'use client';

import BalanceCard from '@/components/dashboard/BalanceCard';
import KYCNotice from '@/components/dashboard/KYCNotice';
import Beneficiaries from '@/components/dashboard/Beneficiaries';

export default function Page() {

  return (
    <div className="flex-1 space-y-8 p-0 pt-10">
      <BalanceCard />
      <KYCNotice />
      <Beneficiaries />
    </div>
  );
}
