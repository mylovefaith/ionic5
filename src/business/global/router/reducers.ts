import { RouterModel, RouterActionTypes, SET_ROUTE } from "./types";

export const INITIAL_STATE:RouterModel = {
  currentRoute: null,
  previousRoute: null,
};

export default function(state:RouterModel = INITIAL_STATE, action: RouterActionTypes):RouterModel {
  switch (action.type) {
    case SET_ROUTE:
      return {
        currentRoute: action.path,
        previousRoute: state.currentRoute,
      }
    default:
      return state;
  }
}
