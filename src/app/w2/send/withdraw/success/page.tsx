"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

const Success: React.FC = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/w2/dashboard");
  };

  

  return (
    <div className="min-h-screen bg-gray-50 pt-24 flex items-start justify-center px-4">
  <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-sm border text-center">

    <h2 className="text-lg font-semibold mb-6 mt-2">Successful</h2>

    <div className="bg-gray-50 rounded-xl p-10">
      <Image
        src="/Champion.png"
        alt="Success"
        width={60}
        height={60}
        className="mx-auto mb-6"
      />
      <p className="text-sm text-gray-700 mb-4">Money Successfully Sent</p>
      <button
        onClick={handleHome}
        className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Back Home
      </button>
    </div>
  </div>
</div>

  );
};

export default Success;
