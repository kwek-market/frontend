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

export function createProduct(Data: UploadProductType, token: string) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcherWithAuth(CreateProduct, Data, token);
      message.success("Product uploaded successfully");
      dispatch({
        type: productType.CREATE_PRODUCT,
        payload: res.createProduct,
      });
    } catch (err) {
      message.error(err.message.slice(0, err.message.indexOf(".")), 5);
      dispatch({
        type: productType.ERROR,
        payload: err.message.slice(0, err.message.indexOf(".")),
      });
    }
  };
}
