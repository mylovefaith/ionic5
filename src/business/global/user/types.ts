export const SET_USER = 'SET_USER';
export const CLEAN_USER = 'CLEAN_USER';

// Action Types
export interface SetUserType {
  type: typeof SET_USER;
  user: UserModel
};

export interface CleanUserType {
  type: typeof CLEAN_USER;
}

export type UserActionTypes = SetUserType | CleanUserType;

// Reducer Model
export interface UserModel {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}
