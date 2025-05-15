import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";

export const useLoggedInUser = () => {
  const {
    data,
    refetch: userRefetching,
    isLoading: userLoading,
    isError: userError,
    status,
  } = 
  useGetCurrentUserQuery(null);

  const userData = data || null;

  return { userData, userError, userLoading, userRefetching, status };
};
