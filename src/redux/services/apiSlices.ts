import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import Cookies from "js-cookie";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const mutex = new Mutex();

const rawBaseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = Cookies.get("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<any, unknown, unknown> = async (
  args,
  api,
  extraOptions
) => {

  console.log("🔍 baseQueryWithReauth triggered with args:", args);

  await mutex.waitForUnlock();

  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error && [401, 403].includes(result.error.status as number)) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        console.log("➡️ 401 detected, attempting token refresh at:", `${baseUrl}/users/refresh-token`);

        const refreshResult = await rawBaseQuery(
          { url: "/users/refresh-token", method: "POST" },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          const newToken = (refreshResult.data as any).accessToken;
          console.log("Refresh succeeded, new token:", newToken);

          Cookies.set("accessToken", newToken);
          // Retry the original query with new token
          result = await rawBaseQuery(args, api, extraOptions);
        } else {
          console.warn("Refresh failed, redirecting to login");
          Cookies.remove("accessToken");
          window.location.href = "/auth/login";
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await rawBaseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Fund", "LoanOffers"],
  endpoints: () => ({}),
});
