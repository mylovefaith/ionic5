import { UserModel, SET_USER, CLEAN_USER } from './types';
import { AnyActionType } from '../../types';
import { LOGIN_SUCCESS } from '../auth/types';

export const INITIAL_STATE:UserModel = null;

export default function(state:UserModel = INITIAL_STATE, action: AnyActionType):UserModel {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case CLEAN_USER:
      return INITIAL_STATE;
    case LOGIN_SUCCESS:
      return action.payload.user;
    default:
      return state;
  }
}
