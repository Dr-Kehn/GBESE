"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaFileAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeTopNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full bg-[#E7EFFB] px-4 sm:px-6 lg:px-20 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image src="/image/Logo.png" alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-sm font-normal">
           <li
              className={
                isActive("/")
                  ? "text-[#2a5db0] font-semibold"
                  : "text-[#9ca6b8] font-normal"
              }
            >
             <Link href='/'> Home </Link>
            </li>
            <li
              className={
                isActive("/about")
                  ? "text-[#2a5db0] font-semibold"
                  : "text-[#9ca6b8] font-normal"
              }
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              className={
                isActive("/faq")
                  ? "text-[#2a5db0] font-semibold"
                  : "text-[#9ca6b8] font-normal"
              }
            >
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-2 ml-6 hidden md:flex">
          <Link href="/auth/login">
            <button className="px-4 cursor-pointer py-1.5 border border-[#2a5db0] rounded text-[#2a5db0] text-xs font-semibold flex items-center justify-center">
              <i className="far fa-file-alt mr-1"></i> Sign in
            </button>
          </Link>
          <Link href="/auth/sign-up">
            <button className="px-4 cursor-pointer py-1.5 border border-[#2a5db0] rounded text-[#2a5db0] text-xs font-semibold flex items-center justify-center">
              <i className="far fa-file-alt mr-1"></i> Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#2a5db0] text-xl cursor-pointer"
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-[70%] h-full bg-white p-6 shadow-lg flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <Image src="/image/Logo.png" alt="Logo" width={80} height={80} />
              <button
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-600"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="space-y-4 text-xl font-normal">
             <li
              className={
                isActive("/")
                  ? "text-[#2a5db0] font-semibold"
                  : "text-[#9ca6b8] font-normal"
              }
            >
               <Link href='/'> Home </Link>
              
              </li>
              <li
                className={
                  isActive("/about")
                    ? "text-[#2a5db0] font-semibold"
                    : "text-[#9ca6b8]"
                }
              >
                <Link href="/about">About Us</Link>
              </li>
              <li
                className={
                  isActive("/faq")
                    ? "text-[#2a5db0] font-semibold"
                    : "text-[#9ca6b8]"
                }
              >
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>

            <div className="mt-6 flex flex-col space-y-3">
              <Link href="/auth/login">
                <button className="w-full px-4 py-2 border border-[#2a5db0] rounded text-[#2a5db0] text-xs font-semibold flex items-center justify-center cursor-pointer">
                  <FaFileAlt className="mr-1" /> Sign in
                </button>
              </Link>
              <Link href="/auth/sign-up">
                <button className="w-full px-4 py-2 border border-[#2a5db0] rounded text-[#2a5db0] text-xs font-semibold flex items-center justify-center cursor-pointer">
                  <FaFileAlt className="mr-1" /> Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
