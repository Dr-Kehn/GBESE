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
        <NavItem href="/dashboard" label="HOME" icon={<Home className="h-4 w-4" />} />
        <NavItem href="/send" label="SEND" icon={<Send className="h-4 w-4" />} />
        <NavItem href="/pay" label="PAY" icon={<DollarSign className="h-4 w-4" />} />
        <NavItem href="/card" label="CARD" icon={<CreditCard className="h-4 w-4" />} />
        <NavItem href="/marketplace" label="MARKETPLACE" icon={<ShoppingCart className="h-4 w-4" />} />
      </nav>

      {/* Account Icon */}
      <Link href="/account" className="flex items-center space-x-2 text-sm font-medium text-black">
        <User className="h-5 w-5" />
        <span>ACCOUNT</span>
      </Link>
    </header>
  );
}

function NavItem({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-1 text-sm font-medium text-black hover:text-blue-600"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
