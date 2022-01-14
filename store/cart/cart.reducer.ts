import { CartType } from "./cart.types";

const initialState = {
  loading: false,
  error: null,
  cart: [],
  message: "",
  status: false,
};

export default function cartReducer(
  state: typeof initialState = initialState,
  action: any
) {
  switch (action.type) {
    case CartType.GET_CART:
      return {
        ...state,
        loading: false,
        error: null,
        cart: action.payload,
      };
    case CartType.ADD_CART:
      return {
        ...state,
        loading: false,
        error: null,
        cart: [...state.cart, action.payload.cart],
        message: action.payload.message,
        status: action.payload.status,
      };
    case CartType.DELETE_CART:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CartType.DELETE_CART_ITEM:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CartType.CLEAR_CART:
      return {
        ...initialState,
      };
    case CartType.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CartType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
}
