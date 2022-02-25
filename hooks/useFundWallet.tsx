import { userFetcher } from "@/helpers";
import { FUND_WALLET } from "@/store/seller/seller.queries";
import { QueryClient, useMutation } from "react-query";

export type FundWalletType = {
  paymentRef: string;
  remark: string;
  token: string;
};

export default function useFundWallet() {
  const queryClient = new QueryClient();
  return useMutation((payload: FundWalletType) =>
    userFetcher(FUND_WALLET, payload)
  );
}
