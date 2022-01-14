import { getIp, userFetcher, userFetcherWithAuth } from "@/helpers";
import { AddToCartPayload } from "@/interfaces/commonTypes";
import { Dispatch } from "redux";
import { AddToCart, GetCart } from "./cart.queries";
import { CartType } from "./cart.types";

export const clearProduct = () => ({
  type: CartType.CLEAR,
  payload: null,
});

export function setLoading() {
  return {
    type: CartType.LOADING,
  };
}

export function addToCartFunc(payload: AddToCartPayload, token: string) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    setLoading();
    try {
      const res = await userFetcherWithAuth(AddToCart, payload, token);
      //console.log(res);
      message.success(res.addToCart.message, 5);
    } catch (err) {
      console.log(err.message);
      message.error(err.message.slice(0, err.message.indexOf(".")), 5);
      dispatch({
        type: CartType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}

export function getCartFunc(token: string) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const ip = await getIp();
      const res = await userFetcherWithAuth(GetCart, { token, ip }, token);
      //console.log(res);
      dispatch({
        type: CartType.GET_CART,
        payload: res.userCart,
      });
    } catch (err) {
      console.log(err.message);
      message.error(err.message.slice(0, err.message.indexOf(".")), 5);
      dispatch({
        type: CartType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}
