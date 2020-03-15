import { ROUTES } from '../../enums';

export const SET_ROUTE = 'SET_ROUTE';

// Action Type
export interface SetRouteType {
  type: typeof SET_ROUTE;
  path: ROUTES.types;
};

export type RouterActionTypes = SetRouteType;

// Reducer Model
export interface RouterModel {
  currentRoute: ROUTES.types;
  previousRoute: ROUTES.types;
}
