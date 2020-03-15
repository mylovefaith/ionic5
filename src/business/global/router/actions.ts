import { ROUTES } from "../../enums";
import { RouterActionTypes, SET_ROUTE } from "./types";

export const setRoute = (path: ROUTES.types):RouterActionTypes => ({
  type: SET_ROUTE,
  path
})
