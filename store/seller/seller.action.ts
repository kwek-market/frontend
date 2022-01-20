import { Dispatch } from "redux";
import { userFetcherWithAuth } from "@/helpers";
import {
  SellerData,
  SellerVerification,
  StartSelling,
} from "../../interfaces/commonTypes";
import {
  COMPLETE_SELLER_VERIFICATION,
  SELLER_DATA,
  SELLER_VERIFICATION,
  START_SELLING,
} from "./seller.queries";
import SellerTypes from "./seller.types";

// loading
export function sellerLoading() {
  return {
    type: SellerTypes.SELLER_LOADING,
    payload: true,
  };
}

export function startSelling(startSelling: StartSelling, token: string) {
  return async function (dispatch: Dispatch) {
    try {
      sellerLoading();
      const response = await userFetcherWithAuth(
        START_SELLING,
        startSelling,
        token
      );
      console.log(response);
      import("antd").then(({ message }) => {
        response.startSelling.status
          ? message.success(response.startSelling.message)
          : message.error(response.startSelling.message);
      });
      response.startSelling.status &&
        dispatch({
          type: SellerTypes.START_SELLING,
          payload: {
            message: response.startSelling.message,
            status: response.startSelling.status,
          },
        });
    } catch (error) {
      import("antd").then(({ message }) => {
        message.error(error.message);
      });
      dispatch({
        type: SellerTypes.SELLER_ERROR,
        payload: error.message,
      });
    }
  };
}

export function sellerVerification(
  sellerVerification: SellerVerification,
  token: string
) {
  return async function (dispatch: Dispatch) {
    try {
      sellerLoading();
      const response = await userFetcherWithAuth(
        SELLER_VERIFICATION,
        sellerVerification,
        token
      );
      console.log(response);
      import("antd").then(({ message }) => {
        response.sellerVerification.status
          ? message.success(response.sellerVerification.message)
          : message.error(response.sellerVerification.message);
      });
      response.sellerVerification.status &&
        dispatch({
          type: SellerTypes.SELLER_VERIFICATION,
          payload: { ...sellerVerification, ...response.sellerVerification },
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function completeSellerVerification(email: string, token: string) {
  return async function (dispatch: Dispatch) {
    try {
      sellerLoading();
      const response = await userFetcherWithAuth(
        COMPLETE_SELLER_VERIFICATION,
        { email },
        token
      );
      console.log(response);
      import("antd").then(({ message }) => {
        response.completeSellerVerification.status
          ? message.success(response.completeSellerVerification.message)
          : message.error(response.completeSellerVerification.message);
      });
      response.completeSellerVerification.status &&
        dispatch({
          type: SellerTypes.COMPLETE_SELLER_VERIFICATION,
          payload: response.completeSellerVerification.data,
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSellerData(token: string) {
  return async function (dispatch: Dispatch) {
    try {
      sellerLoading();
      const response = await userFetcherWithAuth(SELLER_DATA, { token }, token);
      dispatch({
        type: SellerTypes.GET_SELLER,
        payload: response.sellerData,
      });
    } catch (error) {
      import("antd").then(({ message }) => {
        message.error(error.message);
      });
      dispatch({
        type: SellerTypes.SELLER_ERROR,
        payload: error.message,
      });
    }
  };
}

export const clearSeller = () => ({
  type: SellerTypes.CLEAR_SELLER,
  payload: null,
});
