import { User } from '../models';

export const GET_USER = 'GET_USER';

export interface UserState {
  user: User
}

interface getUserAction {
  type: typeof GET_USER
  payload: User
}

export type UserActionTypes = getUserAction
