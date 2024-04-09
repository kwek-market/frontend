import { userFetcher } from "@/helpers";
import { CATEGORY, LEASTCATEGORIES } from "@/store/category/categories.queries";
import { useQuery } from "react-query";

function useCategory(payload: { id: string }) {
  return useQuery(["category", payload.id], () => userFetcher(CATEGORY, payload), {
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 20,
    enabled: payload.id !== undefined,
  });
}

export function useGetLeastCategories() {
  return useQuery(["least-categories"], () => userFetcher(LEASTCATEGORIES), {
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 20,
  });
}

export default useCategory;
