import { localStorage } from '../services';
import { t } from './';

export function login(email, password) {
  return async dispatch => {

    /*
    dispatch({
      type: t.LOGGING_IN
    })
    */
 
      const fakeResponse = {
        user: {
          id: 1,
          email: 'mylovefaith@gmail.com',
          firstName: 'Peter',
          lastName: 'Yoon',
        },
        authToken: 'testauthtoken',
      }

      await localStorage.setAuthToken(fakeResponse.authToken);
      await localStorage.setUserId(fakeResponse.user.id);

      dispatch({
        type: t.LOGIN_SUCCESS,
        payload:fakeResponse,
      })
    
  }
}

export function logout() {
  return dispatch => {

    localStorage.clearAuth();

    dispatch({
      type: t.LOGOUT_SUCCESS,
    })
  }
}