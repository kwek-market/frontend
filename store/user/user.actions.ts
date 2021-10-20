import { SET_USER, CLEAR_USER } from "./user.types"

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user
})

export const logout = () => ({
  type: CLEAR_USER,
  payload: null
})
