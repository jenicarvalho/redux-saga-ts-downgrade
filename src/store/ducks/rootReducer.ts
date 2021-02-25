import { combineReducers } from "redux"

import usuarios from './usuarios'

const createRootReducer = () => combineReducers({
  usuarios
})

export default createRootReducer
