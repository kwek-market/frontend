import { getIp, userFetcher, userFetcherWithAuth } from "@/helpers";
import {
  AddToCartPayload,
  DeleteFromCartPayload,
  RemoveItemFromCartWithOptionId,
} from "@/interfaces/commonTypes";
import { Dispatch } from "redux";
import {
  AddToCart,
  DeleteCart,
  DeleteCartItem,
  GetCart,
  ReduceItemQuantity,
  REMOVE_ITEM_FROM_CART_WITH_OPTION_ID,
} from "./cart.queries";
import { CartType } from "./cart.types";

export const clearCart = () => ({
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
      message.success(res.addToCart.message, 5);
    } catch (err) {
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
      let variable: { ip?: string; token?: string } = !token ? { ip } : { token };
      const res = await userFetcher(GetCart, variable);
      dispatch({
        type: CartType.GET_CART,
        payload: res.userCart,
      });
    } catch (err) {
      dispatch({
        type: CartType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}

export function deleteCartItem(payload: { itemId: string; cartId: string; token: string }) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcher(DeleteCartItem, payload);
      message.success(res.deleteCartItem.message, 5);
    } catch (err) {
      message.error(err.message.slice(0, err.message.indexOf(".")), 5);
      dispatch({
        type: CartType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}

export function deleteCart(payload: Record<any, any>) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcher(DeleteCart, payload);
      console.log(res);
    } catch (err) {
      message.error(err.message.slice(0, err.message.indexOf(".")), 5);
      dispatch({
        type: CartType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}

export function deleteItemInCart(payload: DeleteFromCartPayload) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcher(ReduceItemQuantity, payload);
      message.success(res.decreaseCartItemQuantity.message);
    } catch (err) {
      message.error(err.message.slice(0, err.message.indexOf(".")), 5);
      dispatch({
        type: CartType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}

export function removeItemFromCartWithOptionId(payload: RemoveItemFromCartWithOptionId) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcher(REMOVE_ITEM_FROM_CART_WITH_OPTION_ID, payload);
      message.success(res.removeItemFromCartWithOptionId.message);
    } catch (err) {
      message.error(err.message.slice(0, err.message.indexOf(".")), 5);
      dispatch({
        type: CartType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}
