import { t } from '../actions';

export const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.FETCH_GROUP_SUCCESS: 
      return action.payload
    case t.FETCH_GROUP_FAILURE:
      return null;
    case t.CLEAN_GROUP:
      return INITIAL_STATE;
    default:
      return state;
  }
}
