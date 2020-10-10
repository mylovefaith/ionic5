import { Dispatch } from 'redux';

import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LoginResponseType } from './types';
import { routerTypes } from '../router';
import { AnyActionType } from '../types';
import { ROUTES } from '../../enums';
import { localStorage } from '../../services';

export function login({ email, password }: { email: string; password: string }) {
  return async (dispatch: Dispatch<AnyActionType>, getState) => {
    dispatch({
      type: LOGGING_IN,
    });

    const LOGIN_SUCCESS_SIMULATION = true;

    if (LOGIN_SUCCESS_SIMULATION) {
      const fakeResponse: LoginResponseType = {
        authToken: 'testauthtoken',
        user: {
          id: 1,
          email: 'mylovefaith@gmail.com',
          firstName: 'Peter',
          lastName: 'Yoon',
        },
      };

      await localStorage.setAuthToken(fakeResponse.authToken);
      await localStorage.setUserId(1);

      setTimeout(() => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: fakeResponse,
        });
      }, 1000);
    } else {
      // Simulate Login failure
      setTimeout(() => {
        dispatch({
          type: LOGIN_FAILURE,
          err: 'Incorrect credential entered. Please try again.',
        });
      }, 1000);
    }
  };
}

export function logout() {
  return (dispatch: Dispatch<AnyActionType>) => {
    localStorage.clearAuth();

    dispatch({
      type: LOGOUT_SUCCESS,
    });

    dispatch({
      type: routerTypes.SET_ROUTE,
      path: ROUTES.LOGIN,
    });
  };
}
