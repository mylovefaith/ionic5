import { StoreModel, SET_STORE, CLEAN_STORE, STORE_INIT_STATE } from './types';
import { AnyActionType } from '../types';
import { FETCH_STORE_SUCCESS } from '../init/types';

export default function(state:StoreModel = STORE_INIT_STATE, action: AnyActionType):StoreModel {
  switch (action.type) {
    case SET_STORE:
      return action.store;
    case CLEAN_STORE:
      return STORE_INIT_STATE;
    case FETCH_STORE_SUCCESS:
      return action.store;
    default:
      return state;
  }
}
