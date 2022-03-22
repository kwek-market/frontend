import { userFetcher } from "@/helpers";
import { GET_SELLER_PROMOTED_PRODUCTS } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function usePromotions(token: string) {
  return useQuery(["promotions"], () =>
    userFetcher(GET_SELLER_PROMOTED_PRODUCTS, { token })
  );
}
