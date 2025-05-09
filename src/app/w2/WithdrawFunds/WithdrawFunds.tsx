import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopNavbar from '../../../components/layout/TopNavbar';
import { useRouter } from 'next/router';

const WithdrawFunds: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(true);

    const router = useRouter();

    const handleContinue = () => {
    router.push('/select-bank');
    };

    const handleBack1 = () => {
    router.push('../send/page');
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
      <TopNavbar />

      <div className="min-h-screen bg-gray-50 px-4 pt-24">
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm border">
          <button 
            className="text-sm text-gray-500 mb-4 hover:underline"
            onClick={handleBack1}>
            &larr; Back</button>

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
                id="amount"
                placeholder="₦5,000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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

          <button 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default WithdrawFunds;
