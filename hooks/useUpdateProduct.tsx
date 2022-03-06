import { userFetcherWithAuth } from "@/helpers";
import { CREATE_COUPON } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

export type CouponPayload = {
  code: string;
  days: number;
  userList?: string[];
  validUntil: Date;
  value: number;
};

export default function useUpdateProduct(token: string) {
  return useMutation((payload: CouponPayload) =>
    userFetcherWithAuth(CREATE_COUPON, payload, token)
  );
}
