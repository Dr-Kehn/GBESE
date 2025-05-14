import Link from 'next/link';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";


export default function ForgetPassword() {
  return (
    <section className="bg-[#F9FAFB] min-h-screen flex flex-col p-8 md:p-16">
      <header className="mb-20">
        <div className="flex items-center gap-2">
          <img
            alt="Gbese logo blue icon with three stylized shapes"
            className="w-[100px]"
            height="40"
            src="/image/Logo.png"
            width="40"
          />
        </div>
      </header>
      <section className="flex flex-col flex-1  py-10 relative w-full mt-5 gap-20">
        <section className="absolute left-4 md:left-[1vw] top-[-3em] pb-10 ">
          <Link
            className="inline-flex items-center gap-2 text-[#2563EB] text-xs font-semibold border border-[#2563EB] rounded-lg px-4 py-2 mb-10 w-max hover:bg-[#2563EB] hover:text-white transition"
            href="#"
          >
            <FaArrowLeft  />
            Back To Login
          </Link>
        </section>
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-24 max-w-7xl w-full md:mx-auto">
          <section className="bg-white rounded-2xl p-8 md:p-12 max-w-lg w-full drop-shadow-sm">
            <h2 className="font-extrabold text-xl md:text-2xl text-[#111827] mb-3">
              Forgot Your Password?
            </h2>
            <p className="text-[#6B7280] text-sm mb-8 leading-relaxed">
              Don’t worry, happens to all of us. Enter your email below to
              recover your password
            </p>
            <form>
              <label
                className="block font-semibold text-[#111827] mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full border border-[#2563EB] rounded-md px-4 py-3 mb-10 text-[#6B7280] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                id="email"
                placeholder="example@gmail.com"
                required
                type="email"
              />
              <button
                className="w-full bg-[#2563EB] text-white rounded-lg py-4 font-medium text-base hover:bg-[#1D4ED8] transition"
                type="submit"
              >
                Submit
              </button>
            </form>
          </section>
          <section className="hidden md:flex-1 max-w-xl">
            <img
              alt="Illustration of a woman standing and using a smartphone with a large tablet device showing a login screen with email and password fields, office background with shelves and clock"
              className="w-full  h-[400px] rounded-lg"
              draggable="false"
              height="500"
              src="/image/login.png"
              width="400"
            />
          </section>
        </section>
      </section>
    </section>
  );
}
