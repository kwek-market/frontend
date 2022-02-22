import { QueryClient } from "react-query";
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
    const queryClient = new QueryClient();
    const { message } = await import("antd");
    try {
      setLoading();
      const response = await userFetcherWithAuth(
        PRODUCT_REVIEW,
        reviewProduct,
        token
      );

      console.log(response);
      message.success(response.review.message);
      queryClient.invalidateQueries("product");
      // dispatch({
      //   type: reviewTypes.REVIEW_PRODUCT,
      //   payload: response.review,
      // });
    } catch (error) {
      dispatch({
        type: reviewTypes.ERROR,
        payload: error.message,
      });
    }
  };
}
