import { userFetcher } from "@/helpers";
import {
  GET_SELLER_DELIVERY_RATE,
  GET_SELLER_PRODUCT_QUALITY,
  GET_SELLER_SUCCESSFUL_SALES,
} from "@/store/seller/seller.queries";
import { useQueries } from "react-query";

export default function useReviewCard(token: string, thisMonth?: boolean ) {
  const payload = { token, thisMonth };
  return useQueries([
    {
      queryKey: "successful-sales",
      queryFn: () => userFetcher(GET_SELLER_SUCCESSFUL_SALES, payload),
    },
    {
      queryKey: "product-quality",
      queryFn: () => userFetcher(GET_SELLER_PRODUCT_QUALITY, { token: payload.token }),
    },
    {
      queryKey: "delivery-rate",
      queryFn: () => userFetcher(GET_SELLER_DELIVERY_RATE, { token: payload.token }),
    },
  ]);
}
