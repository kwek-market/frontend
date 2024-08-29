import { userFetcherWithAuth } from "@/helpers";
import { EditProductType, UploadProductType } from "@/interfaces/commonTypes";
import { Dispatch } from "redux";
import { CreateProduct, UpdateProduct } from "./product.queries";
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

export function updateProduct(Data: EditProductType, token: string) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const res = await userFetcherWithAuth(UpdateProduct, {...Data, token}, token);
      message.success("Product updated  successfully");
      dispatch({
        type: productType.UPDATE_PRODUCT,
        payload: res.updateProduct,
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
