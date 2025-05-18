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
  fiatBalance?: number;  
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
	name: "user",
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
		login: builder.mutation<IUserResponse, { email: string; password: string }>(
			{
				query: (credentials) => ({
          url:"/users/login",
          method: "POST",
          credentials:"include",
          body: JSON.stringify(credentials),
				}),
        invalidatesTags: ["Users"],
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
			}
		),
		getCurrentUser: builder.query<IUserResponse, null>({
			query: () => ({
				url: `/users/user`,
				method: "GET",
        credentials: "include",
				providesTags: ["Users"],
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(setUser(data));
				} catch (error) {}
			},
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
export const { useLoginMutation, useGetCurrentUserQuery, useGetUserByIDQuery } =
	userApi;
export default userSlice.reducer;
