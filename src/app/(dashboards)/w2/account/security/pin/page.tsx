

import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const VerificationOptions: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-screen ">
      <div className="  flex items-center flex-col justify-center md:p-6  p-4 w-full h-screen relative">
        <section className="mb-10  ">
          <button className="absolute left-3 top-10  md:left-10 flex items-center gap-2">
            <FaChevronLeft /> Back
          </button>
          <h1 className="text-[#454545] font-bold text-2xl">Transaction Pin</h1>
        </section>

        <section className="md:w-[40vw] w-full bg-white rounded-3xl p-2 py-10 md:py-16 px-8 h-[65vh] flex flex-col gap-20">
          <div className="w-full md:max-w-xl  ">
            <p className="text-center text-gray-600 font-semibold text-[17px] leading-[22px] mb-6">
              To reset your transaction PIN, you’ll need to verify
              <br className="hidden md:inline px-2" />
              with a verification code.
            </p>
            <p className="text-center text-gray-500 text-[15px] leading-[20px] mb-8">
              Choose how you want to get the code.
            </p>

            <button
              type="button"
              className="w-full text-left bg-white shadow-sm border border-gray-200 rounded-md py-4 px-5 mb-4 flex justify-between items-center hover:shadow-md transition-shadow"
            >
              <div>
                <p className="text-gray-700 font-semibold text-[16px] leading-[20px] mb-1">
                  With Code
                </p>
                <p className="text-gray-500 text-[15px] leading-[20px]">
                  Receive a code via SMS or Whatsapp.
                </p>
              </div>
              <FaChevronRight className="text-gray-600 text-lg" />
            </button>

            <button
              type="button"
              className="w-full text-left bg-white shadow-sm border border-gray-200 rounded-md py-4 px-5 flex justify-between items-center hover:shadow-md transition-shadow"
            >
              <div>
                <p className="text-gray-700 font-semibold text-[16px] leading-[20px] mb-1">
                  With Email
                </p>
                <p className="text-gray-500 text-[15px] leading-[20px]">
                  We’ll send a code to your Gbese email address.
                </p>
              </div>
              <FaChevronRight className="text-gray-600 text-lg" />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default VerificationOptions;
