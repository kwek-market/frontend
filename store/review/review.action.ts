import { Dispatch } from "redux";
import { userFetcherWithAuth } from "@/helpers";
import { PRODUCT_REVIEW } from "./review.queries";
import { ReviewType } from "../../interfaces/commonTypes";
import reviewTypes from "./review.types";

export function setLoading() {
  return function (dispatch: Dispatch) {
    dispatch({
      type: reviewTypes.REVIEW_LOADING,
      payload: true,
    });
  };
}

export function reviewProduct(reviewProduct: ReviewType, token: string) {
  return async function (dispatch: Dispatch) {
    try {
      setLoading();
      const response = await userFetcherWithAuth(
        PRODUCT_REVIEW,
        reviewProduct,
        token
      );

      import("antd").then(({ message }) => {
        response.createSubscriber.status
          ? message.success(response.getReview.message)
          : message.error(response.getReview.message);
      });
      response.getReview.status &&
        dispatch({
          type: reviewTypes.REVIEW_PRODUCT,
          payload: response.getReview,
        });
    } catch (error) {
      dispatch({
        type: reviewTypes.ERROR,
        payload: error.message,
      });
    }
  };
}
