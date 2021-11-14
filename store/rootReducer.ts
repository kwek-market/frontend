import { combineReducers } from '@reduxjs/toolkit';
import { createAccountReducer } from './account/account.reducer';
import sellerReducer from './seller/seller.reducer';

import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  account: createAccountReducer,
  seller: sellerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
