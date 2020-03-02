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
    case t.LOAD_APP: 
      return {
        ...state,
        localStorage: action.payload
      }
    case t.GET_STORE:
      return {
        ...state,
        store: action.payload
      }
    default:
      return state;
  }
}
