import {
  CLEAR_ACCOUNT,
  CREATE_ACCOUNT,
  SET_LOADING,
} from "../account/account.types";

const initialState = {
  status: false,
  emailText: null,
  message: null,
  email: '',
  loading: false,
};

export function createAccountReducer(state: typeof initialState = initialState, action: any) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case CLEAR_ACCOUNT: 
      return {
        ...initialState,
      };
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
}
