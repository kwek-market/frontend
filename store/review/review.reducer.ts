import reviewTypes from "./review.types";

const initialState = {
  id: null,
  loading: false,
  error: null,
  email: "",
  status: false,
  message: null,
};

export default function reviewReducer(
  state: typeof initialState = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case reviewTypes.REVIEW_PRODUCT:
      return {
        ...state,
        loading: false,
        email: action.payload.email,
        error: null,
      };
    case reviewTypes.REVIEW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case reviewTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
