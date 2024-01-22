import { combineReducers } from "@reduxjs/toolkit";
import { createAccountReducer } from "./account/account.reducer";
import cartReducer from "./cart/cart.reducer";
import { categoriesReducer } from "./category/categories.reducer";
import { subcribeReducer } from "./newsletter/newsletter.reducer";
import { orderReducer } from "./order/order.reducer";
import { productReducer } from "./product/product.reducer";
import sellerReducer from "./seller/seller.reducer";
import userReducer from "./user/user.reducer";
import wishlistReducer from "./wishlist/wishlist.reducer";
import { searchReducer } from "./search/search.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  account: createAccountReducer,
  seller: sellerReducer,
  newsLetter: subcribeReducer,
  categories: categoriesReducer,
  product: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  order: orderReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
