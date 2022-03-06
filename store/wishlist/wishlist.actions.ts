import { userFetcher, userFetcherWithAuth } from "@/helpers";
import { AddToWishlistPayload } from "@/interfaces/commonTypes";
import { Dispatch } from "redux";
import { AddToWishlist, GetWishlists } from "./wishlist.queries";
import { WishlistType } from "./wishlist.types";

export const clearWishlist = () => ({
  type: WishlistType.CLEAR,
  payload: null,
});

export function setLoading() {
  return {
    type: WishlistType.LOADING,
  };
}

export function createWishlist(payload: AddToWishlistPayload, token: string) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcherWithAuth(AddToWishlist, payload, token);
      // console.log(res);
      message.success("added to wishlist", 5);
      dispatch({
        type: WishlistType.ADD_WISHLIST,
        payload: res.addToWishlist,
      });
    } catch (err) {
      message.error(err.message.slice(0, err.message.indexOf(".")), 5);
      dispatch({
        type: WishlistType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}

export function getWishList(token: string) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcher(GetWishlists, { token });
      dispatch({
        type: WishlistType.GET_WISHLISTS,
        payload: res.wishlists,
      });
    } catch (err) {
      message.error(err.message);
      dispatch({
        type: WishlistType.ERROR,
        payload: err.message,
      });
    }
  };
}
