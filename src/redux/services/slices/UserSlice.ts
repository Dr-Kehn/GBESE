import { api } from "../apiSlices";


export interface IUserResponse {
  userId: string;
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

const userApi = api
  .enhanceEndpoints({ addTagTypes: ["Users"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      // GET current authenticated user 
      getCurrentUser: builder.query<IUserResponse, void>({
        query: () => ({ url: "/users/user", method: "GET" }),
        providesTags: ["Users"],
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            localStorage.setItem("user", JSON.stringify(data));
          } catch (error) {
            console.error("Failed to store user in localStorage:", error);
          }
        },
      }),
      

      //fetch user by ID 
      getUserByID: builder.query<IUserResponse, string>({
        query: (id) => ({ url: `/users/${id}`, method: "GET" }),
        providesTags: ["Users"],
      }),
    }),
    overrideExisting: false,
  });

  export const {
    useGetCurrentUserQuery,
    useLazyGetCurrentUserQuery, 
    useGetUserByIDQuery,
  } = userApi;
  

export { userApi };
