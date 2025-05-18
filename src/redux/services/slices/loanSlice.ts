import { api } from "../apiSlices";

export interface LoanOfferRequest {
  minLoanAmount: number;
  maxLoanAmount: number;
  interestRate: number;
  terms: number;
}

export interface LoanOfferResponse {
  id: string;
  minLoanAmount: number;
  maxLoanAmount: number;
  interestRate: number;
  terms: number;
  message?: string;
}

const LoanOffersApiConfig = api.enhanceEndpoints({ addTagTypes: ["LoanOffers"] });
const loanApi = LoanOffersApiConfig.injectEndpoints({
  endpoints: (builder) => ({
    postLoanOffer: builder.mutation<LoanOfferResponse, LoanOfferRequest>({
      query: (body) => ({
        url: "/loan-offers/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["LoanOffers"],
    }),
    // You can add more endpoints here like fetchLoanOffers, deleteLoanOffer etc.
  }),
  overrideExisting: false,
});

export const { usePostLoanOfferMutation } = loanApi;
