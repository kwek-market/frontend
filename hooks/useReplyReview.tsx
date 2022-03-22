import { userFetcher } from "@/helpers";
import { PRODUCT_REVIEW } from "@/store/review/review.queries";
import { useMutation } from "react-query";

export type ReplyReview = {
  productId: string;
  reviewId: string;
  token: string;
  vote: string;
};

export default function useReplyReview() {
  return useMutation((payload: ReplyReview) =>
    userFetcher(PRODUCT_REVIEW, payload)
  );
}
