"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check window size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Add event listener for closing menu
  useEffect(() => {
    const headerElement = document.querySelector("header");

    const handleCloseMenu = () => {
      setIsMenuOpen(false);
    };

    if (headerElement) {
      headerElement.addEventListener("closeMenu", handleCloseMenu);

      return () => {
        headerElement.removeEventListener("closeMenu", handleCloseMenu);
      };
    }
  }, []);

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-6 py-4 text-white shadow-sm relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/gbese-white.png" alt="Gbese Logo" width={70} height={35} />
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
        <NavItem
          href="/w3/dashboard"
          label="Home"
          icon="/Home.svg"
          iconActive="/Home-active.svg"
        />
        <NavItem
          href="/w3/send"
          label="Send"
          icon="/send.svg"
          iconActive="/send-active.svg"
        />
        <NavItem
          href="/w3/card"
          label="Card"
          icon="/card.svg"
          iconActive="/card-active.svg"
        />
      </nav>

      {/* Account - Desktop */}
      <div className="flex flex-row items-center space-x-4">
        <Link
          href="/w3/account"
          className="hidden md:flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-blue-600"
        >
          <Image
            src="/gbese-icon.svg"
            alt="Account Icon"
            width={20}
            height={20}
          />
          <span>0xf616...7f7e</span>
          <div className="w-0.5 h-5 bg-gray-400"></div>
        </Link>

        <div className="hidden md:flex flex-row items-center space-x-4">
          <NavItem
            href="/w3/notification"
            label=""
            icon="/notification.svg"
            iconActive="/notification-active.svg"
          />
          <NavItem
            href="/w3/faq"
            label=""
            icon="/question-circle.svg"
            iconActive="/notification-active.svg"
          />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black shadow-md z-50 md:hidden">
          <div className="flex flex-col py-2">
            <MobileNavItem
              href="/w3/dashboard"
              label="Home"
              icon="/Home.svg"
              iconActive="/Home-active.svg"
            />
            <MobileNavItem
              href="/w3/send"
              label="Send"
              icon="/send.svg"
              iconActive="/send-active.svg"
            />
            <MobileNavItem
              href="/w3/card"
              label="Card"
              icon="/card.svg"
              iconActive="/card-active.svg"
            />
            <MobileNavItem
              href="/w3/notification"
              label="notification"
              icon="/notification.svg"
            />
            <MobileNavItem
              href="/w3/notification"
              label="FAQ"
              icon="/question-circle.svg"
            />
            <MobileNavItem
              href="/w3/account"
              label="0xf616...7f7e"
              icon="/gbese-icon.svg"
            />
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label, icon, iconActive }: any) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-1 text-sm font-medium",
        isActive ? "text-blue-600" : "text-gray-400 hover:text-blue-600"
      )}
    >
      <Image
        src={isActive ? iconActive : icon}
        alt={label || "nav-icon"}
        width={20}
        height={20}
      />
      {label && <span>{label}</span>}
    </Link>
  );
}

function MobileNavItem({ href, label, icon, iconActive }: any) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-3 px-4 py-3 text-sm font-medium",
        isActive ? "text-blue-600 bg-gray-500" : "text-gray-500 hover:bg-gray-500"
      )}
      onClick={(e) => {
        // Get the setIsMenuOpen from parent component
        const parentHeader = e.currentTarget.closest("header");
        if (parentHeader) {
          const event = new CustomEvent("closeMenu");
          parentHeader.dispatchEvent(event);
        }
      }}
    >
      <Image
        src={isActive ? iconActive : icon}
        alt={label || "nav-icon"}
        width={20}
        height={20}
      />
      <span>{label}</span>
    </Link>
  );
}
