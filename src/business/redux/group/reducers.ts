import {
  GroupModel,
  GroupActionTypes,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILURE,
  CLEAN_GROUP,
  GROUP_INIT_STATE,
} from './types';

export default function(state: GroupModel = GROUP_INIT_STATE, action: GroupActionTypes): GroupModel {
  switch (action.type) {
    case FETCH_GROUP_SUCCESS:
      return action.group;
    case FETCH_GROUP_FAILURE:
      return GROUP_INIT_STATE;
    case CLEAN_GROUP:
      return GROUP_INIT_STATE;
    default:
      return state;
  }
}
