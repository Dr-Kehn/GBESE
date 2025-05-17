import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../apiSlices";
import axios from "axios";

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

interface UserState {
  currentUser: IUserResponse | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserResponse>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});


const userApiConfig = api.enhanceEndpoints({ addTagTypes: ["Users"] });
const userApi = userApiConfig.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IUserResponse, { email: string; password: string }>({
      queryFn: async (credentials) => {
        // url:'/users/login',
        // method: "POST",
        // body: JSON.stringify(credentials),
        // credentials: "include"
        
        try {
          console.log(credentials);
          const response = await axios.post("http://localhost:3002/api/login", credentials,{withCredentials:true});
          console.log(response.data);
          return { data: response.data };
        } catch (error:any) {
          console.log(error);
         return { 
          error: { 
            status: error.response?.status || 500,
            data: error.response?.data || 'An error occurred'
          }
         }
        }
      },
      // Automatically update the Redux state when login is successful
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.log(error);
          // Handle error if needed
          dispatch(logout());
        }
      },
    }),
    getCurrentUser: builder.query<IUserResponse, null>({
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

export const { setUser, logout } = userSlice.actions;
export const { useLoginMutation, useGetCurrentUserQuery, useGetUserByIDQuery } = userApi;
export default userSlice.reducer;
