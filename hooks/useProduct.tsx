import { userFetcher } from "@/helpers";
import { GetProduct } from "@/store/product/product.queries";
import { useQuery } from "react-query";

function useProduct(payload: { id: string }) {
  return useQuery(["product"], () => userFetcher(GetProduct, payload), {
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 20,
  });
}

export default useProduct;
