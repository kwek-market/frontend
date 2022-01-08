import { combineReducers } from "@reduxjs/toolkit";
import { createAccountReducer } from "./account/account.reducer";
import { categoriesReducer } from "./category/categories.reducer";
import { subcribeReducer } from "./newsletter/newsletter.reducer";
import { productReducer } from "./product/product.reducer";
import sellerReducer from "./seller/seller.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  account: createAccountReducer,
  seller: sellerReducer,
  newsLetter: subcribeReducer,
  categories: categoriesReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
