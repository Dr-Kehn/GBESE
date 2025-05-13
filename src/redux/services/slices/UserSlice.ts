import { api } from "../apiSlices";

interface IUserResponse {
  userId: string;
  username: string;
  email: string;
  phoneNumber: string;
  registrationDate?: Date;
  baseCreditScore: string;
  walletAddress?: string;
  usdcBalance?: string;
  ethBalance?: string;
  gbeseTokenBalance?: string;
  role?: string;
  isKYCVerified?: boolean;
  isEmailVerified?: boolean;
}

const userApiConfig = api.enhanceEndpoints({ addTagTypes: ["Users"] });
const userApi = userApiConfig.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<IUserResponse, IUserResponse>({
      query: () => ({
        url: `/users/user`,
        method: "GET",
        providesTags: ["Users"],
      }),
    }),

    getUserByID: builder.query<IUserResponse, String>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
        providesTags: ["Users"],
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery, useGetUserByIDQuery } = userApi;
