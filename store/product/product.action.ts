import { userFetcherWithAuth } from "@/helpers";
import { EditProductType, UploadProductType } from "@/interfaces/commonTypes";
import { Dispatch } from "redux";
import { CreateProduct, DeleteProduct, UpdateProduct } from "./product.queries";
import { productType } from "./product.types";
import { useMutation } from "react-query";
import { message } from "antd";
import { queryClient } from "../../pages/_app";

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
      const res = await userFetcherWithAuth(UpdateProduct, { ...Data, token }, token);
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



export  function useDeleteProduct(token: string) {
  
  return useMutation(
    (data: {id: string}) =>
      userFetcherWithAuth(DeleteProduct, { id: data.id, token }, token),
    {
      onSuccess: (data) => {
        message.success(data.deleteProduct.message);
        queryClient.invalidateQueries(["product"]);
      },
      onError: (error) => {
        message.error((error as { message: string }).message);
      },
    }
  );
}
