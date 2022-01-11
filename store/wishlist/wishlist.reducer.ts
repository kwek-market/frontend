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
        wishlists: action.payload.wishlists,
        message: action.payload.message,
        status: action.payload.status,
      };
    case WishlistType.ADD_WISHLIST:
      return {
        ...state,
        loading: false,
        error: null,
        wishlist: action.payload.wishlist,
        message: action.payload.message,
        status: action.payload.status,
      };
    case WishlistType.CLEAR_WISHLIST:
      return initialState;
    default:
      return state;
  }
}
