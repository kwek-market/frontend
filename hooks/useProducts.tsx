import { userFetcher } from "@/helpers";
import { GetProducts } from "@/store/product/product.queries";
import { useQuery } from "react-query";

export type PayloadType = {
  page: number;
  pageSize: number;
  search?: string;
  sortBy: string;
  priceRange?: number[];
  sizes?: string[];
  keyword?: string[];
  rating?: number;
};

function useProducts(payload: PayloadType) {
  return useQuery(
    ["category-items", payload],
    () => userFetcher(GetProducts, payload) as Promise<Record<string, any>>,
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 20,
      enabled: payload.search !== undefined,
    }
  );
}

export default useProducts;
