import { userFetcher } from "@/helpers";
import { InvoiceDetails } from "@/interfaces/commonTypes";
import { CREATE_INVOICE } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

export type CreateInvoiceType = InvoiceDetails;

export default function useCreateInvoice() {
  return useMutation((payload: CreateInvoiceType) =>
    userFetcher(CREATE_INVOICE, payload)
  );
}
