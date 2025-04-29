'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, Send, CreditCard, ShoppingCart, User, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function TopNavbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* Logo image placeholder */}
        <Image src="/image/Logo.png" alt="Gbese Logo" width={70} height={35} />

      </div>


      {/* Navigation Links */}
      <nav className="flex space-x-6 items-center">
        <NavItem href="/dashboard" label="HOME" icon='/Home.svg' />
        <NavItem href="/send" label="SEND" icon='/send.svg' />
        <NavItem href="/pay" label="PAY" icon='/pay.svg' />
        <NavItem href="/card" label="CARD" icon='/card.svg' />
        <NavItem href="/marketplace" label="MARKETPLACE" icon='/marketplace.svg' />
        <NavItem href="/notification" label="" icon='/notification.svg' />
      </nav>

      {/* Account Icon */}
      <Link href="/account" className="flex items-center space-x-2 text-sm font-medium text-black">
        <User className="h-5 w-5" />
        <span>ACCOUNT</span>
      </Link>
    </header>
  );
}

function NavItem({ href, label, icon }: { href: string; label: string; icon: string}) {
  return (
    <Link
      href={href} className="flex items-center space-x-1 text-sm font-medium text-black hover:text-blue-600">
      <Image src={icon} alt={label} width={20} height={20} />
      <span>{label}</span>
    </Link>
  );
}
