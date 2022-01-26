import { userFetcher } from "@/helpers";
import { GetProducts } from "@/store/product/product.queries";
import { useQuery } from "react-query";

function useProducts(payload: { search: string }) {
  return useQuery(["category-items"], () => userFetcher(GetProducts, payload), {
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 20,
    enabled: payload.search !== undefined,
  });
}

export default useProducts;
