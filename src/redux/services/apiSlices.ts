import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import fetchToken from "@/lib/auth";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  prepareHeaders: async (headers) => {
  
    const token = await fetchToken() as { data: { token: string } };
    if (token?.data.token) {
      headers.set("Content-Type", `application/json`);
      headers.set("Accept", `application/json`);
    }        
    return headers;
  },
});

const CustomBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);  

  if (result?.error?.status == 401) {
    window.location.href = "/auth/login";
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: CustomBaseQuery,
  tagTypes: [],
  keepUnusedDataFor: 30,
  endpoints: () => ({}),
});
