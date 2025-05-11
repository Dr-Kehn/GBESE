"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const WithdrawFunds: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(true);

    const router = useRouter();

    const handleContinue = () => {
    router.push('/w2/send/withdraw/select-bank/');
    };

    const handleBack1 = () => {
    router.push('/w2/send/');
    };


  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axios.get('/api/user/balance'); // Replace with real endpoint
        setBalance(res.data.balance);
      } catch (err) {
        console.error('Failed to fetch balance:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  const handleMaxClick = () => {
    if (balance !== null) {
      setAmount(balance.toFixed(2));
    }

  };

  return (
    <>
      
      <div className="min-h-screen bg-gray-50 px-4 pt-24">
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm border">
          <div className="mb-4 flex items-center space-x-2">
                  <button
                    className="text-sm text-gray-500 hover:underline flex items-center gap-2"
                    onClick={handleBack1}
                  >
                    <Image
                      src="/arrow-left.svg"
                      alt="Back"
                      width={20}
                      height={20}
                      className="inline"
                    />
                    <span>Back</span>
                  </button>
                </div>
          <h2 className="text-xl font-semibold text-center mb-1">Withdraw funds</h2>
          <p className="text-sm text-gray-400 text-center mb-6">
            Available balance: {loading ? 'Loading...' : `NGN ${balance?.toFixed(2) ?? '0.00'}`}
          </p>

          <div className="mb-6">
            <label htmlFor="amount" className="block text-sm font-medium mb-2">
              Amount
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <input
                type="text"
                value={amount}
                placeholder="₦5,000"
                onChange={(e) => {
                  setAmount(e.target.value);
                  localStorage.setItem("withdrawAmount", e.target.value);
                }}
                className="flex-1 bg-transparent focus:outline-none"
              />
              <button
                type="button"
                className="text-sm text-blue-500 font-medium hover:underline"
                onClick={handleMaxClick}
              >
                Max
              </button>
            </div>
          </div>
        <div className="flex justify-center mt-4">
          <button 
            className="bg-blue-600 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleContinue}>
            Continue
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawFunds;
