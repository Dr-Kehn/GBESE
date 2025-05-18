// src/app/components/dashboard/KYCNotice.tsx
'use client';

import { Button } from "@/components/ui/button";

export default function KYCNotice() {
  return (
    <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center mt-6 md:w-[50%] w-[90%] mx-auto">
      <div>
        <h4 className="text-sm font-semibold">KYC</h4>
        <p className="text-sm text-gray-500">Update your KYC to 100%</p>
      </div>
      <Button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-md">Not Done</Button>
    </div>
  );
}
