import { t } from '../_actions';
import { DEFAULT_AUTH_TOKEN } from '../enums';

export const INITIAL_STATE = {
  store: null,
  user: null,
  device: null,
  initSuccess: null,
  localStorage: {
    storeId: null,
    userId: null,
    deviceId: null,
    authToken: DEFAULT_AUTH_TOKEN,
    mode: null,
    theme: null,
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
          authToken: DEFAULT_AUTH_TOKEN,
        }
      }
    case t.FETCH_STORE_SUCCESS:
      return {
        ...state,
        store: action.payload,
        initSuccess: true,
      }
    case t.FETCH_STORE_FAILURE:
      return {
        ...state,
        initSuccess: false,
        store: action.payload,
      }
    default:
      return state;
  }
}
