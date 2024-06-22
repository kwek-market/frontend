import { DeliveryFeeEnum } from "./deliveryFee.types";

type dataType = {
  state: string;
  fee: number;
  city?: string
};

type ActionPayload = {
  type: string;
  payload: any;
};

const initialState: dataType = {
  state: "",
  city: "",
  fee: 0,
};

export function deliveryFeeReducer(
  state: typeof initialState = initialState,
  action: ActionPayload
) {
  switch (action.type) {
    case DeliveryFeeEnum.GET_DELIVERY_FEE:
      return {
        ...state,
      };
    case DeliveryFeeEnum.SET_DELIVERY_FEE:
      return {
        ...state,
        state: action.payload?.state,
        fee: action.payload?.fee,
        city: action.payload.city
      };
    default:
      return state;
  }
}
