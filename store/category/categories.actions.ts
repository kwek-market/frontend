import { userFetcher } from "@/helpers";
import { Dispatch } from "redux";
import { CATEGORIES, SUBCATEGORIES } from "./categories.queries";
import { categoriesType } from "./categories.types";

export const clearCategories = () => ({
  type: categoriesType.CLEAR,
  payload: null,
});

export function setLoading() {
  return {
    type: categoriesType.LOADING,
  };
}

export function getCategories() {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const response = await userFetcher(CATEGORIES);
      dispatch({
        type: categoriesType.GET_CATEGORIES,
        payload: response.categories,
      });
      // console.log({ response });
    } catch (error) {
      // console.log({ error });
      message.error(error.message);
      dispatch({
        type: categoriesType.ERROR,
        payload: error.message,
      });
    }
  };
}

export function getSubCategories() {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const response = await userFetcher(SUBCATEGORIES);
      console.log({ response });
      dispatch({
        type: categoriesType.GET_SUB_CATEGORIES,
        payload: response.subcategories,
      });
    } catch (error) {
      // console.log({ error });
      message.error(error.message);
      dispatch({
        type: categoriesType.ERROR,
        payload: error.message,
      });
    }
  };
}
