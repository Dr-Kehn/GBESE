// src/app/components/dashboard/Beneficiaries.tsx
'use client';

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const beneficiaries = [
  { name: "Dorothy Ubuara", initial: "D" },
  { name: "Chuka Nwosu", initial: "C" },
  { name: "Ugo Onuoha", initial: "U" },
  { name: "Ifeanyi Eze", initial: "I" },
  { name: "Ngozi Umeh", initial: "N" },
  { name: "Ahmed Yusuf", initial: "A" },
  { name: "Tope Akin", initial: "T" },
];

export default function Beneficiaries() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-blue-600">Beneficiaries</h3>
        <span className="text-sm text-green-600 font-medium cursor-pointer">View all</span>
      </div>

      <div className="flex gap-6 overflow-x-auto">
        {beneficiaries.map((b, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Avatar className="bg-green-600 text-white w-12 h-12">
              <AvatarFallback>{b.initial}</AvatarFallback>
            </Avatar>
            <p className="text-xs text-center mt-2 text-gray-700">{b.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
