import { userFetcherWithAuth } from "@/helpers";
import { Dispatch } from "redux";
import { SUBCRIBE } from "./newsletter.queries";
import { newsLetterType } from "./newsletter.types";

export function setLoading() {
  return {
    type: newsLetterType.LOADING,
  };
}

export function subscribeToNewsletter(email: string, token: string) {
  return async function (dispatch: Dispatch) {
    try {
      setLoading();
      const response = await userFetcherWithAuth(SUBCRIBE, { email }, token);
      console.log({ response });
      import("antd").then(({ message }) => {
        response.createSubscriber.status
          ? message.success(response.createSubscriber.message)
          : message.error(response.createSubscriber.message);
      });
      response.createSubscriber.status &&
        dispatch({
          type: newsLetterType.SUBSCRIBE,
          payload: response.createSubscriber,
        });
    } catch (error) {
      dispatch({
        type: newsLetterType.ERROR,
        payload: error.message,
      });
    }
  };
}

export const clearSubs = () => ({
  type: newsLetterType.CLEAR_SUBS,
  payload: null,
});
