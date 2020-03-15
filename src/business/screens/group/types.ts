export const FETCH_GROUP_SUCCESS = 'FETCH_GROUP_SUCCESS';
export const FETCH_GROUP_FAILURE = 'FETCH_GROUP_FAILURE';
export const CLEAN_GROUP = 'CLEAN_GROUP';

// Action Types
export interface fetchGroupSuccessType {
  type: typeof FETCH_GROUP_SUCCESS;
  group: GroupModel;
};

export interface fetchGroupFailureType {
  type: typeof FETCH_GROUP_FAILURE;
  err: string;
}

export interface cleanGroupType {
  type: typeof CLEAN_GROUP;
}

export type GroupActionTypes = fetchGroupSuccessType | fetchGroupFailureType | cleanGroupType;

// Reducer Model
export interface GroupModel {
  id: number
  name: string
}
