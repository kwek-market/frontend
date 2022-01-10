import { productType } from "./product.types";

const initialState = {
  loading: false,
  error: null,
  product: [],
  message: "",
  status: false,
};

export function productReducer(
  state: typeof initialState = initialState,
  action: any
) {
  switch (action.type) {
    case productType.CREATE_PRODUCT:
      return {
        ...state,
        loading: false,
        error: null,
        product: action.payload.product,
        message: action.payload.message,
        status: action.payload.status,
      };
    case productType.UPDATE_PRODUCT:
    case productType.DELETE_PRODUCT:
    case productType.GET_PRODUCTS:
    case productType.GET_PRODUCT:
    case productType.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productType.LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
