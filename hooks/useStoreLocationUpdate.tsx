import { userFetcher } from "@/helpers";
import { STORE_LOCATION_UPDATE } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

export type StoreLocationType = {
  city: string;
  landmark: string;
  lga: string;
  shopAddress: string;
  state: string;
  token: string;
};

export default function useStoreLocationUpdate() {
  return useMutation((payload: StoreLocationType) =>
    userFetcher(STORE_LOCATION_UPDATE, payload)
  );
}
