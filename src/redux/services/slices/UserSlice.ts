import { api } from "../apiSlices";

export interface IUserResponse {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  registrationDate: string;
  baseCreditScore: number;
  walletAddress?: string;
  usdcBalance?: number;
  ethBalance?: number;
  fiatBalance?: number;
  gbeseTokenBalance?: number;
  role: "user" | "lender";
  isKYCVerified: boolean;
  isEmailVerified: boolean;
}

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<IUserResponse, void>({
      query: () => {
        console.log(" getCurrentUser query triggered");
        return "/users/user";
      },
      providesTags: ["User"],
    }),
    getUserByID: builder.query<IUserResponse, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useGetUserByIDQuery,
} = userApi;
