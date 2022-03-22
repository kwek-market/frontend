import { userFetcher } from "@/helpers";
import { WALLET_TRANSACTION_SUCCESS } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

export type WalletTransactionSuccessType = {
  token: string;
  walletTransactionId: string;
};

export default function useWalletTransactionSuccess() {
  return useMutation((payload: WalletTransactionSuccessType) =>
    userFetcher(WALLET_TRANSACTION_SUCCESS, payload)
  );
}
