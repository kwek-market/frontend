import { userFetcher } from "@/helpers";
import { CANCEL_PROMOTION } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

export type CancelPromotionPayload = {
  productId: string;
  token: string;
};

export default function useCancelPromotion() {
  return useMutation((payload: CancelPromotionPayload) =>
    userFetcher(CANCEL_PROMOTION, payload)
  );
}
