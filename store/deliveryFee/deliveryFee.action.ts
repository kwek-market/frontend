import { DeliveryFeeEnum } from "./deliveryFee.types";

export function setDeliveryFee(state: string, fee: number, city?: string) {
  return {
    type: DeliveryFeeEnum.SET_DELIVERY_FEE,
    payload: {
      state,
      fee,
      city,
    },
  };
}
