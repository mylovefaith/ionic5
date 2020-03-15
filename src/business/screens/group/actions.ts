import { Dispatch } from "redux"
import { GroupActionTypes, FETCH_GROUP_SUCCESS, CLEAN_GROUP } from "./types"
import { LOADING } from "../../global/loading/types";
import { AnyActionType } from "../../types";

export function fetchGroup(groupId:number) {
  return async (dispatch:Dispatch<AnyActionType>) => {
    dispatch({
      type: LOADING
    });

    const fakeResponse = {
        id: 1,
        name: 'Test Group',
    }

    setTimeout(() => {
      dispatch({
        type: FETCH_GROUP_SUCCESS,
        group: fakeResponse,
      })
    }, 1000)
  }
}

export function dehydrate():GroupActionTypes {
  return { type: CLEAN_GROUP}
}
