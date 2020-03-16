import { RouterModel, RouterActionTypes, SET_ROUTE, ROUTER_INIT_STATE } from "./types";

export default function(state:RouterModel = ROUTER_INIT_STATE, action: RouterActionTypes):RouterModel {
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
