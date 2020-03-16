import { UserModel, SET_USER, CLEAN_USER, UserActionTypes } from './types';
import { AnyActionType } from '../types';

export function setUser(user:UserModel):AnyActionType {
  return { 
    type: SET_USER,
    user
  }
};

export function cleanUser():UserActionTypes {
  return {
    type: CLEAN_USER,
  }
}
