import {
  SET_USER,
  CLEAR_USER,
  UPDATE_USER,
  SET_ERROR,
  CHANGE_PASSWORD,
  LOADING,
  RESEND_EMAIL,
  LOGIN_USER,
  GET_USER_DATA,
} from "./user.types";

const initialState = {
  id: null,
  token: null,
  status: false,
  success: false,
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
        success: false,
        ...action.payload,
        error: null,
      };
    case GET_USER_DATA:
      return {
        ...state,
        id: action.payload.id,
        loading: false,
        success: false,
        user: action.payload,
        error: null,
      };
    case LOGIN_USER:
      console.log(action.payload, "login");
      return {
        ...state,
        id: action.payload.user.id,
        loading: false,
        success: false,
        ...action.payload,
        error: null,
      };
    case CLEAR_USER:
      window.localStorage.removeItem("kwek");
      return {
        ...initialState,
      };
    case RESEND_EMAIL:
      return {
        ...state,
        loading: false,
        error: null,
        success: action.payload.status,
        message: action.payload.message,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: false,
        error: null,
        success: false,
        status: action.payload.status,
        message: action.payload.message,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
        error: null,
        success: false,
        token: action.payload.token,
        user: {
          ...state.user,
          firstName: action.payload.newFirstName,
          lastName: action.payload.newLastName,
          phoneNumber: action.payload.newPhoneNumber,
          email: action.payload.newEmail,
        },
      };
    case LOADING:
      return {
        ...state,
        error: null,
        success: false,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
