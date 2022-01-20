import { userFetcher } from "@/helpers";
import { GetProducts } from "@/store/product/product.queries";
import { useQuery } from "react-query";

function useProduct(payload: { search: any }) {
  return useQuery(["category-items"], () => userFetcher(GetProducts, payload));
}

export default useProduct;
