import { api } from "../apiSlices";

interface ILoans {
  borrowerId: string;
  lenderId: string;
  principalAmount: number;
  interestRate: number;
  term: number;
  startDate: Date;
  endDate: Date;
  currentHolderId: string;
  originalBorrowerId: string;
}

const deptApiConfig = api.enhanceEndpoints({ addTagTypes: ["Dept"] });
const deptApi = deptApiConfig.injectEndpoints({
  endpoints: (builder) => ({
    uploadDeptToMarketplace: builder.mutation<string, {loanId: string}>({
      query: (body) => ({
        url: "/dept-transfer/marketplace/upload",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Dept"],
    }),

    initiateDirectTransfer: builder.mutation<string, {loanId: string, newUserId:string}>({
      query: (body) => ({
        url: "/dept-transfer/direct/initiate",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Dept"],
    }),

    getMarketplaceLoans: builder.query<ILoans, null>({
      query: () => ({
        url: `/dept-transfer/marketplace`,
        method: "GET",
        providesTags: ["Dept"],
      }),
    }),
  }),
});

export const {
  useUploadDeptToMarketplaceMutation,
  useGetMarketplaceLoansQuery,
  useInitiateDirectTransferMutation
} = deptApi;
