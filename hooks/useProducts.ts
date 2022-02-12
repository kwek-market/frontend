import { userFetcher } from "@/helpers";
import { GetProducts } from "@/store/product/product.queries";
import { useQuery } from "react-query";

function useProducts(payload: { page: number, search: string }) {
  return useQuery(["category-items", payload], () => userFetcher(GetProducts, payload), {
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 20,
    enabled: payload.search !== undefined,
  });
}

export default useProducts;
