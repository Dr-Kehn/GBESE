import Footer from '@/components/Home/Footer';
import HomeTopNavbar from '@/components/layout/HomeTopNavbar';
import React from 'react'

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
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-4">
          <button
            aria-controls="faq1"
            aria-expanded="false"
            className="w-full text-left bg-[#E6F0FF] text-[#0B2E6E] font-semibold rounded-lg px-6 py-4 flex justify-between items-center"
          >
            <span className="text-base">What exactly is Gbese?</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <button
            aria-controls="faq2"
            aria-expanded="false"
            className="w-full text-left bg-[#E6F0FF] text-[#0B2E6E] font-semibold rounded-lg px-6 py-4 flex justify-between items-center"
          >
            <span className="text-base">Do you really clear debt?</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <button
            aria-controls="faq3"
            aria-expanded="false"
            className="w-full text-left bg-[#E6F0FF] text-[#0B2E6E] font-semibold rounded-lg px-6 py-4 flex justify-between items-center"
          >
            <span className="text-base">Is it free to subscribe?</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <div
            aria-controls="faq4"
            aria-expanded="true"
            className="w-full bg-[#B9D0F5] text-[#0B2E6E] font-semibold rounded-lg px-6 py-4 flex flex-col"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-base">Is Gbese a loan app?</span>
              <i className="fas fa-chevron-up"></i>
            </div>
            <p className="text-xs font-normal leading-tight">
              No. Gbese doesn’t lend money or trap you in more debt. Instead, we
              empower you with knowledge, resources, and real strategies to
              manage debt and reclaim your financial freedom.
            </p>
          </div>
        </section>
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
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#F9FAFB] rounded-lg flex items-center space-x-4 px-4 py-4 max-w-xs mx-auto sm:mx-0">
            <div className="bg-[#B9D0F5] w-10 h-10 rounded-md flex items-center justify-center">
              <i className="fas fa-envelope text-[#0B2E6E] text-sm"></i>
            </div>
            <div className="text-xs text-[#0B2E6E]">
              <p className="font-semibold">Email</p>
              <p className="font-normal">prosperobodo@gmail.com</p>
            </div>
          </div>
          <div className="bg-[#F9FAFB] rounded-lg flex items-center space-x-4 px-4 py-4 max-w-xs mx-auto sm:mx-0">
            <div className="bg-[#B9D0F5] w-10 h-10 rounded-md flex items-center justify-center">
              <i className="fas fa-phone-alt text-[#0B2E6E] text-sm"></i>
            </div>
            <div className="text-xs text-[#0B2E6E]">
              <p className="font-semibold">Phone</p>
              <p className="font-normal">+234 70 876 78904</p>
            </div>
          </div>
          <div className="bg-[#F9FAFB] rounded-lg flex items-center space-x-4 px-4 py-4 max-w-xs mx-auto sm:mx-0">
            <div className="bg-[#B9D0F5] w-10 h-10 rounded-md flex items-center justify-center"></div>
            <div className="text-xs text-[#0B2E6E]">
              <p className="font-semibold">Address</p>
              <p className="font-normal">Independence Layout Enugu</p>
            </div>
          </div>
        </section>
      </section>


  );
}
