import { userFetcher } from "@/helpers";
import { GET_SELLER_REVIEW } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useReviews(token: string) {
  return useQuery(["reviews"], () => userFetcher(GET_SELLER_REVIEW, { token }));
}