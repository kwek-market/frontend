import { newsLetterType } from "./newsletter.types";

const initialState = {
  loading: false,
  error: null,
  subscriber: {
    id: "",
    email: "",
  },
  message: "",
  status: false,
};

export function subcribeReducer(
  state: typeof initialState = initialState,
  action: any
) {
  switch (action.type) {
    case newsLetterType.SUBSCRIBE:
      return {
        ...state,
        loading: false,
        error: null,
        subscriber: action.payload.subscriber,
        message: action.payload.message,
        status: action.payload.status,
      };
    case newsLetterType.CLEAR_SUBS:
      return {
        ...initialState,
      };
    case newsLetterType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case newsLetterType.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
