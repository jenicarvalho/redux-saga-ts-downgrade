/**
 * Action Types
 */
export enum UsersTypes {
  GET_USERS_REQUEST = '@users/GET_USERS_REQUEST',
  GET_USERS_SUCCESS = '@users/GET_USERS_SUCCESS',
  GET_USERS_FAILURE = '@users/GET_USERS_FAILURE',
}


export interface Users {
  id: number,
  name: string
}

export interface UsersArray {
  data?: Users[]
}