import { action } from "typesafe-actions"
import { UsersArray, UsersTypes } from "./types"

export const getUsersRequest = () => action(UsersTypes.GET_USERS_REQUEST)
export const getUsersSuccess = (users: UsersArray) => action(UsersTypes.GET_USERS_SUCCESS, users)
export const getUsersError = () => action(UsersTypes.GET_USERS_FAILURE)
