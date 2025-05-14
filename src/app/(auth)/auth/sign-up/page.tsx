'use client'
import React from 'react'

const SignUP = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col pb-20">
      <div className="flex justify-between items-center px-24 pt-12 pb-6 max-lg:px-8 max-md:px-4 max-sm:px-2 max-sm:items-start max-sm:gap-6">
        <div className="flex items-center gap-3">
          <img
            alt="Gbese logo blue icon with three stylized shapes"
            className="w-[100px]"
            height="40"
            src="/image/Logo.png"
            width="40"
          />
        </div>
        <button
          className="flex items-center gap-2 border border-blue-600 text-blue-600 rounded-md px-4 py-2 text-sm font-medium max-sm:self-start"
          type="button"
        >
          <i className="fas fa-angle-left"></i>
          Back
        </button>
      </div>
      <section className="flex flex-row justify-between px-24 max-lg:px-8 max-md:px-4 max-sm:px-2 max-sm:flex-col max-sm:gap-10">
        <form
          autoComplete="off"
          className="flex flex-col gap-8 max-w-3xl w-full max-sm:max-w-full"
          noValidate
        >
          <h1 className="text-2xl font-semibold text-gray-800 select-none">
            Let’s get started
            <span aria-label="party popper emoji" role="img">
              🎉
            </span>
          </h1>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-sm:grid-cols-1">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1" htmlFor="firstName">
                <span className="text-red-600">*</span>
                First Name
              </label>
              <input
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1" htmlFor="lastName">
                <span className="text-red-600">*</span>
                Last Name
              </label>
              <input
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1" htmlFor="email">
                <span className="text-red-600">*</span>
                Email Address
              </label>
              <input
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="email"
                name="email"
                placeholder="Email Address"
                required
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1" htmlFor="phone">
                <span className="text-red-600">*</span>
                Phone Number
              </label>
              <input
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="phone"
                name="phone"
                placeholder="+2348000000000"
                required
                type="tel"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1" htmlFor="password">
                <span className="text-red-600">*</span>
                Create Password
              </label>
              <input
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm text-gray-700 mb-1"
                htmlFor="confirmPassword"
              >
                <span className="text-red-600">*</span>
                Confirm Password
              </label>
              <input
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                type="password"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1" htmlFor="bvn">
                <span className="text-red-600">*</span>
                Bank Verification Number
              </label>
              <input
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="bvn"
                name="bvn"
                placeholder="00000000000000"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm text-gray-700 mb-1"
                htmlFor="registerAs"
              >
                Register As
              </label>
              <select
                className="border border-blue-600 rounded-md px-4 py-3 text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="registerAs"
                name="registerAs"
                required
              >
                <option disabled selected value="">
                  Lender/Borrower
                </option>
                <option value="lender">Lender</option>
                <option value="borrower">Borrower</option>
              </select>
            </div>
          </div>
          <label className="flex items-start gap-2 text-gray-600 text-sm max-w-xl">
            <input
              className="mt-1 w-5 h-5 border border-gray-300 rounded"
              type="checkbox"
            />
            <span>
              I Confirm That I Have Read Gbese’s
              <a className="text-blue-600 underline" href="#">
                Privacy policy
              </a>
              and
              <a className="text-blue-600 underline" href="#">
                Terms Of Use
              </a>
              I Agree To The Use Of My Data In Line Therewith.
            </span>
          </label>
          <div className="flex justify-start items-start w-full">
            <button
              className="mt-6 bg-blue-600 text-white rounded-md py-3 w-full max-w-md text-center mx-auto text-base font-medium hover:bg-blue-700 transition-colors"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="relative max-w-lg max-sm:hidden">
          <img
            alt="Illustration of a woman standing and using a smartphone with a large tablet device showing a login screen with email and password fields, office background with shelves and clock"
            className="w-full  h-[400px] rounded-lg"
            draggable="false"
            height="500"
            src="/image/rafiki.png"
            width="400"
          />
        </div>
      </section>
    </section>
  );
}

export default SignUP