import { userFetcher } from "@/helpers";
import { GET_SELLER_INVOICE } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export type Payload = { token: string; page: number; pageSize: number };

export default function useInvoice(payload: Payload) {
  return useQuery("invoice", () => userFetcher(GET_SELLER_INVOICE, payload), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 20,
  });
}
