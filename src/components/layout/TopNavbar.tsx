'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'

export default function TopNavbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/image/Logo.png" alt="Gbese Logo" width={70} height={35} />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 items-center">
        <NavItem href="/dashboard" label="HOME" icon="/Home.svg" />
        <NavItem href="/send" label="SEND" icon="/send.svg" />
        <NavItem href="/pay" label="PAY" icon="/pay.svg" />
        <NavItem href="/card" label="CARD" icon="/card.svg" />
        <NavItem href="/marketplace" label="MARKETPLACE" icon="/marketplace.svg" />
        <NavItem href="/notification" label="" icon="/notification.svg" />
      </nav>

      {/* Account */}
      <Link
        href="/account"
        className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-blue-600"
      >
        <User className="h-5 w-5" />
        <span>ACCOUNT</span>
      </Link>
    </header>
  )
}

function NavItem({ href, label, icon }: { href: string; label: string; icon: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center space-x-1 text-sm font-medium',
        isActive ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
      )}
    >
      <Image src={icon} alt={label} width={20} height={20} />
      <span>{label}</span>
    </Link>
  )
}
