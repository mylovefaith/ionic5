export const FETCH_GROUP_SUCCESS = 'FETCH_GROUP_SUCCESS';
export const FETCH_GROUP_FAILURE = 'FETCH_GROUP_FAILURE';
export const CLEAN_GROUP = '';

// Action Types
export interface FetchGroupSuccessType {
  type: typeof FETCH_GROUP_SUCCESS;
  group: GroupModel;
}

export interface FetchGroupFailureType {
  type: typeof FETCH_GROUP_FAILURE;
  err: string;
}

export interface CleanGroupType {
  type: typeof CLEAN_GROUP;
}

export type GroupActionTypes = FetchGroupSuccessType | FetchGroupFailureType | CleanGroupType;

// Reducer Model
export interface GroupModel {
  id: number;
  name: string;
}

export const GROUP_INIT_STATE: GroupModel = {
  id: 0,
  name: '',
};
