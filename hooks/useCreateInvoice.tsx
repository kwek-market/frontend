import { userFetcher } from "@/helpers";
import { CREATE_INVOICE, GET_SELLER_INVOICE } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

export type CreateInvoiceType = {
  token: string;
};

export default function useCreateInvoice() {
  return useMutation((payload: CreateInvoiceType) =>
    userFetcher(CREATE_INVOICE, payload)
  );
}
