import FaqAccordion from '@/components/Home/FaqAccordion';
import Footer from '@/components/Home/Footer';
import HomeTopNavbar from '@/components/layout/HomeTopNavbar';
import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function FAQ() {
  return (
    <section className="bg-white text-[#0B2E6E]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B2E6E] to-[#14418E] py-20">
        <h1 className="text-white text-center font-extrabold text-3xl sm:text-4xl max-w-3xl mx-auto leading-tight">
          Frequently
          <br />
          Asked Questions
        </h1>
      </section>
      {/* FAQ Section */}
      <FaqAccordion />
      {/* Contact Buttons */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <h2 className="text-[#0B2E6E] font-semibold text-xl mb-6">
          Still have Questions ?
        </h2>
        <div className="flex justify-center space-x-6">
          <button className="bg-[#2563EB] text-white text-xs font-semibold rounded px-6 py-2 hover:bg-[#1E40AF] transition">
            Send us an Email
          </button>
          <button className="bg-[#2563EB] text-white text-xs font-semibold rounded px-6 py-2 hover:bg-[#1E40AF] transition">
            Visit our Help Centre
          </button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="md:max-w-5xl w-full  md:mx-auto  px-2 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#F9FAFB] rounded-lg flex items-center space-x-4 px-4 mx-2 py-4 md:max-w-xs md:mx-auto sm:mx-0">
          <div className="bg-[#B9D0F5] w-10 h-10 rounded-md flex items-center justify-center">
            <FaEnvelope className="text-[#0B2E6E] text-sm" />
          </div>
          <div className="text-xs text-[#0B2E6E]">
            <p className="font-semibold">Email</p>
            <p className="font-normal">prosperobodo@gmail.com</p>
          </div>
        </div>

        <div className="bg-[#F9FAFB] rounded-lg flex items-center space-x-4 px-4 mx-2 py-4 md:max-w-xs md:mx-auto sm:mx-0">
          <div className="bg-[#B9D0F5] w-10 h-10 rounded-md flex items-center justify-center">
            <FaPhoneAlt className="text-[#0B2E6E] text-sm" />
          </div>
          <div className="text-xs text-[#0B2E6E]">
            <p className="font-semibold">Phone</p>
            <p className="font-normal">+234 70 876 78904</p>
          </div>
        </div>

        <div className="bg-[#F9FAFB] rounded-lg flex items-center space-x-4 px-4 mx-2 py-4 md:max-w-xs md:mx-auto sm:mx-0">
          <div className="bg-[#B9D0F5] w-10 h-10 rounded-md flex items-center justify-center">
            <FaMapMarkerAlt className="text-[#0B2E6E] text-sm" />
          </div>
          <div className="text-xs text-[#0B2E6E]">
            <p className="font-semibold">Address</p>
            <p className="font-normal">Independence Layout Enugu</p>
          </div>
        </div>
      </section>
    </section>
  );
}
