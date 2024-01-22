import { Dispatch } from "redux";
import { searchType } from "./search.types";
import { userFetcher } from "@/helpers";

export function clearSearchData() {
  return {
    type: searchType.CLEAR,
    payload: null,
  };
}

export function setLoading() {
  return {
    type: searchType.LOADING,
  };
}

export function setSearched(search: string, isSearching: boolean) {
  return {
    type: searchType.SEARCHED,
    payload: {
      search: search,
      isSearching: isSearching,
    },
  };
}

export function search(query: string, variables?: any) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading();
      const response = await userFetcher(query, variables);
      // console.log("searchV", response);
      dispatch({
        type: searchType.GET_SEARCH_OBJECTS,
        payload: response,
      });
      // console.log("searchV22", { response });
    } catch (error) {
      //console.log({ error });
      dispatch({
        type: searchType.ERROR,
        // payload: error.message,
        payload: `${error.message}:${error}`,
      });
    }
  };
}
