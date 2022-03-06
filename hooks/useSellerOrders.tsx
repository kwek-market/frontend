import { userFetcherWithAuth } from "@/helpers";
import { GET_SELLER_ORDERS } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export type SellerOrdersType = {
  token: string;
  thisMonth: boolean;
  page: number;
  pageSize: number;
};

export default function useSellerOrders(payload: SellerOrdersType) {
  return useQuery(
    ["sellerOrders", payload],
    () => userFetcherWithAuth(GET_SELLER_ORDERS, payload, payload.token),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 20,
    }
  );
}
