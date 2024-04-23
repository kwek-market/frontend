import { userFetcher } from "@/helpers";
import { GET_SELLER_TRANSACTIONS } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

type Payload = { token: string; page: number; pageSize: number };

export default function useWalletTransaction(payload: Payload) {
  return useQuery(
    "wallet-transaction",
    () =>
      userFetcher(GET_SELLER_TRANSACTIONS, payload) as Promise<
        Record<string, any>
      >
  );
}
