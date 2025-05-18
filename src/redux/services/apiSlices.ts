import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
	baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
	prepareHeaders: async (headers) => {
		headers.set("Content-Type", "application/json");
		return headers;
	},
});

const CustomBaseQuery: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
  console.log("dtat", result.error?.status);
	if (result?.error?.status == 401) {
		window.location.href = "/auth/login";
	}

	if (result.error?.status == "PARSING_ERROR") {
		// refresh session upon expiration
		const refreshSession = await baseQuery(
			{
				url: "/users/refresh-token",
				method: "POST",
				credentials: "include",
			},
			api,
			extraOptions
		);

		if (!refreshSession.data) {
			window.location.href = "/auth/login";
		} else {
			// Retry the initial query
			result = await baseQuery(args, api, extraOptions);
		}
	}

	console.log(result);

	return result;
};

export const api = createApi({
	reducerPath: "api",
	baseQuery: CustomBaseQuery,
	tagTypes: [],
	keepUnusedDataFor: 30,
	endpoints: () => ({}),
});
