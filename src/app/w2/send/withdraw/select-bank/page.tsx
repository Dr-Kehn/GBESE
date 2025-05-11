"use client";

import React, { useEffect, useState } from 'react';
import { fetchBanks, Bank } from '../../../../../lib/accountDetails';
import { useRouter } from 'next/navigation'; // ✅ Updated import
import Link from 'next/link';

const SelectBank: React.FC = () => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const handleBack2 = () => {
    router.back();
  };

  

  useEffect(() => {
    fetchBanks().then((data) => {
      setBanks(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      
      <div className="min-h-screen bg-gray-50 px-4 pt-24">
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm border">
          <button className="text-sm text-gray-500 mb-4 hover:underline" onClick={handleBack2}>
            &larr; Back
          </button>

          <h2 className="text-xl font-semibold text-center mb-1">Select a bank</h2>
          <p className="text-sm text-gray-400 text-center mb-6">
            <Link href="/w2/send/withdraw/new-saved-bank/">+ Add a bank account</Link>
          </p>

          {loading ? (
            <p className="text-center text-gray-400">Loading banks...</p>
          ) : (
            <div className="space-y-3">
              {banks.map((bank, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                const amount = localStorage.getItem("withdrawAmount") || "0";
                
                const query = new URLSearchParams({
                  recipient: `${bank.account}`,
                  bankName: `${bank.name}`,
                  accountNumber: `${bank.accountNumber}`,
                  amount: `${amount}`,
                }).toString();

                router.push(`/w2/send/withdraw/review-details?${query}`);
              
              }}
            >
              <div className="flex items-center gap-3">
                <img src={bank.logo} alt={bank.name} className="w-8 h-8 rounded-full" />
                <div>
                  <p className="font-medium">{bank.name}</p>
                  <p className="text-sm text-gray-500">{bank.account}</p>
                </div>
              </div>
              <span className="text-xl text-gray-400">&rarr;</span>
            </div>
          ))}
            </div>
          )}

          <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectBank;
