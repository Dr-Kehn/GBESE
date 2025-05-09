"use client";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001B3D] text-white font-inter px-6 sm:px-10 md:px-16 py-16 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
        <div className="md:max-w-lg flex flex-col gap-6">
          <h2 className="text-2xl font-normal">Gbese</h2>
          <p className="text-sm leading-relaxed font-light max-w-md">
            Gbese is an evolutionary fintech platform that disrupts conventional
            credit systems through an innovative debt transfer mechanism that
            allows users to shift debt obligations with consent (but with
            minimal friction)
          </p>
          <form className="flex flex-col gap-4 max-w-md">
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-transparent border border-white rounded-md py-2 px-3 text-sm placeholder-white focus:outline-none focus:ring-1 focus:ring-white"
            />
            <p className="text-base font-light tracking-wide leading-relaxed">
              Sign In to receive our updates and Newsletters
            </p>
          </form>
        </div>

        <div className="flex flex-col md:flex-row md:gap-20 text-sm font-light">
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Services</li>
              <li>Community</li>
              <li>Testimonial</li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-1">
              <li>Help</li>
              <li>Centre</li>
              <li>Tweet Us</li>
              <li>Feedback</li>
              <li>Website</li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>Help Centre</li>
              <li>Tweet Us</li>
              <li>Feedback</li>
              <li>Website</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-4 text-base font-normal">
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <span>prosperobodo@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+234 91 743 027 06</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t border-white border-opacity-20 mt-12" />
      <nav className="mt-6 flex flex-wrap justify-end gap-8 text-sm font-light">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms of use
        </a>
        <a href="#" className="hover:underline">
          Legal
        </a>
        <a href="#" className="hover:underline">
          Sitemap
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
