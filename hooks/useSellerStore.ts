import { userFetcher } from "@/helpers";
import { GET_SELLER_STORE, UPDATE_STORE_URL } from "@/store/seller/seller.queries";
import { message } from "antd";
import { useMutation, useQuery } from "react-query";

export default function useSellerStore(url?: string) {
  return useQuery(["seller-store", url], () => userFetcher(GET_SELLER_STORE, { shopUrl: url }));
}

export type StoreUpdateUrlType = {
  shopUrl?: string;
  storeDescription?: string;
  storeBanner?: string;
  token: string;
};

export function useUpdateStoreUrl() {
  return useMutation((payload: StoreUpdateUrlType) => userFetcher(UPDATE_STORE_URL, payload), {
    onSuccess: async data => {
      if (!data.storeUpdate.status) {
        throw Error(data.storeUpdate.message);
      } else {
        // message.success(data.storeUpdate.message);
        // router.push("/admin/marketing/coupon-list");
      }

      // if (onSuccess) {
      //   onSuccess(data);
      // }

      // queryClient.invalidateQueries("admin-coupon");
    },
  });
}
