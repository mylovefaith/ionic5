import { t } from '../actions';

export const INITIAL_STATE = {
  store: null,
  user: null,
  authToken: null,
  device: null,
  localStorage: {
    storeId: null,
    userId: null,
    deviceId: null,
    authToken: null,
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.LOAD_STORAGE: 
      return {
        ...state,
        localStorage: action.payload
      }
    case t.LOGGING_IN:
      return {
        ...state,
      }
    case t.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        localStorage: {
          ...state.localStorage,
          userId: action.payload.user.id,
          authToken: action.payload.authToken
        }
      }
    case t.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        localStorage: {
          ...state.localStorage,
          userId: null,
          authToken: null,
        }
      }
    case t.FETCH_STORE_SUCCESS:
      return {
        ...state,
        store: action.payload
      }
    default:
      return state;
  }
}
