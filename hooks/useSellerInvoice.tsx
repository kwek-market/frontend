import { userFetcher } from "@/helpers";
import { GET_SELLERS_INVOICE } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useSellerInvoice(invoiceId: string, token: string) {
  const payload = { invoiceId, token };
  return useQuery(
    "invoice-details",
    () => userFetcher(GET_SELLERS_INVOICE, payload),
    {
      enabled: invoiceId !== undefined,
    }
  );
}
