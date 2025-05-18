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

export interface ILoanOfferAddResponse {
  loanRequestId: string;
  lenderId: ILenderData;
  terms: number;
  minLoanAmount: number;
  maxLoanAmount: number;
  interestRate: number;
  status: "open" | "accepted" | "suspended" | "closed";
}

export interface ILenderData {
_id: string,
username: string,
email:  string
}

const LoanOffersApiConfig = api.enhanceEndpoints({
  addTagTypes: ["LoanOffers"],
});
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

    getAllLoanOffer: builder.mutation<ILoanOfferAddResponse, null>({
      query: () => ({
        url: "/loan-offers",
        method: "GET",
        providesTags: ["LoanOffers"],
      }),
    }),

    // You can add more endpoints here like fetchLoanOffers, deleteLoanOffer etc.
  }),
  // overrideExisting: false,
});

export const { usePostLoanOfferMutation, useGetAllLoanOfferMutation } = loanApi;
