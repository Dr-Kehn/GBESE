'use client'
import React from 'react'

const Login = () => {
  return (
    <section className="bg-[#f9fafb] min-h-screen flex flex-col">
      <header className="flex justify-between items-center px-8 py-6 bg-[#f9fafb]">
        <div className="flex items-center space-x-2">
          <img
            alt="Gbese logo blue icon with three stylized shapes"
            className="w-[100px]"
            height="40"
            src="/image/Logo.png"
            width="40"
          />
        </div>
        <button
          className="text-[#2563eb] border border-[#2563eb] rounded-md px-4 py-2 text-sm font-medium bg-[#E7EFFB] hover:bg-[#2563eb] hover:text-white transition"
          type="button"
        >
          Open an Account
        </button>
      </header>
      <section className='flex flex-col flex-1  py-10 relative w-full mt-10 gap-20'>
        <div className="absolute left-4 md:left-[10vw] top-1 pb-10 ">
          <h2 className="font-extrabold text-blue-700 md:text-lg text-sm leading-tight">
            Please check that you’re visiting the correct URL
          </h2>
          <p className="font-semibold text-green-900 mt-1 text-base leading-snug">
            https://app.gbese.com
          </p>
        </div>
        <section className="flex flex-col md:flex-row flex-1 px-2 md:px-16 py-10 gap-10 md:gap-20 max-w-[1200px] mx-auto w-full">
          <section className="flex flex-col space-y-2 max-w-md bg-white p-8 rounded-xl shadow-sm">
            <form className="flex flex-col mt-6 space-y-6">
              <h1 className="font-extrabold text-2xl text-black">
                Sign In to Gbese
              </h1>
              <p className="text-gray-500 text-base leading-relaxed">
                To sign in, please type in the email address linked to your
                Gbese account
              </p>
              <div className="flex flex-col space-y-1">
                <label
                  className="font-semibold text-black text-sm"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="border border-[#2563eb] rounded-md px-4 py-3 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  id="email"
                  placeholder="example@gmail.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  className="font-semibold text-black text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border border-[#2563eb] rounded-md px-4 py-3 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  id="password"
                  placeholder="************"
                  type="password"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Forgot password?
                <a className="text-[#2563eb] hover:underline" href="#">
                  Reset it
                </a>
              </p>
              <button
                className="bg-[#2563eb] text-white rounded-md py-3 px-10 w-full md:w-max text-base font-normal hover:bg-[#1e40af] transition"
                type="submit"
              >
                Sign In
              </button>
              <p className="text-gray-400 text-sm max-w-[320px]">
                If you don’t have a gbese account, download the app
                <a className="text-[#2563eb] hover:underline" href="#">
                  here
                </a>
                and open an account in a few minutes
              </p>
            </form>
          </section>
          <section className="flex-1 md:flex justify-center items-center w-[30vw] hidden ">
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

export default Login