import { WishlistType } from "./wishlist.types";

const initialState = {
  loading: false,
  error: null,
  wishlists: [],
  message: "",
  status: false,
};

export default function wishlistReducer(
  state: typeof initialState = initialState,
  action: any
) {
  switch (action.type) {
    case WishlistType.GET_WISHLISTS:
      return {
        ...state,
        loading: false,
        error: null,
        wishlists: action.payload,
        message: action.payload.message,
        status: action.payload.status,
      };
    case WishlistType.ADD_WISHLIST:
      return {
        ...state,
        loading: false,
        error: null,
        message: action.payload.message,
        status: action.payload.status,
      };
    case WishlistType.CLEAR_WISHLIST:
      return initialState;
    case WishlistType.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case WishlistType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
}
