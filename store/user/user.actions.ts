import { Dispatch } from "redux";
import { userFetcherWithAuth } from "@/helpers";
import { UserUpdate } from "@/interfaces/commonTypes";
import {
  RESEND_VERIFICATION_EMAIL,
  RESET_PASSWORD,
  USER_ACCOUNT_UPDATE,
} from "./user.queries";
import {
  SET_USER,
  CLEAR_USER,
  UPDATE_USER,
  SET_ERROR,
  SET_LOADING,
  CHANGE_PASSWORD,
  RESEND_EMAIL,
} from "./user.types";

export function setLoading() {
  return {
    type: SET_LOADING,
  };
}

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

// update user account
export function updateUser(user: UserUpdate, token: string) {
  return async function (dispatch: Dispatch) {
    try {
      setLoading();
      const result = await userFetcherWithAuth(
        USER_ACCOUNT_UPDATE,
        user,
        token
      );
      // console.log({ result });
      import("antd").then((antd) => {
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
      import("antd").then((antd) => {
        antd.message.error(err.message);
      });
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
}

// send password reser email
export function sendPasswordResetEmail(email: string, token: string) {
  return async function (dispatch: Dispatch) {
    try {
      dispatch({
        type: SET_LOADING,
        payload: true,
      });
      const result = await userFetcherWithAuth(
        RESEND_VERIFICATION_EMAIL,
        { email },
        token
      );
      console.log({ result });
      import("antd").then((antd) => {
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
      import("antd").then((antd) => {
        antd.message.error(err.message);
      });
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
}

// change password
export function changePassword(
  changeData: { password1: string; password2: string },
  token: string
) {
  return async function (dispatch: Dispatch) {
    try {
      setLoading();
      const result = await userFetcherWithAuth(
        RESET_PASSWORD,
        changeData,
        token
      );
      import("antd").then((antd) => {
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
      import("antd").then((antd) => {
        antd.message.error(err.message);
      });
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
}

export const logout = () => ({
  type: CLEAR_USER,
  payload: null,
});
