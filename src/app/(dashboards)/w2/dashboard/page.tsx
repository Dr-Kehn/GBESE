// src/app/dashboard/page.tsx
'use client';
import BalanceCard from '@/components/dashboard/BalanceCard';
import KYCNotice from '@/components/dashboard/KYCNotice';
import Beneficiaries from '@/components/dashboard/Beneficiaries';
import { useGetCurrentUserQuery } from '@/redux/services/slices/UserSlice';


export default function Page() {
  const { data: user, isLoading, error, isSuccess } = useGetCurrentUserQuery(null);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Error: Failed to load Data</p>
      </div>
    );
  }
  if (isSuccess && user?.role !== "user") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Unauthorized</p>
      </div>
    );
  }
  return (
    <>
      <div className="flex-1 space-y-8 p-0 pt-10">
        <BalanceCard user={user!}/>
        <KYCNotice />
        <Beneficiaries />
      </div>
    </>
  );
}