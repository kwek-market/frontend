import { SET_USER, CLEAR_USER, UPDATE_USER, SET_ERROR } from './user.types';

const initialState = {
  id: null,
  token: null,
  status: false,
  message: null,
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

const userReducer = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_USER:
      return {
        ...initialState,
      };
    case UPDATE_USER:
      return {
        ...state,
        token: action.payload.token,
        user: {
          ...state.user,
          firstName: action.payload.newFirstName,
          lastName: action.payload.newLastName,
          phoneNumber: action.payload.newPhoneNumber,
          email: action.payload.newEmail,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
