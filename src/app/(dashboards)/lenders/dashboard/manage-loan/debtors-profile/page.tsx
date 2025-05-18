"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function DebtorProfile() {
  return (
    <section className="p-4 sm:p-8 max-w-4xl mx-auto">
      {/* Back Navigation */}
      <div className="flex items-center gap-2 mb-6">
        <Link href="/lenders/dashboard/manage-loan" className="flex items-center gap-2">
          <Image
            src="/arrow-left.svg"
            alt="Go back"
            width={20}
            height={20}
          />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      {/* Profile Card */}
      <Card className="w-full rounded-xl p-6 flex flex-col items-center text-center">
        {/* Avatar + Name */}
        <Image
          src="/account-image.png"
          alt="User Avatar"
          width={80}
          height={80}
          className="rounded-full mb-4"
        />
        <h2 className="font-semibold text-lg">Dorothy Ubuara</h2>
        <p className="text-gray-500 text-sm">@dorothyubuara</p>
        <p className="text-gray-600 text-sm mt-1">Credit score: 500</p>

        {/* Info Boxes */}
        <div className="mt-6 w-full space-y-3">
          <div className="flex justify-between bg-gray-50 border rounded-lg p-3">
            <span>Total payment default</span>
            <span className="font-medium">None</span>
          </div>
          <div className="flex justify-between bg-gray-50 border rounded-lg p-3">
            <span>Total Loans reassigned</span>
            <span className="font-medium">3</span>
          </div>
          <div className="flex justify-between bg-gray-50 border rounded-lg p-3">
            <span>Total loans received</span>
            <span className="font-medium">7</span>
          </div>
          <div className="flex justify-between bg-gray-50 border rounded-lg p-3">
            <span>Phone number</span>
            <span className="font-medium">08028200000</span>
          </div>
          <div className="flex justify-between bg-gray-50 border rounded-lg p-3">
            <span>Email</span>
            <span className="font-medium truncate">Dubuara@yahoo.com</span>
          </div>
          <div className="flex justify-between bg-gray-50 border rounded-lg p-3">
            <span>Address</span>
            <span className="font-medium truncate">No 2 Lekki Phase 1</span>
          </div>
        </div>
      </Card>
    </section>
  );
}
