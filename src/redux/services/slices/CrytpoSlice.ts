import { api } from "../apiSlices";

interface ICryptoBalance {
  usdcBalance: Number;
  ethBalance: Number;
  gbeseTokenBalance: Number;
}

const cryptoApiConfig = api.enhanceEndpoints({ addTagTypes: ["Crypto"] });
const cryptoApi = cryptoApiConfig.injectEndpoints({
  endpoints: (builder) => ({
    internalTransfer: builder.mutation({
      query: (body) => ({
        url: "/transfer/internal",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Crypto"],
    }),

    externalTransfer: builder.mutation({
      query: (body) => ({
        url: "/transfer/external",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Crypto"],
    }),

    getUserTokenBalances: builder.query<ICryptoBalance, ICryptoBalance>({
      query: () => ({
        url: `/crypto/balace`,
        method: "GET",
        providesTags: ["Crypto"],
      }),
    }),

    getUserUsdcBalance: builder.query({
      query: () => ({
        url: `/crypto/balance/usdc`,
        method: "GET",
        providesTags: ["Crypto"],
      }),
    }),
  }),
});

export const {
  useExternalTransferMutation,
  useInternalTransferMutation,
  useGetUserTokenBalancesQuery,
  useGetUserUsdcBalanceQuery,
} = cryptoApi;
