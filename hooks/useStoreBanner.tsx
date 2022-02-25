import { userFetcher } from "@/helpers";
import { STORE_BANNER } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

export type StoreBannerType = {
  imageUrl: string;
  storeDescription: string;
  token: string;
};

export default function useStoreBanner() {
  return useMutation((payload: StoreBannerType) =>
    userFetcher(STORE_BANNER, payload)
  );
}
