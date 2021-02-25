import { Reducer } from "redux"
import { UsersTypes } from "./types"

const INITIAL_STATE: any = {
  objetoUsuario: {},
  loading: false
}

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.GET_USERS_REQUEST:
      return { 
        ...state, 
        loading: true
      } 
    case UsersTypes.GET_USERS_SUCCESS:
      return { 
        ...state, 
        objetoUsuario: action.payload,
        loading: false
      } 
    case UsersTypes.GET_USERS_FAILURE:
      return { 
        ...state, 
        loading: false
      } 
    default:
      return state
  }
}

export default reducer
