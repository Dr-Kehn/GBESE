import React from 'react'

export default function Reset() {
  return (
    <section className="bg-[#fafafa] min-h-screen flex flex-col">
      <header className="p-10">
        <div className="flex items-center space-x-3">
          <img
            alt="Gbese logo blue icon with three stylized shapes"
            className="w-[100px]"
            height="40"
            src="/image/Logo.png"
            width="40"
          />
        </div>
      </header>
      <section className="flex flex-1 justify-center items-center px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <section
          className="bg-white rounded-2xl p-10 max-w-md w-full drop-shadow-sm"
          style={{ boxShadow: '0 0 10px rgb(0 0 0 / 0.03)' }}
        >
          <h1 className="font-extrabold text-xl text-[#111827] mb-3">
            Set A Password
          </h1>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">
            Your previous password has been reseted. Please set a new password
            for your account.
          </p>
          <form className="space-y-8">
            <div>
              <label
                className="block mb-2 text-sm text-[#111827] font-normal"
                htmlFor="create-password"
              >
                <span className="text-red-600 mr-1">*</span>
                Create Password
              </label>
              <input
                className="w-full border border-blue-600 rounded-lg px-4 py-3 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                id="create-password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm text-[#111827] font-normal"
                htmlFor="confirm-password"
              >
                <span className="text-red-600 mr-1">*</span>
                Confirm Password
              </label>
              <input
                className="w-full border border-blue-600 rounded-lg px-4 py-3 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                id="confirm-password"
                placeholder="Confirm Password"
                required
                type="password"
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white rounded-lg py-3 text-center text-base font-normal hover:bg-blue-700 transition"
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>
        <section className="hidden md:flex flex-1 justify-center items-center pl-16">
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
  );
}
