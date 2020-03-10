import { t } from '../actions';

export const INITIAL_STATE = {
  currentRoute: null,
  previousRoute: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.ROUTE: 
      return {
        currentRoute: action.payload,
        previousRoute: state.currentRoute,
      }
    default:
      return state;
  }
}
