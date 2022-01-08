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
