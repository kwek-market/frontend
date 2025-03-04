import { getIp, userFetcher, userFetcherWithAuth } from "@/helpers";
import { AnyFunction, UserLogin, UserUpdate } from "@/interfaces/commonTypes";
import { Dispatch } from "redux";
import {
  GET_USER,
  LOGIN_USER,
  RESEND_VERIFICATION_EMAIL,
  RESET_PASSWORD,
  USER_ACCOUNT_UPDATE,
  VERIFY_TOKEN,
} from "./user.queries";
import {
  CHANGE_PASSWORD,
  CLEAR_USER,
  GET_USER_DATA,
  LOADING,
  RESEND_EMAIL,
  SET_ERROR,
  SET_USER,
  UPDATE_USER,
  LOGIN_USER as USERLOGIN,
} from "./user.types";

export const setLoading = () => (dispatch: Dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  });
};

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export function logout() {
  window.localStorage.removeItem("kwek");
  return {
    type: CLEAR_USER,
    payload: null,
  };
}

export function verifyUserToken(token: string) {
  return async function (dispatch: Dispatch) {
    try {
      const res = await userFetcher(VERIFY_TOKEN, { token });
      // console.log(res);
      res.verifyToken.status === false &&
        dispatch({
          type: CLEAR_USER,
          payload: null,
        });
    } catch (err) {
      dispatch({
        type: CLEAR_USER,
        payload: null,
      });
    }
  };
}

export function getUserData(token: string) {
  return async function (dispatch: Dispatch) {
    try {
      setLoading()(dispatch);
      const response = await userFetcherWithAuth(GET_USER, { token }, token);
      // console.log(response);
      dispatch({
        type: GET_USER_DATA,
        payload: response.userData,
      });
    } catch (error) {
      dispatch(logout());
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    }
  };
}

export function loginUser(user: UserLogin, onSuccess: AnyFunction) {
  return async function (dispatch: Dispatch) {
    const { message } = await import("antd");
    try {
      setLoading()(dispatch);
      const myIp = await getIp();
      const response = await userFetcher(LOGIN_USER, { ...user, ip: myIp });
      // console.log(response, "response");

      if (response.loginUser.status === true) {
        message.success(response.loginUser.message);

        dispatch({
          type: USERLOGIN,
          payload: {
            ...response.loginUser,
            user: { ...response.loginUser.user, token: response.loginUser.token },
          },
        });

        onSuccess(response.loginUser);
      } else {
        message.error(response.loginUser.message);
        dispatch(logout());
      }
    } catch (error) {
      message.error(error.message);
      dispatch(logout());
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    }
  };
}

// update user account
export function updateUser(user: UserUpdate, token: string) {
  return async function (dispatch: Dispatch) {
    try {
      setLoading()(dispatch);
      const result = await userFetcherWithAuth(USER_ACCOUNT_UPDATE, user, token);
      // console.log({ result });
      import("antd").then(antd => {
        result.userAccountUpdate
          ? antd.message.success(result.userAccountUpdate.message)
          : antd.message.error(result.userAccountUpdate.message);
      });
      result.userAccountUpdate.status &&
        dispatch({
          type: UPDATE_USER,
          payload: user,
        });
    } catch (err) {
      dispatch(logout());
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
}

// send password reset email
export function sendPasswordResetEmail(email: string, token: string) {
  return async function (dispatch: Dispatch) {
    try {
      setLoading()(dispatch);
      const result = await userFetcherWithAuth(RESEND_VERIFICATION_EMAIL, { email }, token);
      // console.log({ result });
      import("antd").then(antd => {
        result.sendPasswordResetEmail.status
          ? antd.message.success(result.sendPasswordResetEmail.message)
          : antd.message.error(result.sendPasswordResetEmail.message);
      });
      result.sendPasswordResetEmail.status &&
        dispatch({
          type: RESEND_EMAIL,
          payload: result.sendPasswordResetEmail,
        });
    } catch (err) {
      dispatch(logout());
    }
  };
}

// change password
export function changePassword(
  changeData: { password1: string; password2: string; token: string },
  token: string
) {
  return async function (dispatch: Dispatch) {
    try {
      setLoading()(dispatch);
      const result = await userFetcherWithAuth(RESET_PASSWORD, changeData, token);
      import("antd").then(antd => {
        result.changePassword.status
          ? antd.message.success(result.changePassword.message)
          : antd.message.error(result.changePassword.message);
      });
      result.changePassword.status &&
        dispatch({
          type: CHANGE_PASSWORD,
          payload: result.changePassword,
        });
    } catch (err) {
      dispatch(logout());
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
}
