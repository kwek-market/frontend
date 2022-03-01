import { userFetcher } from "@/helpers";
import { GET_SELLER_TRANSACTIONS } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useWalletTransaction(token: string) {
  return useQuery("wallet-transaction", () =>
    userFetcher(GET_SELLER_TRANSACTIONS, { token: token })
  );
}
