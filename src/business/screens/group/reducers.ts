import { GroupModel, GroupActionTypes, FETCH_GROUP_SUCCESS, FETCH_GROUP_FAILURE, CLEAN_GROUP } from "./types";

export const INITIAL_STATE:GroupModel = null;

export default function(state:GroupModel = INITIAL_STATE, action: GroupActionTypes):GroupModel {
  switch (action.type) {
    case FETCH_GROUP_SUCCESS: 
      return action.group;
    case FETCH_GROUP_FAILURE:
      return null;
    case CLEAN_GROUP:
      return INITIAL_STATE;
    default:
      return state;
  }
}
