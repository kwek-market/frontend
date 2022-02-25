import { userFetcher, userFetcherWithAuth } from "@/helpers";
import { CouponType } from "@/interfaces/commonTypes";
import { APPLY_COUPON, CREATE_COUPON } from "@/store/seller/seller.queries";
import { message } from "antd";
import { useMutation } from "react-query";

export function createCoupon(token: string) {
  return useMutation(
    (payload: CouponType) => userFetcherWithAuth(CREATE_COUPON, payload, token),
    {
      onSuccess: (data) => {
        message.success(data.createCoupon.message);
      },
      onError: (error: any) => {
        message.error(error.message);
      },
    }
  );
}

export function applyCoupon(token: string) {
  return useMutation(
    (payload: { couponId: string; token: string }) =>
      userFetcherWithAuth(APPLY_COUPON, payload, token),
    {
      onSuccess: (data) => {
        message.success(data.applyCoupon.message);
      },
      onError: (error: any) => {
        message.error(error.message);
      },
    }
  );
}

export function unapplyCoupon(token: string) {
  return useMutation(
    (payload: { couponId: string; token: string }) =>
      userFetcherWithAuth(APPLY_COUPON, payload, token),
    {
      onSuccess: (data) => {
        message.success(data.applyCoupon.message);
      },
      onError: (error: any) => {
        message.error(error.message);
      },
    }
  );
}
