import {
  SET_USER,
  CLEAR_USER,
  UPDATE_USER,
  SET_ERROR,
  CHANGE_PASSWORD,
  SET_LOADING,
  RESEND_EMAIL,
} from "./user.types";

const initialState = {
  id: null,
  token: null,
  status: false,
  message: null,
  loading: false,
  error: null,
  user: {
    id: null,
    email: null,
    fullName: null,
    username: null,
    lastName: null,
    firstName: null,
    phoneNumber: null,
    isVerified: false,
    isSeller: false,
    lastLogin: null,
    isActive: false,
    dateJoined: null,
  },
};

const userReducer = (
  state: typeof initialState = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        loading: false,
        ...action.payload,
        error: null,
      };
    case CLEAR_USER:
      return {
        ...initialState,
      };
    case RESEND_EMAIL:
      return {
        ...state,
        loading: false,
        error: null,
        status: action.payload.status,
        message: action.payload.message,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: false,
        error: null,
        status: action.payload.status,
        message: action.payload.message,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
        error: null,
        token: action.payload.token,
        user: {
          ...state.user,
          firstName: action.payload.newFirstName,
          lastName: action.payload.newLastName,
          phoneNumber: action.payload.newPhoneNumber,
          email: action.payload.newEmail,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        error: null,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
