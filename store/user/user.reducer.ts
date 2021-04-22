import { SET_USER, CLEAR_USER } from './user.types'

const initialState = {
  id: null,
}

const userReducer = (state: object = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      }

    case CLEAR_USER:
      return {
        ...initialState
      }
    
    default:
      return state
  }
}

export default userReducer