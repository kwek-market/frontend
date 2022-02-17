import { userFetcherWithAuth } from "@/helpers";
import { GET_SELLER_ORDERS } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useSellerOrders(token: string) {
  return useQuery(
    ["sellerOrders", token],
    () => userFetcherWithAuth(GET_SELLER_ORDERS, { token }, token),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 20,
    }
  );
}
