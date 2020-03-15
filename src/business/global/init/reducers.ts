import { 
  InitModel, 
  InitActionTypes, 
  LOAD_STORAGE, 
  FETCH_STORE_FAILURE, 
  FETCH_STORE_SUCCESS 
} from "./types";
import { DEFAULT_AUTH_TOKEN } from '../../enums';

export const INITIAL_STATE:InitModel = {
  store: null,
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

export default function(state:InitModel = INITIAL_STATE, action: InitActionTypes) {
  switch (action.type) {
    case LOAD_STORAGE: 
      return {
        ...state,
        localStorage: action.localStorage,
      }
    case FETCH_STORE_SUCCESS:
      return {
        ...state,
        store: action.store,
        initSuccess: true,
      }
    case FETCH_STORE_FAILURE:
      return {
        ...state,
        initSuccess: false,
        err: action.err,
      }
    default:
      return state;
  }
}
