import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
import rootreducer from './rootReducer';

const persistedState = loadState();

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState: persistedState,
});

// don't save all the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
