'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function TopNavbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b-2">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/image/Logo.png" alt="Gbese Logo" width={70} height={35} />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 items-center">
        <NavItem href="/w2/dashboard" label="Home" icon="/Home.svg" iconActive="/Home-active.svg" />
        <NavItem href="/w2/send" label="Send" icon="/send.svg" iconActive="/send-active.svg" />
        <NavItem href="/w2/pay" label="Pay" icon="/pay.svg" iconActive="/pay-active.svg" />
        <NavItem href="/w2/card" label="Card" icon="/card.svg" iconActive="/card-active.svg" />
        <NavItem href="/w2/marketplace" label="Marketplace" icon="/marketplace.svg" iconActive="/marketplace-active.svg" />
        <NavItem href="/w2/notification" label="" icon="/notification.svg" iconActive="/notification-active.svg" />
      </nav>

      {/* Account */}
      <Link
        href="/w2/account"
        className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-blue-600"
      >
        <Image src="/account-image.png" alt="" width={30} height={30} />
        <span>Account</span>
      </Link>
    </header>
  );
}

function NavItem({
  href,
  label,
  icon,
  iconActive,
}: {
  href: string;
  label: string;
  icon: string;
  iconActive: string;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center space-x-1 text-sm font-medium',
        isActive ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
      )}
    >
      <Image
        src={isActive ? iconActive : icon}
        alt={label || 'nav-icon'}
        width={20}
        height={20}
      />
      {label && <span>{label}</span>}
    </Link>
  );
}
