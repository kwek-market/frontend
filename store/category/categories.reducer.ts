import { categoriesType } from "./categories.types";

const initialState = {
  loading: false,
  error: null,
  category: {},
  categories: [{}],
  subCategories: [{}],
  message: "",
  status: false,
};

export function categoriesReducer(
  state: typeof initialState = initialState,
  action: any
) {
  switch (action.type) {
    case categoriesType.GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        error: null,
      };
    case categoriesType.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        error: null,
      };
    case categoriesType.GET_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: action.payload,
        error: null,
      };
    case categoriesType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case categoriesType.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case categoriesType.CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
