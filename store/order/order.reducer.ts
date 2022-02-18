import { OrderTypes } from "./order.types";

const initialState = {
  order: {},
};

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case OrderTypes.ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
}
