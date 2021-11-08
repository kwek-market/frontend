import { combineReducers } from "@reduxjs/toolkit";
import { createAccountReducer } from "./account/account.reducer";

import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  account: createAccountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
