import { api } from "../apiSlices";

export interface ILoanOfferRequest {
  minLoanAmount?: number;
  maxLoanAmount?: number;
  interestRate?: number;
  terms?: number;
  amount?: number;
  term?: number;
  loanOfferId?: string;
  purpose?: string;
}

export interface ILoanOfferResponse extends ILoanOfferRequest {
  id: string;
  message?: string;
}

export interface ILoanOfferAdResponse extends ILoanOfferRequest {
  loanRequestId: string;
  lenderId: ILenderData;
  status: "open" | "accepted" | "suspended" | "closed";
  data?: any
}

export interface ILenderData {
  _id: string;
  username: string;
  email: string;
}

const LoanOffersApiConfig = api.enhanceEndpoints({
  addTagTypes: ["LoanOffers"],
});
const loanApi = LoanOffersApiConfig.injectEndpoints({
  endpoints: (builder) => ({
    postLoanOffer: builder.mutation<ILoanOfferResponse, ILoanOfferRequest>({
      query: (body) => ({
        url: "/loan-offers/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["LoanOffers"],
    }),

    createNewLoanRequest: builder.mutation<
      ILoanOfferResponse,
      ILoanOfferRequest
    >({
      query: (body) => ({
        url: "/loan-requests/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["LoanOffers"],
    }),

    getAllLoanOffer: builder.mutation<ILoanOfferAdResponse, null>({
      query: () => ({
        url: "/loan-offers",
        method: "GET",
        providesTags: ["LoanOffers"],
      }),
    }),

    getSingleLoanOffer: builder.mutation<ILoanOfferAdResponse, {loanOfferId: string}>({
      query: ({loanOfferId}) => ({
        url: `/loan-offers/${loanOfferId}`,
        method: "GET",
        providesTags: ["LoanOffers"],
      }),
    }),

    getSingleUserLoanRequests: builder.mutation<ILoanOfferAdResponse, {userId: string}>({
      query: ({userId}) => ({
        url: `/loan-requests/user/${userId}`,
        method: "GET",
        providesTags: ["LoanOffers"],
      }),
    }),

    // You can add more endpoints here like fetchLoanOffers, deleteLoanOffer etc.
  }),
  // overrideExisting: false,
});

export const {
  usePostLoanOfferMutation,
  useGetAllLoanOfferMutation,
  useCreateNewLoanRequestMutation,
  useGetSingleLoanOfferMutation,
  useGetSingleUserLoanRequestsMutation
} = loanApi;
