import { userFetcherWithAuth } from "@/helpers";
import { UserUpdate } from "@/interfaces/commonTypes";
import { Dispatch } from "redux";
import { USER_ACCOUNT_UPDATE } from "./user.queries";
import { SET_USER, CLEAR_USER, UPDATE_USER, SET_ERROR } from "./user.types";

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export function updateUser(user: UserUpdate, token: string) {
  return async function (dispatch: Dispatch) {
    try {
      const result = await userFetcherWithAuth(
        USER_ACCOUNT_UPDATE,
        user,
        token
      );
      // console.log({ result });
      import("antd").then((antd) => {
        antd.message.success(
          result.userAccountUpdate && result.userAccountUpdate.message
        );
      });
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

export const logout = () => ({
  type: CLEAR_USER,
  payload: null,
});
