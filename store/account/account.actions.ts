import { Dispatch } from 'redux';
import { CLEAR_ACCOUNT, CREATE_ACCOUNT, SET_LOADING } from '../user/user.types';
import { userFetcher } from '@/helpers';
import { CREATE_USER } from '../user/user.queries';

type AccountType = {
  email: string;
  fullName: string;
  password1: string;
  password2: string;
};

export function createUserAccount(account: AccountType) {
  return async function (dispatch: Dispatch) {
    try {
      dispatch({
        type: SET_LOADING,
        payload: {
          loading: true,
        },
      });
      const result = await userFetcher(CREATE_USER, account);
      console.log({ result });
      import('antd').then((antd) => {
        antd.message.success(result.createUser.message);
      });
      dispatch({
        type: CREATE_ACCOUNT,
        payload: { ...result.createUser, email: account.email },
      });
    } catch (err) {
      import('antd').then((antd) => {
        antd.message.error(err.message);
      });
    }
  };
}

export function clearAccount() {
  return {
    type: CLEAR_ACCOUNT,
    payload: null,
  };
}

// loading
export function setLoading() {
  return {
    type: 'SET_LOADING',
    payload: true,
  };
}
