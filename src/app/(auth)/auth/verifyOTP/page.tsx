"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { clearUserEmailForm } from "@/redux/services/userEmailSlice";
import toast from "react-hot-toast";

export default function verifyOTP() {
  const [hideCode, setHideCode] = React.useState(true);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { email } = useSelector((state: RootState) => state.userEmail);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      otp,
      email,
    };

    try {
      console.log("formdata:", formData);
      const response = await axios.post(`/api/verify-email`, formData);
      console.log("response from form:", response);
      toast.success("Email Verified");
      dispatch(clearUserEmailForm());
      router.push("/auth/login");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
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
          <Link href="/auth/login">
            <span className="text-[#2563EB] inline-flex items-center gap-2  text-xs font-semibold border border-[#2563EB] rounded-lg px-4 py-2 mb-10 w-max hover:bg-[#2563EB] hover:text-white transition">
              <FaArrowLeft />
              Back To Login
            </span>
          </Link>
        </section>
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-24 max-w-7xl w-full md:mx-auto">
          <section className="bg-white rounded-2xl mx-auto p-8 md:p-12 max-w-lg w-full drop-shadow-sm">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
              Verify Code
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              An authentication code has been sent to your email.
            </p>
            <form onSubmit={onSubmit}>
              <label
                htmlFor="code"
                className="block text-gray-700 text-sm mb-1"
              >
                Enter Code
              </label>
              <div className="relative">
                <input
                  id="code"
                  name="code"
                  type={hideCode ? "password" : "text"}
                  value={otp}
                  className="w-full border border-gray-300 rounded-md py-2 pr-10 pl-3 text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  autoComplete="off"
                  onChange={(e) => setOtp(e.target.value)}
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-600 cursor-pointer">
                  {hideCode ? (
                    <FaEye
                      className=""
                      onClick={() => setHideCode(!hideCode)}
                    />
                  ) : (
                    <FaEyeSlash
                      className=""
                      onClick={() => setHideCode(!hideCode)}
                    />
                  )}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Didn’t receive a code?
                <button
                  type="button"
                  className="text-red-600 font-semibold ml-1"
                >
                  Resend
                </button>
              </p>
              <button
                type="submit"
                className="mt-10 cursor-pointer w-full bg-blue-700 hover:bg-blue-800 text-white text-base font-normal py-3 rounded-lg"
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin mx-auto" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </section>
          <section className="hidden lg:flex max-w-xl">
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