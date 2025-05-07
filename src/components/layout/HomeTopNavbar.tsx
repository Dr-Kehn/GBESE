"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function HomeTopNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#E7EFFB] px-4 sm:px-6 lg:px-20 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image src="/image/Logo.png" alt="Logo" width={100} height={100} />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-sm font-normal">
            <li className="text-[#9ca6b8] flex items-center cursor-pointer select-none">
              Personal
              <FaChevronDown className="text-[#9ca6b8] ml-1 text-xs" />
            </li>
            <li className="text-[#2a5db0] cursor-pointer select-none font-semibold">
              About Us
            </li>
            <li className="text-[#9ca6b8] cursor-pointer select-none">FAQ</li>
          </ul>
        </div>
        <div className=" space-x-2 ml-6 hidden md:flex">
          <button className="px-4 py-1.5 border border-[#2a5db0] rounded text-[#2a5db0] text-xs font-semibold flex items-center justify-center">
            <i className="far fa-file-alt mr-1"></i> Sign in
          </button>
          <button className="px-4 py-1.5 border border-[#2a5db0] rounded text-[#2a5db0] text-xs font-semibold flex items-center justify-center">
            <i className="far fa-file-alt mr-1"></i> Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#2a5db0] text-xl"
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 bg-opacity-20"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-[70%] h-full bg-white p-6 shadow-lg flex flex-col justify-between">
            {/* Close button */}
            <div className="flex justify-between items-center mb-6">
              <Image src="/image/Logo.png" alt="Logo" width={80} height={80} />
              <button
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-600"
              >
                <FaTimes />
              </button>
            </div>

            {/* Nav Items */}
            <ul className="space-y-4 text-xl font-normal">
              <li className="text-[#9ca6b8] flex items-center cursor-pointer select-none">
                Personal
                <FaChevronDown className="text-[#9ca6b8] ml-1 text-xs" />
              </li>
              <li className="text-[#2a5db0] cursor-pointer select-none font-semibold">
                About Us
              </li>
              <li className="text-[#9ca6b8] cursor-pointer select-none">FAQ</li>
            </ul>

            {/* Auth Buttons */}
            <div className="mt-6 flex flex-col space-y-3">
              <button className="w-full px-4 py-2 border border-[#2a5db0] rounded text-[#2a5db0] text-xs font-semibold flex items-center justify-center">
                <i className="far fa-file-alt mr-1"></i> Sign in
              </button>
              <button className="w-full px-4 py-2 border border-[#2a5db0] rounded text-[#2a5db0] text-xs font-semibold flex items-center justify-center">
                <i className="far fa-file-alt mr-1"></i> Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
