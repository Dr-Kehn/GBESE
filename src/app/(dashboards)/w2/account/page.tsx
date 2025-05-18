'use client';
import { useGetCurrentUserQuery } from '@/redux/services/slices/UserSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

export default function AccountPage() {

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
  const handleCopy = (value:string) => {
    navigator.clipboard.writeText(value);
    toast.success('copied!');
  };

  const accountOptions = [
    { href: '/w2/account/profile', icon: 'user.svg', label: 'View Profile' },
    { href: '/w2/account/reports', icon: 'statement.svg', label: 'Statement & Reports' },
    { href: '/w2/account/security', icon: 'security.svg', label: 'Security' },
    { href: '/w2/account/saved-cards', icon: 'card.svg', label: 'Saved Cards' },
    { href: '/w2/account/faqs', icon: 'faq.svg', label: 'FAQs' },
    { href: '/w2/account/legal', icon: 'legal.svg', label: 'Legal' },
    { href: '/w2/account/credit-score', icon: 'credit-score.svg', label: 'Gbese Credit Scores' },
    { href: '/w2/account/help', icon: 'help.svg', label: 'Get Help' },
  ];

  return (
    <>
      <div className="p-4 md:p-8 max-w-5xl mx-auto">
        {/* Profile Section */}
        <h2 className="text-center mt-10 mb-6 font-bold">Account</h2>
        <div className="flex justify-center items-center gap-4 mb-8">
          <Image
            src="/user.svg"
            alt="Profile Image"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h2 className="text-sm font-bold">{user!.username}</h2>
            <div className="flex flex-col items-center text-sm text-gray-500 gap-3">
              <button className="flex items-center gap-1">
                <Image onClick={() => handleCopy(`@${user!.username}`)} 
                src="/copy.svg" alt="Copy" width={14} height={14} 
                className="cursor-pointer" />
                <span>@{user!.username}</span>
              </button>
              <button className="flex items-center gap-1">
                <Image onClick={() => handleCopy(user!.phoneNumber)}
                src="/copy.svg" alt="Copy" width={14} height={14}
                className=" cursor-pointer" />
                <span>{user!.phoneNumber}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accountOptions.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center justify-between p-4 border rounded-xl shadow-sm border-none hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <Image src={`/${icon}`} alt={label} width={20} height={20} />
                <span className="font-bold text-sm text-blue-700">
                  {label}
                </span>
              </div>
              <Image src="/arrow-right.svg" alt=">" width={16} height={16} />
            </Link>
          ))}
        </div>

        {/* Sign Out */}
        <div className="flex justify-end mt-6">
          <Link href="/">
          <button className="flex items-center justify-between gap-3 border border-red-500 text-red-600 px-4 py-2 rounded-xl hover:bg-red-50">
            <div className="flex items-center gap-2">
              <Image src="/sign-out.svg" alt="Logout" width={16} height={16} />
              <span className="text-sm font-bold">Sign Out</span>
            </div>
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
