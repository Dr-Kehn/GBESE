"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import BalanceCard from "@/components/dashboard/BalanceCard";
import { 
    ILoanOfferAdResponse,
  ILoanOfferRequest,
  useCreateNewLoanRequestMutation, 
  useGetSingleLoanOfferMutation 
} from "@/redux/services/slices/loanSlice";
import { toast } from "react-hot-toast"; 


export default function LoanForm() {
  const router = useRouter();
  const params = useParams();
  const loanOfferId = params.id as string

  
  const [createNewLoanRequest, { isLoading: isSubmitting }] = useCreateNewLoanRequestMutation();
  const [getSingleLoanOffer, { isLoading: isLoadingOffer }] = useGetSingleLoanOfferMutation();
  const [loanOfferDetails, setLoanOfferDetails] = useState<ILoanOfferAdResponse>();

  // Form state
  const [formData, setFormData] = useState({
    amount: "",
    purpose: "",
    term: "",
    loanOfferId
  });

  const [hasConsent, setHasConsent] = useState(false);

  const [errors, setErrors] = useState({
    amount: "",
    purpose: "",
    term: "",
    consent: "",
  });
  
  // Fetch loan offer details
  useEffect(() => {
    const fetchLoanOffer = async () => {
      try {        
        const response = await getSingleLoanOffer({ loanOfferId }).unwrap();

        if (response) {
          setLoanOfferDetails(response);
          
          // Pre-fill form with offer details
          setFormData({
            ...formData,
            amount: `₦ ${response.minLoanAmount}`,
            term: `${response.terms} Months`,
          });
        } else {
          toast.error("Loan offer not found");
          router.push("/w2/marketplace");
        }
      } catch (error) {
        console.error("Error fetching loan offer details:", error);
      }
    };
    
    fetchLoanOffer();
  }, [loanOfferId, getSingleLoanOffer, router]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear errors when user types
    // if (errors[name]) {
    //   setErrors({
    //     ...errors,
    //     [name]: "",
    //   });
    // }
  };

  // Handle consent checkbox
  const handleConsentChange = (e: any) => {
    setHasConsent(e.target.checked);
    if (errors.consent) {
      setErrors({
        ...errors,
        consent: "",
      });
    }
  };

  // Form validation
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate amount
    if (!formData!.amount!.trim()) {
      newErrors.amount = "Loan amount is required";
      valid = false;
    } else if (isNaN(Number(formData!.amount!.replace(/[₦,\s]/g, "")))) {
      newErrors.amount = "Please enter a valid amount";
      valid = false;
    }

    // Validate purpose
    if (!formData!.purpose!.trim()) {
      newErrors.purpose = "Purpose is required";
      valid = false;
    }

    // Validate term
    if (!formData!.term!.trim()) {
      newErrors.term = "Repayment term is required";
      valid = false;
    }

    // Validate consent
    if (!hasConsent) {
      newErrors.consent = "You must agree to the terms and conditions";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Parse amount to remove currency symbol and commas
  const parseAmount = (amountStr: string) => {
    return parseFloat(amountStr.replace(/[₦,\s]/g, ""));
  };

  // Parse term to extract the number of months
  const parseTerm = (termStr: string) => {
    const numericValue = parseInt(termStr.match(/\d+/)?.[0] || "0", 10);
    return numericValue || 0;
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const loanRequestData = {
        amount: parseAmount(formData!.amount || ""),
        purpose: formData.purpose,
        term: parseTerm(formData!.term || ""),
        loanOfferId: formData.loanOfferId,
        lenderId: loanOfferDetails!.lenderId._id || {}
      };

      console.log("loanRequestData:", loanRequestData);
      

      // Send the loan request
      const response = await createNewLoanRequest(loanRequestData).unwrap();
      
      // Handle successful response
      toast.success("Loan request submitted successfully!");
      
      // Redirect to appropriate page
      router.push("/w2/dashboard/borrow");
    } catch (error: any) {
      console.error("Error submitting loan request:", error);
      toast.error(error.data?.message || "Failed to submit loan request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Balance Card */}
        <BalanceCard />

        <button
          onClick={() => router.push("/w2/marketplace")}
          className="text-sm text-gray-500 hover:text-gray-700 mt-4 inline-block"
        >
          &lt; Back to Marketplace
        </button>

        {/* Form Container */}
        <div className="mt-6 border border-gray-200 rounded-xl bg-white p-6 sm:p-10">
          <h2 className="text-center text-xl font-bold text-gray-800">Loan Request</h2>
          
          {isLoadingOffer ? (
            <p className="text-center text-gray-500 mt-2">Loading loan offer details...</p>
          ) : loanOfferDetails ? (
            <p className="text-center text-blue-600 mt-1">
              Lender: {loanOfferDetails.lenderId?.username || "Unknown"}
            </p>
          ) : null}
          
          <p className="text-center text-gray-400 mb-6">
            Please provide your loan details
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Loan Amount
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="₦ 200,000"
                  className={`mt-1 w-full rounded-md border ${
                    errors.amount ? "border-red-500" : "border-gray-300"
                  } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                //   readOnly={!!loanOfferDetails}
                />
                {loanOfferDetails && (
                  <p className="text-xs text-gray-500 mt-1">
                    Range: ₦ {loanOfferDetails.minLoanAmount} - ₦ {loanOfferDetails.maxLoanAmount}
                  </p>
                )}
              </div>
              {errors.amount && (
                <p className="mt-1 text-sm text-red-500">{errors.amount}</p>
              )}
            </div>

            {/* Purpose of Loan */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Purpose of Loan
              </label>
              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                placeholder="e.g. School Fees, House Renovation"
                className={`mt-1 w-full rounded-md border ${
                  errors.purpose ? "border-red-500" : "border-gray-300"
                } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.purpose && (
                <p className="mt-1 text-sm text-red-500">{errors.purpose}</p>
              )}
            </div>

            {/* Repayment Term */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Repayment Term
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="term"
                  value={formData.term}
                  onChange={handleChange}
                  placeholder="e.g. 6 Months, 12 Months"
                  className={`mt-1 w-full rounded-md border ${
                    errors.term ? "border-red-500" : "border-gray-300"
                  } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  readOnly={!!loanOfferDetails}
                />
                {loanOfferDetails && (
                  <div className="flex flex-col">
                    <p className="text-xs text-gray-500 mt-1">
                      Term Length: {loanOfferDetails.terms} Month(s)
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Interest Rate: {loanOfferDetails.interestRate}%
                    </p>
                  </div>
                )}
              </div>
              {errors.term && (
                <p className="mt-1 text-sm text-red-500">{errors.term}</p>
              )}
            </div>

            {/* Consent */}
            <div className="flex items-start">
              <input
                id="consent"
                type="checkbox"
                checked={hasConsent}
                onChange={handleConsentChange}
                className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${
                  errors.consent ? "border-red-500" : ""
                }`}
              />
              <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                I consent to the <span className="text-blue-600 underline">Credit Loan</span> and Gbese's{" "}
                <span className="text-blue-600 underline">Terms & Conditions</span>
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-500">{errors.consent}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isLoadingOffer}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Loan Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}