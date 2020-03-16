import { UserModel } from "../user/types";

export const LOGGING_IN = 'LOGGING_IN'
export const LOGGING_OUT = 'LOGGING_OUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// Action Types
export interface LoggingInType {    // loading reducer
  type: typeof LOGGING_IN;
};

export interface LoggingOutType {   // loading reducer
  type: typeof LOGGING_OUT;
}

export interface LoginSuccessType { // user reducer & global reducer
  type: typeof LOGIN_SUCCESS;
  payload: LoginResponseType; 
}

export interface LoginFailureType { // 
  type: typeof LOGIN_FAILURE;
  err: string;
}

export interface LogoutSuccessType {  // loading reducer
  type: typeof LOGOUT_SUCCESS;
}

export interface LogoutFailureType {  // loading reducer
  type: typeof LOGOUT_FAILURE;
  err: string;
}

export type AuthActionTypes = 
  LoggingInType | 
  LoggingOutType | 
  LoginSuccessType | 
  LoginFailureType | 
  LogoutSuccessType | 
  LogoutFailureType;

export interface LoginResponseType {
  authToken: string;
  user: UserModel
} 
