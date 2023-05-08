import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import rootreducer from "./rootReducer";

const persistedState = loadState();

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === "development") {
      return getDefaultMiddleware().concat(logger);
    } else {
      return getDefaultMiddleware();
    }
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
