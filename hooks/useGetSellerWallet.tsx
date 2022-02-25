import { userFetcher } from "@/helpers";
import { SellerWallet } from "@/interfaces/commonTypes";
import { GET_SELLER_WALLET } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useGetSellerWallet() {
  return useQuery<SellerWallet>(
    "wallet",
    () => userFetcher(GET_SELLER_WALLET),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 20,
    }
  );
}
