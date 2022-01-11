import { userFetcher, userFetcherWithAuth } from "@/helpers";
import { UploadProductType } from "@/interfaces/commonTypes";
import { Dispatch } from "redux";
import { CreateProduct, GetProduct, GetProducts } from "./product.queries";
import { productType } from "./product.types";

export const clearProduct = () => ({
  type: productType.CLEAR,
  payload: null,
});

export function setLoading() {
  return {
    type: productType.LOADING,
  };
}

export function getProduct(id: string) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcher(GetProduct, { id });
      console.log(res);
      dispatch({
        type: productType.GET_PRODUCT,
        payload: res.product,
      });
    } catch (err) {
      message.error(err.message.slice(0, err.message.indexOf(".") + 1));
      dispatch({
        type: productType.ERROR,
        payload: err.message.slice(err.message.indexOf(".") + 1),
      });
    }
  };
}

export function getProducts() {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcher(GetProducts);
      console.log(res);
      dispatch({
        type: productType.GET_PRODUCTS,
        payload: res.products,
      });
    } catch (err) {
      message.error(err.message.slice(0, err.message.indexOf(".") + 1));
      dispatch({
        type: productType.ERROR,
        payload: err.message.slice(err.message.indexOf(".") + 1),
      });
    }
  };
}

export function createProduct(Data: UploadProductType, token: string) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcherWithAuth(CreateProduct, Data, token);
      console.log(res);
    } catch (err) {
      message.error(err.message.slice(0, err.message.indexOf(".")), 5);
      dispatch({
        type: productType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}
