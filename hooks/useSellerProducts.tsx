import { userFetcherWithAuth } from "@/helpers";
import { PagePayload } from "@/interfaces/commonTypes";
import { GET_SELLER_PRODUCTS } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useSellerProducts(payload: PagePayload) {
  return useQuery(["sellerProducts", payload], () =>
    userFetcherWithAuth(GET_SELLER_PRODUCTS, payload, payload.token)
  );
}
