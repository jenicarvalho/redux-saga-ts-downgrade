import {  takeLatest, all } from "redux-saga/effects"

import { UsersTypes } from "./usuarios/types"
import { getUsuarios } from "./usuarios/saga"

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.GET_USERS_REQUEST, getUsuarios),
  ])
}
