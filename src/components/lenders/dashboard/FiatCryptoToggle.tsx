'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const FiatCryptoToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isCrypto = pathname.includes('/w3');

  const [originRole, setOriginRole] = useState<string | null>(null);

  // On first render, detect and store the origin role
  useEffect(() => {
    if (!localStorage.getItem('origin-role')) {
      if (pathname.startsWith('/w2')) {
        localStorage.setItem('origin-role', 'w2');
        setOriginRole('w2');
      } else if (pathname.startsWith('/lenders')) {
        localStorage.setItem('origin-role', 'lenders');
        setOriginRole('lenders');
      }
    } else {
      setOriginRole(localStorage.getItem('origin-role'));
    }
  }, [pathname]);

  const handleFiatClick = () => {
    if (isCrypto && originRole) {
      router.push(`/${originRole}/dashboard`);
    }
  };

  const handleCryptoClick = () => {
    if (!isCrypto) {
      router.push('/w3/dashboard');
    }
  };

  return (
    <div className="flex gap-2 shadow-2xl rounded-[10px] self-end">
      <Button
        className={
          !isCrypto
            ? 'border-0 outline-0 text-white bg-[#0d60d8] w-[50%]'
            : 'border-0 bg-gray-900 outline-0 text-[#0d60d8] w-[50%]'
        }
        variant={!isCrypto ? 'default' : 'outline'}
        onClick={handleFiatClick}
      >
        Fiat
      </Button>
      <Button
        className={
          isCrypto
            ? 'border-0 outline-0 text-white bg-[#0d60d8] w-[50%]'
            : 'border-0 outline-0 bg-inherit text-[#0d60d8] w-[50%]'
        }
        variant={isCrypto ? 'default' : 'outline'}
        onClick={handleCryptoClick}
      >
        Crypto
      </Button>
    </div>
  );
};

export default FiatCryptoToggle;
