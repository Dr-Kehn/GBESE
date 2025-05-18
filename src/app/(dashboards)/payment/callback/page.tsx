"use client";

import React from "react";
import { Suspense } from "react";
import PaymentCallbackPage from "@/components/lenders/payment/paymentCallBack";

const PaymentPage = () => {
  return (
    <div>
      <Suspense>
        <PaymentCallbackPage />
      </Suspense>
    </div>
  );
};

export default PaymentPage;
