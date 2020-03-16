import { InitModel, LOAD_STORAGE, FETCH_STORE_FAILURE, FETCH_STORE_SUCCESS, INIT_STATE } from './types';
import { DEFAULT_AUTH_TOKEN } from '../../enums';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../auth/types';
import { AnyActionType } from '../types';

export default function(state:InitModel = INIT_STATE, action: AnyActionType):InitModel {
  switch (action.type) {
    case LOAD_STORAGE:
      return {
        ...state,
        localStorage: action.localStorage,
      };
    case FETCH_STORE_SUCCESS:
      return {
        ...state,
        initSuccess: true,
      };
    case FETCH_STORE_FAILURE:
      return {
        ...state,
        initSuccess: false,
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
