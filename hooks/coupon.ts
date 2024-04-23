import { userFetcherWithAuth, userFetcher } from "@/helpers";
import { CouponType } from "@/interfaces/commonTypes";
import { APPLY_COUPON, CREATE_COUPON } from "@/store/seller/seller.queries";
import { message } from "antd";
import { useMutation } from "react-query";

type Coupon = {
  code: string;
  days: number;
  value: number;
};

export function useCreateCoupon(token: string) {
  return useMutation(
    (payload: Coupon) => userFetcherWithAuth(CREATE_COUPON, payload, token),
    {
      onSuccess: (data: Record<string, any>) => {
        message.success(data.createCoupon.message);
      },
      onError: (error: any) => {
        message.error(error.message);
      },
    }
  );
}

export function useApplyCoupon() {
  return useMutation(
    (payload: { couponId: string; token: string }) =>
      userFetcherWithAuth(APPLY_COUPON, payload, payload.token),
    {
      onSuccess: (data: Record<string, any>) => {
        message.success(data.applyCoupon.message);
      },
      onError: (error: any) => {
        // console.log(error.response.errors[0].message);
        // message.error(error.response.errors[0].message);
        message.error("Invalid Coupon");
      },
    }
  );
}

export function useUnapplyCoupon() {
  return useMutation(
    (payload: { couponId: string; token: string }) =>
      userFetcherWithAuth(APPLY_COUPON, payload, payload.token),
    {
      onSuccess: (data: Record<string, any>) => {
        message.success(data.applyCoupon.message);
      },
      onError: (error: any) => {
        message.error(error.message);
      },
    }
  );
}
