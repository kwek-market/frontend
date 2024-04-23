import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import rootreducer from "./rootReducer";
import { useDispatch, useSelector } from "react-redux";

const persistedState = loadState();

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState: persistedState,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// don't save all the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
