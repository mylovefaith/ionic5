import { localStorage } from '../services';
import { t } from './';

function login(email, password) {
  return async dispatch => {
    dispatch({
      type: t.LOGGING_IN
    })

    setTimeout(function() {
      dispatch({
        type: t.LOGIN_SUCCESS,
        payload: {
          id: 1,
          email: 'mylovefaith@gmail.com',
          firstName: 'Peter',
          lastName: 'Yoon',
        }
      })
    }, 2000);
    
  }
}

export default loadApp;
