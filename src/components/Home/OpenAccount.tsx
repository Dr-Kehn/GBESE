"use client";

import Image from "next/image";
import React from "react";

export default function OpenAccountSteps() {
  return (
    <section className="w-full  py-12 bg-white flex justify-center items-center">
      <div className=" w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Left - Phone Image */}
        <div className="flex justify-center w-full md:w-1/2 relative">
          <Image
            src="/image/gbese-phone.png" // replace with your actual phone mockup image path
            alt="Phone showing Gbese app"
            width={600}
            height={600}
            className=" w-[300px] md:w-[150vh] object-contain"
          />
        </div>

        {/* Right - Steps */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl w-[10w] font-bold text-[#031733] mb-8 text-center md:text-left">
            Open an Account
            <br />
            in 5 minutes
          </h2>

          <div className="space-y-6 ">
            {[
              {
                id:1,
                title: "Download the app",
                desc: "Go to Playstore or Appstore to download the Gbese App and get started.",
              },
              {id:2,
                title: "Sign Up",
                desc: "Go to Playstore or Appstore to download the Gbese App and get started.",
              },
              {
                id:3,
                title: "Verify your Details",
                desc: "Select username & password. Provide your BVN and KYC details and you'll face a 60s verification.",
              },
              {
                id:4,
                title: "Transfer Your Gbese",
                desc: "Send or receive funds from anyone using the Gbese virtual debit wallet.",
              },
            ].map((step, index) => (
              
                  <div
                    key={index}
                    className={`flex justify-center md:justify-start items-center  gap-4   ${index % 2 === 1 && "md:translate-x-[-5vw]"}`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F8FF] text-[#07377B] text-sm font-bold">
                      {index + 1}.
                    </div>
                    <div className="bg-[#F5F8FF] p-4 w-[80vw] md:w-[25vw] gap-4  rounded-lg">
                      <p className="font-semibold text-[#07377B]">
                        {step.title}
                      </p>
                      <p className="text-[10px] text-[#07377B] mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
            
            
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
