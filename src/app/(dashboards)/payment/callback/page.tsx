"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";

export default function PaymentCallbackPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"processing" | "success" | "failed">("processing");

  useEffect(() => {
    const reference = params.get("reference");

    if (!reference) {
      toast.error("Missing payment reference.");
      setStatus("failed");
      return;
    }

    const verifyPayment = async () => {
      const token = Cookies.get("accessToken"); 
      console.log("🍪 Token from Cookies:", token); 
      console.log("🔁 Reference to verify:", reference); 

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions/fund/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify({ reference }),
        });

        console.log("📦 Response status:", res.status);
        const data = await res.json();
        console.log("📨 Response data:", data);

        if (res.ok) {
          toast.success("Payment successful!");
          setStatus("success");

          const storedUser = localStorage.getItem("currentUser");
          if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.role === "lender") {
              router.push("/lenders/dashboard");
            } else if (user.role === "user") {
              router.push("/dashboard");
            } else {
              toast.error("Unknown user role.");
            }
          } else {
            toast.error("User not found in local storage.");
          }
        } else {
          throw new Error(data?.message || "Verification failed");
        }
      } catch (err: any) {
        console.error("❌ Payment verification failed:", err.message);
        toast.error(err.message || "Payment verification failed.");
        setStatus("failed");
      }
    };

    verifyPayment();
  }, [params, router]);

  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      {status === "processing" && (
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-600 mt-4">Verifying your payment...</p>
        </div>
      )}

      {status === "success" && (
        <div>
          <h2 className="text-green-600 text-xl font-semibold">Payment Verified!</h2>
          <p className="text-gray-700 mt-2">Thank you for your payment.</p>
        </div>
      )}

      {status === "failed" && (
        <div>
          <h2 className="text-red-600 text-xl font-semibold">Verification Failed</h2>
          <p className="text-gray-700 mt-2">There was a problem verifying your payment.</p>
        </div>
      )}
    </div>
  );
}
