import { userFetcher } from "@/helpers";
import { WITHDRAW_FROM_WALLET } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

export type WithdrawFromWalletType = {
  amount: number;
  password: string;
  token: string;
};

export default function useWithdrawFromWallet() {
  return useMutation((payload: WithdrawFromWalletType) =>
    userFetcher(WITHDRAW_FROM_WALLET, payload)
  );
}
