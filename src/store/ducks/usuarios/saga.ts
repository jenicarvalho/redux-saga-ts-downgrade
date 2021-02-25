import { call, put } from "redux-saga/effects"

import { getUsersSuccess, getUsersError } from "./actions"
import UsuariosService from '../../../services/usuarios-service'

export function* getUsuarios() {
  try {
    const response = yield call(UsuariosService.getUsuarios)
    yield put(getUsersSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(getUsersError())
  }
}
