import { RootState } from "./rootReducer";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("kwek");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("kwek", serializedState);
  } catch (err) {
    throw new Error(`errors from localstorage.js -: ${err}`);
  }
};
