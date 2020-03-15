import { InitModel, LOAD_STORAGE, FETCH_STORE_FAILURE, FETCH_STORE_SUCCESS } from './types';
import { DEFAULT_AUTH_TOKEN } from '../../enums';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../auth/types';
import { AnyActionType } from '../../types';

export const INITIAL_STATE: InitModel = {
  store: null,
  initSuccess: null,
  localStorage: {
    storeId: null,
    userId: null,
    deviceId: null,
    authToken: DEFAULT_AUTH_TOKEN,
    mode: null,
    theme: null,
  },
};

export default function(state: InitModel = INITIAL_STATE, action: AnyActionType) {
  switch (action.type) {
    case LOAD_STORAGE:
      return {
        ...state,
        localStorage: action.localStorage,
      };
    case FETCH_STORE_SUCCESS:
      return {
        ...state,
        store: action.store,
        initSuccess: true,
      };
    case FETCH_STORE_FAILURE:
      return {
        ...state,
        initSuccess: false,
        err: action.err,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        localStorage: {
          ...state.localStorage,
          authToken: action.payload.authToken,
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        localStorage: {
          ...state.localStorage,
          authToken: DEFAULT_AUTH_TOKEN,
        },
      };
    default:
      return state;
  }
}
