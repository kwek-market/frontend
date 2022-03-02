import { userFetcher } from "@/helpers";
import { GET_SELLER_INVOICE } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useInvoice(token: string) {
  return useQuery(
    ["invoice"],
    () => userFetcher(GET_SELLER_INVOICE, { token: token }),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 20,
    }
  );
}