import { api } from "../apiSlices";

export interface InitiateFundRequest {
  amount: number;
}
export interface InitiateFundResponse {
  reference: string;
  paymentLink: string;
  message: string;
}

const fundApiConfig = api.enhanceEndpoints({ addTagTypes: ["Fund"] });
const fundApi = fundApiConfig.injectEndpoints({

  endpoints: (builder) => ({
    initiateFund: builder.mutation<InitiateFundResponse, InitiateFundRequest>({
      query: (body) => ({
        url: "/transactions/fund/initiate",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Fund"],
    }),
  }),
  overrideExisting: false,
});

export const { useInitiateFundMutation } = fundApi;
