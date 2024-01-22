import { searchType } from "./search.types";

type dataType = {
  loading: boolean;
  searched: boolean;
  search: string;
  error: any;
  data: any;
  message: string;
  status: boolean;
};

type ActionPayload = {
  type: string;
  payload: any;
};

const initialState: dataType = {
  loading: false,
  searched: false,
  search: "",
  error: null,
  data: { 1: 1 },
  message: "",
  status: false,
};

export function searchReducer(
  state: typeof initialState = initialState,
  action: ActionPayload
) {
  switch (action.type) {
    case searchType.GET_SEARCH_OBJECTS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case searchType.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case searchType.CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case searchType.LOADING:
      return {
        ...state,
        loading: true,
      };
    case searchType.SEARCHED:
      return {
        ...state,
        searched: action.payload.isSearching,
        search: action.payload.search,
        data: action.payload.isSearching ? state.data : null,
        loading: action.payload.isSearching ? true : false,
      };
    default:
      return state;
  }
}
