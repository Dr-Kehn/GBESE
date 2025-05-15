"use client"
import { setUserEmailForm } from "@/redux/services/userEmailSlice";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";

const SignUP = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [registerAs, setRegisterAs] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!registerAs) {
      toast.error("Please select Lender or Borrower");
      return;
    }

    setIsLoading(true);

    const formData = {
      username: userName,
      password,
      phoneNumber,
      email,
      role: registerAs,
    };

    try {
      console.log("formdata:", formData);
      const response = await axios.post(`/api/signup`, formData);
      dispatch(
        setUserEmailForm({
          email: formData?.email,
        })
      );
      console.log("response from form:", response);
      router.push("/auth/verifyOTP");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white min-h-screen flex flex-col pb-20">
      <div className="flex justify-between items-center px-24 pt-12 pb-6 max-lg:px-8 max-md:px-4 max-sm:px-2 max-sm:items-start max-sm:gap-6">
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <img
              alt="Gbese logo blue icon with three stylized shapes"
              className="w-[100px]"
              height="40"
              src="/image/Logo.png"
              width="40"
            />
          </Link>
        </div>
        <button
          className="flex cursor-pointer items-center gap-2 border border-blue-600 text-blue-600 rounded-md px-4 py-2 text-sm font-medium max-sm:self-start"
          type="button"
          onClick={() => router.back()}
        >
          <i className="fas fa-angle-left"></i>
          Back
        </button>
      </div>

      {/* Form Section */}
      <section className="flex flex-row justify-around mt-10 px-10 md:px-25 flex-wrap-reverse max-sm:gap-10">
        <form
          autoComplete="off"
          className="flex flex-col gap-8 max-w-3xl w-full max-sm:max-w-full"
          onSubmit={onSubmit}
        >
          <h1 className="text-2xl font-semibold text-gray-800 select-none">
            Let’s get started 🎉
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-sm:grid-cols-1">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1" htmlFor="userName">
                <span className="text-red-600">*</span> User Name
              </label>
              <input
                id="userName"
                name="userName"
                placeholder="User Name"
                required
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1" htmlFor="email">
                <span className="text-red-600">*</span> Email Address
              </label>
              <input
                id="email"
                name="email"
                placeholder="Email Address"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1" htmlFor="phone">
                <span className="text-red-600">*</span> Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="08000000000"
                required
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                id="registerAs"
                name="registerAs"
                required
                value={registerAs}
                onChange={(e) => setRegisterAs(e.target.value)}
                className="border border-blue-600 rounded-md px-4 py-3 text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
                <option value="" disabled>
                  Lender/Borrower
                </option>
                <option value="lender">Lender</option>
                <option value="user">Borrower</option>
              </select>
            </div>

            <div className="flex flex-col relative">
              <label className="text-sm text-gray-700 mb-1" htmlFor="password">
                <span className="text-red-600">*</span> Create Password
              </label>
              <input
                id="password"
                name="password"
                placeholder="Password"
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <button
                type="button"
                className="absolute right-3 bottom-3.5 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex flex-col relative">
              <label
                className="text-sm text-gray-700 mb-1"
                htmlFor="confirmPassword"
              >
                <span className="text-red-600">*</span> Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                type={showPasswordConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-blue-600 rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <button
                type="button"
                className="absolute right-3 bottom-3.5 text-gray-500"
                onClick={() => setShowPasswordConfirm((prev) => !prev)}
              >
                {showPasswordConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <label className="flex items-start gap-2 text-gray-600 text-sm max-w-xl">
            <input
              className="mt-1 w-5 h-5 border border-gray-300 rounded"
              type="checkbox"
              required
            />
            <span>
              I Confirm That I Have Read Gbese’s{" "}
              <a className="text-blue-600 underline" href="#">
                Privacy policy
              </a>{" "}
              and{" "}
              <a className="text-blue-600 underline" href="#">
                Terms Of Use
              </a>{" "}
              I Agree To The Use Of My Data In Line Therewith.
            </span>
          </label>

          <div className="flex-1 justify-start items-start w-full">
            <button
              className="mt-6 bg-blue-600 cursor-pointer text-white rounded-md py-3 w-full max-w-md text-center mx-auto text-base font-medium hover:bg-blue-700 transition-colors"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin mx-auto" />
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>

        <div className="relative max-w-lg hidden lg:block">
          <img
            alt="Illustration of a woman standing and using a smartphone"
            className="w-full h-[500px] rounded-lg"
            draggable="false"
            height="500"
            src="/image/rafiki.png"
            width="400"
          />
        </div>
      </section>
    </section>
  );
};

export default SignUP;
