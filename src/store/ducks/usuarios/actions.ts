import { action } from "typesafe-actions"
import { UsersArray, UsersTypes } from "./types"

export const getUsersRequest = (user: any) => action(UsersTypes.GET_USERS_REQUEST, user)
export const getUsersSuccess = (users: UsersArray) => action(UsersTypes.GET_USERS_SUCCESS, users)
export const getUsersError = () => action(UsersTypes.GET_USERS_FAILURE)
