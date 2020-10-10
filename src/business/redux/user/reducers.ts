import { UserModel, SET_USER, CLEAN_USER, USER_INIT_STATE } from './types';
import { AnyActionType } from '../types';
import { LOGIN_SUCCESS } from '../auth/types';

export default function(state: UserModel = USER_INIT_STATE, action: AnyActionType): UserModel {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case CLEAN_USER:
      return USER_INIT_STATE;
    case LOGIN_SUCCESS:
      return action.payload.user;
    default:
      return state;
  }
}
