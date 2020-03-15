import { localStorage } from '../services';
import { ROUTES } from '../enums';

import { t } from '.';
import { routerTypes } from '../_types';

export function login({email, password}) {
  return async dispatch => {
    dispatch({
      type: t.LOGGING_IN
    })

    const LOGIN_SUCCESS_SIMULATION = true;

    if(LOGIN_SUCCESS_SIMULATION) {
      // Simulate login success
      const fakeResponse = {
        user: {
          id: 1,
          email: email,
          firstName: 'Peter',
          lastName: 'Yoon',
        },
        authToken: 'testauthtoken',
      }

      await localStorage.setAuthToken(fakeResponse.authToken);
      await localStorage.setUserId(fakeResponse.user.id);

      setTimeout(() => {
        dispatch({
          type: t.LOGIN_SUCCESS,
          payload:fakeResponse,
        })
      }, 1000);
    } else {
      // Simulate Login failure
      const fakeResponse = {
        err: "LOGIN",
        message: 'Incorrect credential entered. Please try again.'
      }

      setTimeout(() => {
        dispatch({
          type: t.LOGIN_FAILURE,
          payload: fakeResponse,
        })
      }, 1000);

    }
  }
}

export function logout() {
  return dispatch => {

    localStorage.clearAuth();

    dispatch({
      type: t.LOGOUT_SUCCESS,
    })

    dispatch({
      type: routerTypes.SET_ROUTE,
      payload: ROUTES.LOGIN
    })
  }
}