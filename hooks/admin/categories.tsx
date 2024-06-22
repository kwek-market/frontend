import { userFetcherWithAuth, userFetcher } from "@/helpers";
import { GET_CATEGORIES } from "@/store/admin/admin.queries";
import { useQuery } from "react-query";

export const useGetCategories = (payload: { search: string, visibility?: string }) => {
  return useQuery(["categories-admin", payload], () =>
    userFetcher(GET_CATEGORIES, payload)
  );
};
