import { userFetcher } from "@/helpers";
import { PagePayload } from "@/interfaces/commonTypes";
import { GET_SELLER_REVIEW } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useReviews(payload: PagePayload) {
  return useQuery(["reviews", payload], () => userFetcher(GET_SELLER_REVIEW, payload));
}
