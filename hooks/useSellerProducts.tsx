import { userFetcherWithAuth } from "@/helpers";
import { GET_SELLER_PRODUCTS } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useSellerProducts(token: string) {
  const payload = {
    token,
    
  }
  return useQuery(
    ["sellerProducts", token],
    () => userFetcherWithAuth(GET_SELLER_PRODUCTS, { token }, token),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 20,
    }
  );
}
