// src/app/components/dashboard/Beneficiaries.tsx
'use client';

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const beneficiaries = [
  { name: "Dorothy Ubuara", initial: "D", color:"bg-green-600" },
  { name: "Chuka Nwosu", initial: "C", color:"bg-yellow-400" },
  { name: "Ugo Onuoha", initial: "U", color:"bg-blue-500" },
  { name: "Ifeanyi Eze", initial: "I", color:"bg-purple-600" },
  { name: "Ngozi Umeh", initial: "N", color:"bg-red-600" },
  { name: "Ahmed Yusuf", initial: "A", color:"bg-yellow-400" },
  { name: "Tope Akin", initial: "T", color:"bg-blue-500" },
];

export default function Beneficiaries() {
  return (
    <div className="mt-8 p-8">
      <div className="flex md:justify-around justify-between items-center mb-4 mx-0">
        <h3 className="text-lg font-semibold text-blue-600">Beneficiaries</h3>
        <span className="text-sm text-green-600 font-medium cursor-pointer">View all</span>
      </div>

      <div className="flex gap-6 overflow-x-auto justify-center mt-10">
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
