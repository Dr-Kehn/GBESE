// src/app/components/dashboard/FiatCryptoToggle.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState } from 'react';


const FiatCryptoToggle = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isCrypto = pathname.includes('/dashboard/crypto');

  const handleToggle = (type: 'fiat' | 'crypto') => {
    if (type === 'fiat') {
      router.push('/dashboard');
    } else {
      router.push('/dashboard/crypto');
    }
  };

  const [toggleFiat, setToggleFiat] = useState(true);

  const handleToggleFiat = () => {
    handleToggle(toggleFiat ? 'fiat' : 'crypto');
    setToggleFiat(prevState => !prevState)
  }


  return (
    <div className="flex gap-2 shadow-2xl bg-[#F5F5F5] rounded-[10px] self-end">
      <Button
      className={toggleFiat ? 'border-0 outline-0 text-white bg-[#0d60d8] w-[50%]' : 'border-0 outline-0 bg-inherit text-[#0d60d8] w-[50%]'}
        variant={!isCrypto ? 'default' : 'outline'}
        onClick={handleToggleFiat}
      >
        Fiat
      </Button>
      <Button
      className={!toggleFiat ? 'border-0 outline-0 text-white bg-[#0d60d8] w-[50%]' : 'border-0 outline-0 bg-inherit text-[#0d60d8] w-[50%]'}
        variant={isCrypto ? 'default' : 'outline'}
        onClick={handleToggleFiat}
      >
        Crypto
      </Button>
    </div>
  );
};

export default FiatCryptoToggle;
