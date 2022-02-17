import { OrderTypes } from "./order.types";
import { Order } from "@/interfaces/commonTypes";
import { Dispatch } from "redux";

export function setOrderDetails(order: Order) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: OrderTypes.ORDER_SUCCESS,
      payload: order,
    });
  };
}
