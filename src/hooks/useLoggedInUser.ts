import { useGetCurrentUserQuery } from "@/redux/services/slices/UserSlice";

export const useLoggedInUser = () => {
  const {
    data: userData = null,          
    refetch,                       
    isLoading: userLoading,
    isError: userError,
    status,
  } = useGetCurrentUserQuery(undefined);

  return { userData, userError, userLoading, refetch, status };
};
