import { userFetcher } from "@/helpers";
import { GET_SELLER_STORE } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useSellerStore(url?: string) {
  return useQuery(["seller-store", url], () => userFetcher(GET_SELLER_STORE, { shopUrl: url }));
}
