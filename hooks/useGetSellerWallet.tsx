import { userFetcher } from "@/helpers";
import { SellerWallet } from "@/interfaces/commonTypes";
import { GET_SELLER_WALLET } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

type WalletType = {
  getSellerWallet: SellerWallet[];
};

export default function useGetSellerWallet(token: string) {
  return useQuery<WalletType>(
    "wallet",
    () => userFetcher(GET_SELLER_WALLET, { token: token }),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 20,
    }
  );
}
